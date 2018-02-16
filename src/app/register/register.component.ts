import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name:string;
  email:string;
  city:string;
  username:string;
  pass:string;
  constructor(public userService:UserService) { }

  ngOnInit() {
  }
  onSubmit(){
    this.userService.create(this.name, this.email, this.city, this.username, this.pass).then(data=>{
      console.log(data);
    });
  }
}
