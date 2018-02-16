import { AuthService } from './../login/auth.service';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";

@Injectable()
export class AuthGuardService implements CanActivate{
  

  constructor(private authService:AuthService,
              private router:Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean>{
    if(this.authService.authState){
      return true
    }else{
      this.router.navigate(['/login'])
      return false
    }
  }

}
