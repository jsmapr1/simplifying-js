// START:func
class Validator {
  constructor() {
    this.message = 'is invalid.';
    this.setInvalidMessage = this.setInvalidMessage.bind(this);
  }

  setInvalidMessage(field) {
    return `${field} ${this.message}`;
  }

  setInvalidMessages(...fields) {
    return fields.map(this.setInvalidMessage);
  }
}
// END:func

export { Validator };
