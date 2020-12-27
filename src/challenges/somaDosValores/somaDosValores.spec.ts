import {sumAllNumber, sumAllEvenNumber, sumAllOddNumber} from './somaDosValores';

describe('Descobrindo a soma de vário números', () => {
  test('Deve retorna a soma de todos os números', () => {
    const { total } = sumAllNumber(0, 9);
    expect(total).toBe(45);
  });

  test('Deve retornar a soma de todos os números pares', () => {
    const { even } = sumAllEvenNumber(0, 6);
    expect(even).toBe(12);
  });
  //25

  test('Deve retornar a soma de todos os números impares', () => {
    const { odd } = sumAllOddNumber(0, 9);
    expect(odd).toBe(25);
  });
})