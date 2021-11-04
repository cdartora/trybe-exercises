import React, { Component } from 'react';

class InputName extends Component {
  render() {
    const { onChange, onError, value } = this.props;

    if (value.length > 10) onError();

    return (
      <>
        <p>Nome do novo quadro para o Domingão do Huck</p>
        <input
          name="name"
          type="text"
          value={ value }
          onChange={ onChange }
        />
      </>
    );
  }
}
 
export default InputName;