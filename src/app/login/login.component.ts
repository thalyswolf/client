import { Sessao } from './sessao';
import { User } from './user';
import { AuthService } from './auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:User = new User();
  constructor(public auth:AuthService,private router: Router) { }

  ngOnInit() {
  }

  onLogin(){
    console.log(this.user);
    this.auth.auth(this.user.username, this.user.pass).then(data=>{
      console.log(data);
      window.localStorage.setItem('sessao', JSON.stringify(data));
       this.router.navigate(['dash']);
    }).catch((e)=>{
      console.log(e);
    });
  }
}
