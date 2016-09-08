import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import {ApiComponent} from "./api/api.component";

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, ApiComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
