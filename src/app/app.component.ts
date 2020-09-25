import { Component } from '@angular/core';
import { Quote } from './quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes:Quote[];

  constructor(){
    this.quotes = [new Quote(3,"Simplicity is the ultimate sophistication")]
  } 
}


