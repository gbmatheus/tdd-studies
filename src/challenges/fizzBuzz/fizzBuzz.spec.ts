import fizzBuzz from './fizzBuzz';

describe('FizzBuzz', () => {
  
  test('Deve imprimir Fizz para números dívisivies por 3', () => {
    const fizz = fizzBuzz(6);
    expect(fizz).toEqual('Fizz');
  });

  test('Deve imprimir Buzz para número divisíveis por 5', () => {
    const buzz = fizzBuzz(10);
    expect(buzz).toEqual('Buzz');
  });

  test('Deve imprimir FizzBuzz para número divisíveis por 3 e 5', () => {
    const fizzbuzz = fizzBuzz(15);
    expect(fizzbuzz).toEqual('FizzBuzz');
  })

  test('Deve imprimir o próprio número se ele não for divível por 3 ou 5', () => {
    const num = fizzBuzz(22);
    expect(num).toEqual('22');
  })

});