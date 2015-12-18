import {describe, it, expect, beforeEachProviders, inject} from 'angular2/testing';
import {AngularCliTestApp} from '../app/angular-cli-test';

beforeEachProviders(() => [AngularCliTestApp]);

describe('App: AngularCliTest', () => {
  it('should have the `defaultMeaning` as 42', inject([AngularCliTestApp], (app) => {
    expect(app.defaultMeaning).toBe(42);
  }));

  describe('#meaningOfLife', () => {
    it('should get the meaning of life', inject([AngularCliTestApp], (app) => {
      expect(app.meaningOfLife()).toBe('The meaning of life is 42');
      expect(app.meaningOfLife(22)).toBe('The meaning of life is 22');
    }));
  });
});

