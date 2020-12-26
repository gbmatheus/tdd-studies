
const minhaFuncao = (content) => (content);

describe('Meu primeiro teste', () => {
  it('Teste  a minha primeira funcionalidade', () => {
    const meuResultado = minhaFuncao('hello world');
    expect(meuResultado).toBe('hello world');
  })
})
