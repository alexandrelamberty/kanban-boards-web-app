import { Injectable } from '@angular/core';
import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';

@Injectable()
export class SignedInGuard implements CanActivate {
  // here you can inject your auth service to check that user is signed in or not
  constructor(private authService: AuthService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    if (this.authService.isLoggedIn && this.authService.isLoggedIn === true) {
      this.router.navigate(['/profile']); // or home
      return false;
    }
    return true;
  }
}
