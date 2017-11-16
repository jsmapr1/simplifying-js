// START: func
const validator = {
  message: 'is invalid.',
  setInvalidMessages(...fields) {
    return fields.map(field => {
      return `${field} ${this.message}`;
    });
  },
};

validator.setInvalidMessages('city');
// ['city is invalid.]
// END: func

export { validator };
