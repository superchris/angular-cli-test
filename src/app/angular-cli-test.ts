import {Component, ViewEncapsulation} from 'angular2/core';
import ng2test from 'ng2-cli-test-lib/ng2-cli-test-lib';
import {TestService, TestService2} from 'ng2-cli-test-lib/ng2-cli-test-lib';

@Component({
  selector: 'angular-cli-test-app',
  viewProviders: [ng2test.providers],
  templateUrl: 'app/angular-cli-test.html',
  styles: ng2test.styles,
  directives: [ng2test.directives],
  pipes: [ng2test.pipes],
  encapsulation: ViewEncapsulation.None
})
export class AngularCliTestApp {
  defaultMeaning: number = 42;

  constructor(private test1: TestService, private test2: TestService2) {
  
  }
  
  meaningOfLife(meaning) {
    return `The meaning of life is ${meaning || this.defaultMeaning}`;
  }
}
