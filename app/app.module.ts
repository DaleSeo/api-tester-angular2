import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }   from './app.component';
import {ApiComponent} from "./test/component/test.component";
import {TestHistoryComponent} from "./test/component/test.list.component";
import {TestFormComponent} from "./test/component/test.form.component";

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
