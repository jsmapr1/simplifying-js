/* eslint-disable no-nested-ternary, no-unused-vars */

function configureTimePermissions({ title }) {
  // #START:problem
  const permissions = title === 'supervisor' || title === 'manager' ?
    title === 'manager' ?
      ['time', 'overtimeAuthorization', 'pay'] : ['time', 'overtimeAuthorization']
    : ['time'];
  // #END:problem
  return permissions;
}

// #START:func
function getTimePermissions({ title }) {
  if (title === 'manager') {
    return ['time', 'overtimeAuthorization', 'pay'];
  }

  if (title === 'supervisor') {
    return ['time', 'overtimeAuthorization'];
  }
  return ['time'];
}

const permissions = getTimePermissions({ title: 'employee' });
// ['time']
// #END:func

export { configureTimePermissions };
