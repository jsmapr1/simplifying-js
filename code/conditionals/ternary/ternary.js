function configureTimePermissions(title) {
//  # START:const
  const permissions = title === 'manager' ? ['time', 'pay'] : ['time'];
  //  # END:const
  return permissions;
}

export { configureTimePermissions };
