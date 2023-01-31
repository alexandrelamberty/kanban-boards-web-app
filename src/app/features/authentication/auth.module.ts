import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { AuthRoutingModule } from './auth-routing.module';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { VerifyEmailComponent } from './pages/verify-email/verify-email.component';
import { RouterModule } from '@angular/router';
import { AuthService } from './services/auth.service';

@NgModule({
  imports: [CommonModule, RouterModule, AuthRoutingModule],
  declarations: [
    SignInComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
  ],
  providers: [AuthService],
  exports: [SignInComponent],
})
export class AuthenticationModule {}
