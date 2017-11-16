import expect from 'expect';

import {
  configureTimePermissions as configureLet,
  configureTimePermissionsScope as configureLetScope,
} from './if';
import { configureTimePermissions as configureProblem } from './ternaryProblem';

describe('ternary ', () => {
  it('should not set time permissions with if and let', () => {
    let RefError;
    try {
      configureLet({ title: 'manager' });
    } catch (error) {
      RefError = error instanceof ReferenceError;
    }
    expect(RefError).toEqual(true);
  });

  it('should set time permissions with if and let', () => {
    expect(configureLetScope({ title: 'manager' })).toEqual(['time', 'pay']);
  });

  it('should set manager, supervisor, employee with ternary', () => {
    expect(configureProblem({ title: 'manager' })).toEqual(['time', 'overtimeAuthorization', 'pay']);
    expect(configureProblem({ title: 'supervisor' })).toEqual(['time', 'overtimeAuthorization']);
    expect(configureProblem({ title: 'employee' })).toEqual(['time']);
  });
});
