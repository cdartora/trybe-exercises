import React, { Component } from 'react';

class Pokemon extends Component {
  render() { 
    
    const { name, type, averageWeight, image } = this.props.poke;

    return (

      <div>
        <p>Nome: { name }</p>
        <p>Tipo: { type }</p>
        <p>Peso: { averageWeight.value }kg</p>
        <img src= { image } alt= { name } />
      </div>

    );

  }
}
 
export default Pokemon;