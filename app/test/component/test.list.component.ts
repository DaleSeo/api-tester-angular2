import {Component, OnInit} from '@angular/core';
import {Url} from "../model/url";
import {Test} from "../model/test";

@Component({
  moduleId: module.id,
  selector: 'test-list',
  templateUrl: 'test.list.component.html'
})
export class TestListComponent implements OnInit {
  tests: Test[] = [];

  ngOnInit(): void {
    let url: Url = new Url();
    url.host = 'www.google.com';

    let test = new Test();
    test.method = 'GET';
    test.url = url;
    test.date = new Date();
    test.user = 'Dale Seo';

    this.tests.push(test);
    this.tests.push(test);
    this.tests.push(test);
  }

  create(test: Test): void {
    this.tests.push(test);
  }

}