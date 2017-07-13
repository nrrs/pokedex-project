import * as APIUtil from '../util/api_util';

export const RECEIVE_ALL_POKEMON = 'RECEIVE_ALL_POKEMON';

// ACTION CREATORS
export const receiveAllPokemon = pokemons => ({
  type: RECEIVE_ALL_POKEMON,
  pokemons
});

// THUNKS
export const requestAllPokemon = () => dispatch => {
  return APIUtil.fetchAllPokemon()
    .then(pokemon => dispatch(receiveAllPokemon(pokemon)));
};
