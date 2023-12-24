export default class StringSchema {
  isValid(value) {
    return typeof value === 'string'
      && (value.length >= this.lengths.min && value.length <= this.lengths.max);
  }

  length(min, max = Infinity) {
    this.lengths.min = min;
    this.lengths.max = max;
    return this;
  }

  lengths = {
    min: -Infinity,
    max: Infinity,
  };
}
