import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {Test} from "../model/test";
import {Url} from "../model/url";
import {Req} from "../model/req";
import {METHODS, SCHEMES} from "../model/constants";

@Component({
  moduleId: module.id,
  selector: 'test-form',
  templateUrl: 'test.form.component.html'
})
export class TestFormComponent implements OnInit {
  methods: string[] = METHODS;
  schemes: string[] = SCHEMES;
  test: Test;

  @Output()
  onSubmitted: EventEmitter<Test> = new EventEmitter();

  ngOnInit(): void {
    this.test = new Test();
    this.test.method = 'GET';
    this.test.url = new Url();
    this.test.req = new Req();
  }

  onSubmit(): void {
    console.log('onSubmit');
    this.onSubmitted.emit(this.test);
  }

  setTest(test: Test): void {
    console.log('>>> setTest : ' + JSON.stringify(test));
    this.test = JSON.parse(JSON.stringify(test));
  }

}