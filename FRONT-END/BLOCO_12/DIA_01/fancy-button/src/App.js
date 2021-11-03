import React from 'react';

class App extends React.Component {
  constructor() {
    super()

    this.rightHandler = this.rightHandler.bind(this);
    this.whatHandler = this.whatHandler.bind(this);
    this.wrongHandler = this.wrongHandler.bind(this);
  }

  rightHandler() {
    console.log('youre right');
  }

  whatHandler() {
    console.log('what!?');
  }

  wrongHandler() {
    console.log('youre very wrong');
  }

  render() {
    return (
      <div>
        <h1>Qual o melhor pokemon?</h1>
        <button onClick={ this.rightHandler }>Black/White</button>
        <button onClick={ this.whatHandler }>Ruby/Sapphire</button>
        <button onClick={ this.wrongHandler }>X/Y</button>
      </div>
    );
  }
}

export default App;