import React, { Component } from 'react';

class PokemonIndex extends Component {
  componentDidMount(){
    this.props.requestAllPokemon();
  }

  render(){
    console.log(this);
    return (
      <section className="pokedex">
        <ul>
          {this.props.map(poke => <li key={poke.id} pokemon={poke}>{pokemon.name}</li>)}
        </ul>
      </section>
    );
  }
}
export default PokemonIndex;
