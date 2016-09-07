import { Component } from '@angular/core';

@Component({
    selector: 'api-tester',
    template: `
    <h1>{{heading}}</h1>
  `
})
export class AppComponent {
    heading = "API Tester"
}