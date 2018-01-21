import expect from 'expect';
import sinon from 'sinon';

import { sendInvitation as sendInvitationFull } from './full';
import { mutateChange, noChange, sailingClub, sendInvitation } from './forEach';

describe('forEach', () => {
  it('should send an email to each person with a for loop', () => {
    const sendInvitationSpy = sinon.spy();
    sendInvitationFull(sailingClub, sendInvitationSpy);
    expect(sendInvitationSpy.getCalls().length).toEqual(6);
  });

  it('should send an email to each person', () => {
    const sendInvitationSpy = sinon.spy();
    sendInvitation(sailingClub, sendInvitationSpy);
    expect(sendInvitationSpy.getCalls().length).toEqual(6);
  });

  it('should not make a change on a forEach loop', () => {
    expect(noChange()).toEqual(undefined);
  });

  it('should mutate an array on a forEach loop', () => {
    expect(mutateChange()).toEqual(['WALTER', 'WHITE']);
  });
});
