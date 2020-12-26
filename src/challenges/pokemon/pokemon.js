// via fetch https://pokeapi.co/api/v2/pokemon + nome
const pokemons = [
  {
    n: 132,
    name: 'ditto',
    height: 0.3,
    weight: 4.0,
    gender: 'unknown',
    category: 'transform',
  },
  {
    n: 149,
    name: 'dragonite',
    height: 2.2,
    weight: 210.0,
    gender: ['male', 'female'],
    category: 'dragon',
  },
  {
    n: 25,
    name: 'pikachu',
    height: 0.4,
    weight: 6.0,
    gender: ['male', 'female'],
    category: 'static',
  },
];


module.exports = {
  async getPokemon (name) {
    const pokemon = { name };

    return pokemon;
  },
  async getPokemonMaisPesado (firstPokemonName, seccondPokemonName) {
    
    const firstPokemon = pokemons.find(poke => poke.name === firstPokemonName);
    const seccondPokemon = pokemons.find(poke => poke.name === seccondPokemonName);

    if(firstPokemon.weight > seccondPokemon.weight) {
      return firstPokemon.name;
    
    }else if (firstPokemon.weight < seccondPokemon.weight){
      return seccondPokemon.name;
    }

    return `mesmo peso`;
  }
};
