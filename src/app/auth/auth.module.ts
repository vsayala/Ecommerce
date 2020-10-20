import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SendMailComponent } from './send-mail/send-mail.component';
import { UpdatePasswordComponent } from './update-password/update-password.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'send-mail', component: SendMailComponent},
  {path: 'update-password', component: UpdatePasswordComponent}
];


@NgModule({
  declarations: [
    LoginComponent,
    SendMailComponent,
    UpdatePasswordComponent,
    RegisterComponent],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {useHash: true})
  ]
})
export class AuthModule { }
