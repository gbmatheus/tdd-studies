const { getPokemon } = require('./pokemon');
const { getPokemonMaisPesado } = require('./pokemon');

describe('PokeAPI Suite', () => {

  describe('Get Pokemons', () => {
    it('Get ditto', async () => {
      const objectPokemon = await getPokemon('ditto');
      expect(objectPokemon.name).toBe('ditto');
    });
  });

  describe('Get Pokemon Mais Pesado', () => {
    it('Get ditto mais leve que dragonite', async () => {
      const pokemonMaisPesado = await getPokemonMaisPesado('ditto', 'dragonite');
      expect(pokemonMaisPesado).toBe('dragonite');
    });
    
    it('Get ditto mais leve que dragonite', async () => {
      const pokemonMaisPesado = await getPokemonMaisPesado('ditto', 'dragonite');
      expect(pokemonMaisPesado).not.toBe('ditto');
    });

    it('Get ditto mesmo peso que o ditto', async () => {
      const pokemonMaisPesado = await getPokemonMaisPesado('ditto', 'ditto');
      expect(pokemonMaisPesado).toBe('mesmo peso');
    });
  });
})