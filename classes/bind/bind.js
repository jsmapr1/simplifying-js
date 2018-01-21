// START:bind
function sayMessage() {
  return this.message;
}

const alert = {
  message: 'Danger!',
};

const sayAlert = sayMessage.bind(alert);

sayAlert();
// Danger!
// END:bind

// START:func
class Validator {
  constructor() {
    this.message = 'is invalid.';
  }

  setInvalidMessage(field) {
    return `${field} ${this.message}`;
  }

  setInvalidMessages(...fields) {
    return fields.map(this.setInvalidMessage.bind(this));
  }
}
// END:func

export { Validator, sayAlert, alert, sayMessage };
