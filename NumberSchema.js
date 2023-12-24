export default class NumberSchema {
  isValid(value) {
    const isNumber = typeof value === 'number' && !Number.isNaN(value);
    return this.isEvenFlag ? isNumber && value % 2 === 0 : isNumber;
  }

  isEven() {
    this.isEvenFlag = true;
    return this;
  }

  isEvenFlag = null;
}
