function sendActiveMemberEmail(sailors, sendEmail) {
  // START:active
  const active = sailors.filter(sailor => sailor.active);

  // [
  //   {
  //     name: 'yi hong',
  //     active: true,
  //     email: 'yh@yhproductions.io',
  //   },
  //   {
  //     name: 'alex',
  //     active: true,
  //     email: '',
  //   },
  // ];
  // END:active

  // START:email
  const emails = active.map(member => member.email || `${member.name}@wiscsail.io`);

  // [ 'yh@yhproductions.io', 'alex@wiscsail.io' ]
  // END:email

  // START:send
  emails.forEach(sailor => sendEmail(sailor));
  // END:send
}

export { sendActiveMemberEmail };
