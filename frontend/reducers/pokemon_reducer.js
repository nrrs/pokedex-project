import { RECEIVE_ALL_POKEMON } from '../actions/pokemon_actions';
import { merge } from 'lodash';

export const pokemonReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ALL_POKEMON:
      return merge({}, state, action.pokemons);
    default:
      return state;
  }
};
