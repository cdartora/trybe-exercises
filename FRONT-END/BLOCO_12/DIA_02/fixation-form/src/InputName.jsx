import React, { Component } from 'react';

class InputName extends Component {
  render() {
    const { onChange, value } = this.props;

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