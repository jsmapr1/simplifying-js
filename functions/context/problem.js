/* eslint-disable no-unused-vars, no-param-reassign, no-console, func-names */

// START:func
const validator = {
  message: 'is invalid.',
  setInvalidMessages(...fields) {
    return fields.map(function (field) {
      return `${field} ${this.message}`;
    });
  },
};
// END:func

export { validator };
