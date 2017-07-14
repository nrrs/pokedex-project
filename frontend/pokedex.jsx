import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import PokemonIndexContainer from
  './components/pokemon/pokemon_index_container';

// test imports
import { selectAllPokemon } from './reducers/selectors';
import configureStore from './store/store';
import { fetchAllPokemon } from './util/api_util';
import {
  requestAllPokemon,
  receiveAllPokemon,
  RECEIVE_ALL_POKEMON } from './actions/pokemon_actions';

const Root = ({ store }) => (
  <Provider store={store}>
    <HashRouter>
      <Route path="/" component={ PokemonIndexContainer } />
    </HashRouter>
  </Provider>
);

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
