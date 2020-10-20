import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AuthModule } from './auth/auth.module';
import { FooterComponent } from './common/footer/footer.component';
import { NavbarComponent } from './common/navbar/navbar.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms'
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    ReactiveFormsModule,
    FormsModule,
    // CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
