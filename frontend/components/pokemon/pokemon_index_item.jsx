import React from 'react';
import { Link } from 'react-router-dom';

const style = {
  'width': '20px'
};

const PokemonIndexItem = ({ pokemon }) => {
  return (
    <li>
      <Link to={`/pokemon/${pokemon.id}`}>
        <img src={pokemon.image_url} style={style} /> {pokemon.name}
      </Link>
    </li>
  );
};

export default PokemonIndexItem;
