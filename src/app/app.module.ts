import { NgModule } from '@angular/core';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { AuthenticationModule } from './features/authentication/auth.module';
import { ProfileComponent } from './features/authentication/pages/profile/profile.component';
import { AuthService } from './features/authentication/services/auth.service';
import { BoardsModule } from './features/boards/boards.module';
import { SharedModule } from './shared/shared.module';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { HomeComponent } from './core/components/home/home.component';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    AuthenticationModule,
    CoreModule,
    SharedModule,
    BoardsModule,
    AngularFireModule.initializeApp(environment.firebase),
    //AngularFireDatabaseModule,
    AngularFirestoreModule,
    // provideAuth(() => getAuth()),
    AngularFireAuthModule,
    provideFirestore(() => getFirestore()),
    //AngularFireStorageModule,
  ],
  providers: [AuthService],
  declarations: [AppComponent, ProfileComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
