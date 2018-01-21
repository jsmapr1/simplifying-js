function sendInvitation(sailingClub, sendEmail) {
  // START:email
  for (let i = 0; i < sailingClub.length; i++) {
    sendEmail(sailingClub[i]);
  }
  // END:email
}

export { sendInvitation };
