import { ContactsService } from './contacts.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {
  cadastrar=true;
  contacts:any=[];
  name;
  phone;
  currentUser;
  constructor(public contactService:ContactsService) { 
    
  }
  ngOnInit() {
     this.currentUser = JSON.parse(window.localStorage.getItem('sessao')); 
     this.contactService.loadJson(this.currentUser.user.id_person).subscribe(data =>{
      this.contacts = data;
     });
     console.log(this.currentUser.token);
     console.log(this.currentUser.user.id_person);
     
  }
  onClick():void{
    this.cadastrar = !this.cadastrar;
  }
  onContacts(){
    this.contactService.create(this.name, this.phone, this.currentUser.user.id_person).then(res=>{
      this.contacts.push(res)
    });
  }
}
