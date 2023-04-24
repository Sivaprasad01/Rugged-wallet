import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MakeMyTrip';
  
  sidebar:boolean=true
  sidebartoggle(){
    this.sidebar=!this.sidebar
  }
}
