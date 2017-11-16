// START:class
class Validator {
  constructor() {
    this.message = 'is invalid.';
    this.setInvalidMessage = field => `${field} ${this.message}`;
  }

  setInvalidMessages(...fields) {
    return fields.map(this.setInvalidMessage);
  }
}
// END:class

export { Validator };
