import React, { Component } from 'react';

class Name extends Component {
  render() { 
    const { handleChange, value } = this.props;

    return (
      <>
        <p>Nome:</p>
        <input
          name="name"
          type="text"
          value={ value.toUpperCase() }
          onChange={ handleChange }
        />

        <span> { !value.length || value.length > 40 ? '[1-40] characteres' : 'ok' } </span>
      </>
    );
  }
}
 
export default Name;