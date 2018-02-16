import { AuthGuardService } from './guards/auth-guard';
import { ContactsService } from './dash/contacts.service';
import { UserService } from './user.service';

import { routing } from './app.routing';
import { AuthService } from './login/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { LoginPipe } from './login.pipe';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { DashComponent } from './dash/dash.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginPipe,
    LoginComponent,
    HeaderComponent,
    DashComponent,
    RegisterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
    
  ],
  providers: [AuthService, UserService, ContactsService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
