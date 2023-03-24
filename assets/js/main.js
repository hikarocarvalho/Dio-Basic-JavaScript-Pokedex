const offset = 0;
const limit = 10;
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
const pokemonList = document.getElementById("pokemonList");

function convertPokemonToLi(pokemon) {
  return `
    <li class="pokemon">
      <span class="number">001</span>
      <span class="name">${pokemon.name}</span>
      <div class="detail">
        <ol class="types">
          <li class="type">grass</li>
          <li class="type">poison</li>
        </ol>
        <img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
          alt="${pokemon.name}"
        />
      </div>
    </li>
  `;
}

pokeApi
  .getPokemons()
  .then((pokemons = []) => {
    console.log(pokemons);
    pokemonList.innerHTML = pokemons.map(convertPokemonToLi).join("");
  })
  .catch((error) => console.log(error))
  .finally(() => console.log("Requisição Concluida"));
