import React, { Component } from 'react';

class Email extends Component {
  render() { 
    const { handleChange, value } = this.props;

    return (
      <>
        <p>Email:</p>
        <input
          name="email"
          type="text"
          value={ value }
          onChange={ handleChange }
        />

        <span> { !value.length || value.length > 50 ? '[1-50] characteres' : 'ok' } </span>
      </>
    );
  }
}
 
export default Email;