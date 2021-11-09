import React, { Component } from 'react';
import Pokemon from './Pokemon';
import data from './data';

class Pokedex extends Component {
  render() { 

    return ( data.map((pokemon, index) => {

      return <Pokemon key={ index } poke={ pokemon }/>
    
    })
    );

  }
}
 
export default Pokedex;