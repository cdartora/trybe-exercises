import React, { Component } from 'react';

class SelectType extends Component {
  render() {
    const { onChange, value } = this.props;

    return (
      <>
        <p>Categoria do quadro</p>
          <select
            name="type"
            id="type"
            value={ value }
            onChange={ onChange }
          >
            <option value="reconstrucao">Reconstrução</option>
            <option value="apresentacao">Apresentação</option>
            <option value="competicao">Competição</option>
          </select>
      </>
    );
  }
}
 
export default SelectType;