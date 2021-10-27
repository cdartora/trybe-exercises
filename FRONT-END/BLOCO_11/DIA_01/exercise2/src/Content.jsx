import React, { Component } from 'react';

const makeDiv = ({ conteudo, bloco, status }) => {

  const element = (
    <div>
      <p>Conteúdo: {conteudo}</p>
      <p>Bloco: {bloco}</p>
      <p>Status: {status}</p>
    </div>
  );

  return element;
}

const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido'
  },
  {
    conteudo: 'Composicao de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composicao de Estados',
    bloco: 12,
    status: 'Aprenderei'
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei'
  },
];

class Content extends Component {
  render() {

    return (
      <>
        {conteudos.map(conteudo => {
          return makeDiv(conteudo);
        })}
      </>
    )
  }
}

export default Content;
