import { Injectable, EventEmitter } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AuthService {
  currentUser;
  menuEmitter = new EventEmitter<boolean>();
  
  constructor(public http:Http) { }
  authState = false;

  auth(user, password){
    let headers = new Headers({
      'Content-Type' : 'application/json'
    });
    let options = new RequestOptions({ headers: headers });
    return new Promise((resolve, reject) => {
      this.http.post('http://localhost:8080/auth',  {
	      "username":user,
	      "pass":password
      }, options)
      .toPromise()
      .then((response) =>{
        let user = response.json();   
        this.currentUser = user.data;
        this.menuEmitter.emit(false)
        this.authState = true;
        resolve(response.json());
    })
     .catch((error) =>{
       this.menuEmitter.emit(true)
        reject(error.json());
      });
    });
  }
}
