/* eslint-disable class-methods-use-this */
import NumberSchema from './NumberSchema.js';
import ObjectSchema from './ObjectSchema.js';
import StringSchema from './StringSchema.js';

export default class Validator {
  string() {
    return new StringSchema();
  }

  number() {
    return new NumberSchema();
  }

  object() {
    return new ObjectSchema();
  }
}
