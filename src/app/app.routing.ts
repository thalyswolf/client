import { AuthGuardService } from './guards/auth-guard';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { DashComponent } from './dash/dash.component';
import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";

const APP_ROUTES: Routes = [
    { path: '', component: HomeComponent, canActivate:[AuthGuardService] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'home', component: HomeComponent, canActivate:[AuthGuardService] },
    { path: 'dash', component: DashComponent, canActivate:[AuthGuardService] }
]; 

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);