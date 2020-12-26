const guests = ['harry', 'rony', 'hermione', 'gina', 'luna', 'neville'];

function validateInvite (guestName) {

  const guest = guests.find(g => g === guestName);

  if(!guest) {
    return false;
  }
  return true;
}

module.exports = validateInvite;