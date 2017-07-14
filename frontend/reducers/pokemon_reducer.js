import {
  RECEIVE_ALL_POKEMON,
  RECEIVE_SINGLE_POKEMON } from '../actions/pokemon_actions';
import { merge } from 'lodash';

const defaultState = () => ({
  entities: {},
  currentPoke: null
});

const pokemonReducer = (state = defaultState(), action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ALL_POKEMON:
      return merge({}, state, {
        entities: action.pokemons
      });

    case RECEIVE_SINGLE_POKEMON:
      const poke = action.individualPoke.pokemon;

      return merge({}, state, {
        entities: { [poke.id]: poke },
        currentPoke: poke.id
      });

    default:
      return state;
  }
};

export default pokemonReducer;
