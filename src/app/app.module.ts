import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { QuestionComponent } from './question-home/question.component';
import { Questions } from './question.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ 
    AppComponent, 
    HelloComponent,
    QuestionComponent,
  ],
  bootstrap:    [ AppComponent ],
  providers: [
    Questions,
  ]
})
export class AppModule { }
