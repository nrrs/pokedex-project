export const fetchAllPokemon = () => (
  $.ajax({
    method: 'GET',
    url: 'api/pokemon'
  })
);


export const fetchSinglePokemon = pokemonId => {
  return (
    $.ajax({
      method: 'GET',
      url: `api/pokemon/${pokemonId}`
    })
  );
};
