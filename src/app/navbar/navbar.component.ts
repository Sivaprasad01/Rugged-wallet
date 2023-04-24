import { Component, EventEmitter,Output,OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
constructor(){}

ngOnInit():void{

}
//create an object for the event  ,  EventEmitter is a pre-defined class in angular
//@Output used in parent child connection
@Output() toggle=new EventEmitter();

menuClick(){

  this.toggle.emit();

}

}
