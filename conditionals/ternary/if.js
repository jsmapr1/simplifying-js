/* eslint-disable block-scoped-var, no-redeclare, no-var, no-undef, no-unused-vars, vars-on-top */

function configureTimePermissions({ title }) {
  if (title === 'manager') {
    var permissions = ['time', 'pay'];
  } else {
    var permissions = ['time'];
  }
  return permissions;
}

function configureTimePermissions({ title }) {
//  # START:let
  if (title === 'manager') {
    const permissions = ['time', 'pay'];
  } else {
    const permissions = ['time'];
  }
  permissions;
  // ReferenceError: permissions is not defined
  //  # END:let
  return permissions;
}
function configureTimePermissionsScope({ title }) {
//  # START:scope
  let permissions;
  if (title === 'manager') {
    permissions = ['time', 'pay'];
  } else {
    permissions = ['time'];
  }
  //  # END:scope
  return permissions;
}

export { configureTimePermissions, configureTimePermissionsScope };
