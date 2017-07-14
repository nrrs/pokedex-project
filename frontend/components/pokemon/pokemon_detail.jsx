import React from 'react';
import { Route, Link } from 'react-router-dom';
import ItemDetailContainer from '../item/item_detail_container';

class PokemonDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const id = this.props.match.params.pokemonId;
    this.props.requestSinglePokemon(id);
  }

  componentWillReceiveProps(newProps) {
    const oldId = this.props.match.params.pokemonId,
          newId = newProps.match.params.pokemonId;

    if (oldId !== newId) {
      this.props.requestSinglePokemon(newId);
    }
  }

  render() {
    const { pokemon, items } = this.props,
          imgStyle = { "width": "100px" };

    if (!!pokemon && pokemon.moves) {
      return (
        <div>
          <h3>{ pokemon.name }</h3>
          <figure>
            <img src={ pokemon.image_url } style={imgStyle} />
          </figure>
          <ul>
            <li><strong>Attack:</strong> { pokemon.attack }</li>
            <li><strong>Defense:</strong> { pokemon.defense }</li>
            <li><strong>Moves:</strong>
              <ul>
                { pokemon.moves.map( (move, idx) => (
                  <li key={idx}>{move}</li>
                ))}
              </ul>
            </li>
            <li><strong>Items:</strong>
              <ul>
                {
                  items.map( (item, idx) => (
                    <Link
                      key={idx}
                      to={`/pokemon/${pokemon.id}/items/${item.id}`}>
                      <li>{item.name}</li>
                    </Link>
                  ))
                }
              </ul>
            </li>
          </ul>
          <Route
            path="/pokemon/:pokemonId/items/:itemId"
            component={ ItemDetailContainer }
            />
        </div>
      );
    } else {
      return (
        <div>
          <h3>Loading...</h3>
        </div>
      );
    }

  }
}

export default PokemonDetail;
