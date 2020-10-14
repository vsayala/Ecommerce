import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SendMailComponent } from './send-mail/send-mail.component';
import { UpdatePasswordComponent } from './update-password/update-password.component';
import { RegisterComponent } from './register/register.component';



@NgModule({
  declarations: [LoginComponent, SendMailComponent, UpdatePasswordComponent, RegisterComponent],
  imports: [
    CommonModule
  ]
})
export class AuthModule { }
