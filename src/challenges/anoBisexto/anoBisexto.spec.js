const {verifyLeapYear} = require('./anoBisexto');

describe('Determinar se um ano é bisexto', () => {
  test('Deve ser bisexto se for divisível por 4', () => {
    const isBisexto = verifyLeapYear(2008);
    expect(isBisexto).toBeTruthy();
  });

  test('Não deve ser bisexto se for divisível por 100', () => {
    const isBisexto = verifyLeapYear(1900);
    expect(isBisexto).toBeFalsy();
  })

  test('Deve ser bisexto se for divisível por 100 e 400', () => {
    const isBisexto = verifyLeapYear(1600);
    expect(isBisexto).toBeTruthy();
  })

  test('Não deve ser bisexto se for ano 500',  () => {
    const isBisexto = verifyLeapYear(500);
    expect(isBisexto).toBeFalsy();
  })
})