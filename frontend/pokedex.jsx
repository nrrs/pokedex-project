import React from 'react';
import ReactDOM from 'react-dom';

import Root from './components/root';

// test imports
import { selectAllPokemon } from './reducers/selectors';
import configureStore from './store/store';
import { fetchAllPokemon } from './util/api_util';
import {
  requestAllPokemon,
  receiveAllPokemon,
  RECEIVE_ALL_POKEMON } from './actions/pokemon_actions';

document.addEventListener('DOMContentLoaded', () =>{
  const store = configureStore();
  const rootEl = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, rootEl);
});

// window.fetchAllPokemon = fetchAllPokemon;
// window.receiveAllPokemon = receiveAllPokemon;
// window.requestAllPokemon = requestAllPokemon;
// const store = configureStore();
// window.getState = store.getState;
// window.dispatch = store.dispatch;
// window.selectAllPokemon = selectAllPokemon;
