import {Component} from 'angular2/core';
import ng2test from "ng2-cli-test-lib";

@Component({
  selector: 'angular-cli-test-app',
  providers: [ng2test.providers],
  templateUrl: 'app/angular-cli-test.html',
  directives: [],
  pipes: []
})
export class AngularCliTestApp {
  defaultMeaning: number = 42;

  meaningOfLife(meaning) {
    return `The meaning of life is ${meaning || this.defaultMeaning}`;
  }
}
