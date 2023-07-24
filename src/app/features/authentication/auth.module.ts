import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthRoutingModule } from './auth-routing.module';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { VerifyEmailComponent } from './pages/verify-email/verify-email.component';
import { AuthService } from './services/auth.service';

@NgModule({
  imports: [CommonModule, RouterModule, AuthRoutingModule],
  declarations: [
    ForgotPasswordComponent,
    SignInComponent,
    VerifyEmailComponent,
  ],
  providers: [AuthService],
  exports: [SignInComponent],
})
export class AuthenticationModule {}
