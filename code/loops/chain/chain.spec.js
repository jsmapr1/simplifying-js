import expect from 'expect';
import sinon from 'sinon';

import { sailors, sendActiveMemberEmail } from './chain';
import { sendActiveMemberEmail as sendActiveMemberEmailFull } from './full';

describe('chaining', () => {
  it('should get only send to active members', () => {
    const sendInvitationSpy = sinon.spy();

    sendActiveMemberEmailFull(sailors, sendInvitationSpy);
    expect(sendInvitationSpy.calledTwice).toEqual(true);
  });

  it('should get only send to active members', () => {
    const sendInvitationSpy = sinon.spy();

    sendActiveMemberEmail(sailors, sendInvitationSpy);
    expect(sendInvitationSpy.calledTwice).toEqual(true);
  });

  it('should get normalize emails', () => {
    const sendInvitationSpy = sinon.spy();

    sendActiveMemberEmail(sailors, sendInvitationSpy);
    expect(sendInvitationSpy.getCall(0).args[0]).toEqual('yh@yhproductions.io');
    expect(sendInvitationSpy.getCall(1).args[0]).toEqual('alex@wiscsail.io');
  });
});
