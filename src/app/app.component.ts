import { AuthService } from './login/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'app works!';
  mostrarMenu:boolean = true;
  constructor(private authService: AuthService){

  } 
  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.authService.menuEmitter.subscribe(
      mostrar => this.mostrarMenu = mostrar 
    )
  }
}

