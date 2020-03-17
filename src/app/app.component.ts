import { Component } from '@angular/core';
import { Questions } from './question.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent {
  constructor( questions: Questions ) { 
  console.log(questions); 
  }
}
