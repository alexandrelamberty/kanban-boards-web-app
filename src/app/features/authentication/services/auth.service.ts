import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import * as auth from 'firebase/auth';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userData: any;

  constructor(
    public afs: AngularFirestore,
    public afAuth: AngularFireAuth,
    public router: Router,
    public ngZone: NgZone
  ) {
    // Subscribe to the auth state to reflect the user status in the local storage
    this.afAuth.authState.subscribe((user) => {
      console.log('--- ON AUTH STATE ---', user);
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user')!);
      } else {
        localStorage.setItem('user', 'null');
        JSON.parse(localStorage.getItem('user')!);
      }
    });
  }

  /**
   * Returns true when user is looged in and email is verified
   */
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user')!);
    return user !== null && user.emailVerified !== false ? true : false;
  }

  /**
   * Sign in with an email and password
   * @param email
   * @param password
   * @returns
   */
  signIn(email: string, password: string) {
    return this.afAuth
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        this.setUserData(result.user);
        this.afAuth.authState.subscribe((user) => {
          if (user) {
            console.log(user);
            //this.router.navigate(['../boards']);
            this.ngZone.run(() => this.router.navigate(['boards']));
          }
        });
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }

  /**
   * Sign in with a Google account
   * @returns
   */
  signInGoogle() {
    return this.authLogin(new auth.GoogleAuthProvider())
      .then((result) => {
        this.afAuth.authState.subscribe((user) => {
          if (user) {
            console.log(user);
            this.ngZone.run(() => this.router.navigate(['boards']));
          }
        });
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }

  /**
   * Sign up with an email and possword.
   * @param email
   * @param password
   * @returns
   */
  signUp(email: string, password: string) {
    return this.afAuth
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        this.setUserData(result.user);
        this.sendVerificationMail();
      })
      .catch((error) => {
        window.alert(error.message);
      });
  }

  /**
   * Send an email verfificaiton when new user sign up and redirect him to the
   * verify-email-page.
   * @returns
   */
  sendVerificationMail() {
    return this.afAuth.currentUser
      .then((u: any) => u.sendEmailVerification())
      .then(() => {
        this.router.navigate(['verify-email-address']);
      });
  }

  /**
   * Send an email reset password
   * @returns
   */
  forgotPassword(passwordResetEmail: string) {
    return this.afAuth
      .sendPasswordResetEmail(passwordResetEmail)
      .then(() => {
        window.alert('Password reset email sent, check your inbox.');
      })
      .catch((error) => {
        window.alert(error);
      });
  }

  /**
   * Authentication providers factory
   * @param provider
   * @returns
   */
  authLogin(provider: any) {
    console.log('authLogin provider: ', provider);
    return this.afAuth
      .signInWithPopup(provider)
      .then((result) => {
        console.log('authLogin result: ', result);
        console.log('authLogin router: ', this.router);
        this.setUserData(result.user);
      })
      .catch((error) => {
        window.alert(error);
      });
  }

  /**
   * Save the user details
   * @param user
   * @returns
   */
  setUserData(user: any) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(
      `users/${user.uid}`
    );
    const userData: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified,
    };
    return userRef.set(userData, {
      merge: true,
    });
  }

  /**
   * Sign out the user from the application. Clearing the localStorage.
   * @returns
   */
  signOut() {
    return this.afAuth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['sign-in']);
    });
  }
}
