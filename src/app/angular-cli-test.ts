import {Component} from 'angular2/core';


@Component({
  selector: 'angular-cli-test-app',
  providers: [],
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
