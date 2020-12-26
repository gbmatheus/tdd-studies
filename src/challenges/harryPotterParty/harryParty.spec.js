// require('jest').config();
const validateInvite = require('./harryParty');

describe('Get convidado para a festa do Harry', () => {
  test('Get Hermione foi convidada', () => {
    const isInvected = validateInvite('hermione');
    expect(isInvected).toBeTruthy();
  });

  test('Get Malfoy não foi convidado', () => {
    const isInvected = validateInvite('malfoy');
    expect(isInvected).toBeFalsy();
  });

});