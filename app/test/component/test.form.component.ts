import {Component} from '@angular/core';
import {Test} from "../model/test";

@Component({
  moduleId: module.id,
  selector: 'test-form',
  templateUrl: 'test.form.component.html'
})
export class TestFormComponent {
  methods: string[] = ['GET', 'POST', 'PUT', 'DELETE'];
  test: Test;

}