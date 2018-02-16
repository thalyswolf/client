import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class UserService {

  constructor(public http:Http) { }

  create(name, email, city, user, password){
    let headers = new Headers({
      'Content-Type' : 'application/json'
    });
    let options = new RequestOptions({ headers: headers });
    return new Promise((resolve, reject) => {
      this.http.post('http://localhost:8080/user',  {
	      "name":name,
	      "email":email,
        "city":city,
        "username":user,
        "pass":password
      }, options)
      .toPromise()
      .then((response) =>{
        let user = response.json();  
        resolve(response.json());
    })
     .catch((error) =>{
      console.error('API Error : ', error.status);
      console.error('API Error : ', JSON.stringify(error));
      reject(error.json());
      });
    });
  }
}
