import React, { Component } from 'react';

class Cpf extends Component {
  render() { 
    const { handleChange, value } = this.props;

    return (
      <>
        <p>Cpf:</p>
        <input
          name="cpf"
          type="text"
          value={ value }
          onChange={ handleChange }
        />

        <span> { !value.length || value.length !== 11 ? '[11] números' : 'ok' } </span>
      </>
    );
  }
}
 
export default Cpf;