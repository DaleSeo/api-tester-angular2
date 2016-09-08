import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }   from './app.component';
import {ApiComponent} from "./api/test.component";
import {TestHistoryComponent} from "./api/test.history.component";
import {TestFormComponent} from "./api/test.form.component";

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [
    AppComponent,
    ApiComponent,
    TestHistoryComponent,
    TestFormComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
