import React, { Component } from 'react';

class City extends Component {
  render() { 
    const { clearState, handleChange, value } = this.props;

    return (
      <>
        <p>Cidade:</p>
        <input
          name="city"
          type="text"
          value={ value }
          onChange={ handleChange }
          onBlur={ clearState }
        />

        <span> { !value.length || value.length > 28 ? '[1-28] characteres' : 'ok' } </span>
      </>
    );
  }
}
 
export default City;