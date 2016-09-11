import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Url} from "../model/url";
import {Test} from "../model/test";

@Component({
  moduleId: module.id,
  selector: 'test-list',
  templateUrl: 'test.list.component.html'
})
export class TestListComponent implements OnInit {
  tests: Test[] = [];

  @Output()
  onSelected: EventEmitter<Test> = new EventEmitter();

  ngOnInit(): void {
    for (let i = 0; i < 5; i++) {
      let url: Url = new Url();
      url.host = 'www.google.com/' + i;

      let test = new Test();
      test.id = i;
      test.method = 'GET';
      test.url = url;
      test.date = new Date();
      test.user = 'Dale Seo';

      this.tests.push(test);
    }
  }

  loadForm(test: Test): void {
    console.log('>>> loadForm : ' + JSON.stringify(test));
    this.onSelected.emit(test);
  }

  create(test: Test): void {
    console.log('>>> create : ' + JSON.stringify(test));
    this.tests.push(test);
  }

}