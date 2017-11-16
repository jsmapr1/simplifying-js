// START: func
const validator = {
  message: 'is invalid.',
  setInvalidMessage: field => `${field} ${this.message}`,
};
// END: func

export { validator };
