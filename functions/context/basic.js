// START:func
const validator = {
  message: 'is invalid.',
  setInvalidMessage(field) {
    return `${field} ${this.message}`;
  },
};

validator.setInvalidMessage('city');
// city is invalid.
// END:func

export { validator };
