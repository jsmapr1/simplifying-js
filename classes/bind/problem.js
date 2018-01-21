// START: class
class Validator {
  constructor() {
    this.message = 'is invalid.';
  }

  setInvalidMessage(field) {
    return `${field} ${this.message}`;
  }

  setInvalidMessages(...fields) {
    return fields.map(this.setInvalidMessage);
  }
}
// END: class

export { Validator };
