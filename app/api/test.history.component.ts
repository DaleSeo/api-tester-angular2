import {Component, OnInit} from '@angular/core';
import {Url} from "./model/url";
import {Test} from "./model/test";

@Component({
  selector: 'test-history',
  templateUrl: 'test.history.component.html'
})
export class TestHistoryComponent implements OnInit {
  tests: Test[] = [];

  ngOnInit() {
    let url: Url = new Url();
    url.host = 'www.google.com';

    let test = new Test();
    test.method = 'GET';
    test.url = url;
    test.date = new Date();
    test.user = 'Dale Seo';

    this.tests.push(test);
  }
}