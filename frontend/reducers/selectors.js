import { values } from 'lodash';

export const selectAllPokemon = ({ pokemon }) => {
  return values(pokemon.entities);
};

export const selectPokemonItem = ( state, itemId) => {
  const foundItem = state.items.find( item => item.id === itemId);

  return foundItem || {};
};

window.selectPokemonItem = selectPokemonItem;
