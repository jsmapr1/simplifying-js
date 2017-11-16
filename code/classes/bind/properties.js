// START:func
class Validator {
  message = 'is invalid.';

  setMessage = field => `${field} ${this.message}`;

  setInvalidMessages(...fields) {
    return fields.map(this.setMessage);
  }
}
// END:func

export { Validator };
