import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/do';
import { Observable } from "rxjs/Observable";
@Injectable()
export class ContactsService {

  constructor(public http:Http) { }
  
  get(id){
    let headers = new Headers({
      'Content-Type' : 'application/json'
    });
    let options = new RequestOptions({ headers: headers });
    return new Promise((resolve, reject) => {
      this.http.get('http://localhost:8080/contacts/'+id, options)
      .map(res => res.json())
    });
  }
  loadJson(id) {
     return this.http.get('http://localhost:8080/contacts/'+id).map(res => res.json())
     
  }

  private catchError(error:Response | any){
    console.log(error);
    return Observable.throw(error.json() || 'Server error');
    
  }
  private logResponse(res:Response){
    console.log(res);
  }

  private extractData(res:Response){
    return res.json();
  }

  create(name, phone, id){
    let headers = new Headers({
      'Content-Type' : 'application/json'
    });
    let options = new RequestOptions({ headers: headers });
    return new Promise((resolve, reject) => {
      this.http.post('http://localhost:8080/contacts',  {
	      "name":name,
	      "phone":phone,
        "person_id":id
      }, options)
      .toPromise()
      .then((response) =>{
        
        resolve(response.json());
    })
     .catch((error) =>{
        reject(error.json());
      });
    });
  }
  
}
