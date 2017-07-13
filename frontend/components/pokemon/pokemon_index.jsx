import React from 'react';


class PokemonIndex extends React.Component {

  componentDidMount() {
    this.props.requestAllPokemon();
  }

  render() {
    const { pokemon } = this.props;

    return (
      <div>
        <h3>Sup</h3>
        <ul>
          { pokemon.map( (el, idx) => (
            <li key={idx}>
              {el.name}
              <img src={el.image_url} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default PokemonIndex;
