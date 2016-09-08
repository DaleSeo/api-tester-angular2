import { Component } from '@angular/core';
import {ApiComponent} from "./api/api.component";

@Component({
  selector: 'api-tester',
  template: `<api></api>`,
  directives: [ApiComponent]
})
export class AppComponent {
}