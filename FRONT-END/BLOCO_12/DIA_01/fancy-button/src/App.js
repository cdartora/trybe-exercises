import React from 'react';

class App extends React.Component {
  constructor() {
    super()

    this.btnOneHandler = this.btnOneHandler.bind(this);
    this.btnTwoHandler = this.btnTwoHandler.bind(this);
    this.btnThreeHandler = this.btnThreeHandler.bind(this)

    this.state = {
      one: 0,
      two: 0,
      three: 0,
    }
  }

  btnOneHandler() {
    this.setState((previousState, props) => ({
      one: previousState.one + 1,
    }))

    console.log(this.checkColor(this.state.one));
  }

  btnTwoHandler() {
    this.setState((previousState, props) => ({
      two: previousState.two + 1,
    }))

    console.log(this.checkColor(this.state.two));
  }

  btnThreeHandler() {
    this.setState((previousState, props) => ({
      three: previousState.three + 1,
    }))

    console.log(this.checkColor(this.state.three));
  }

  checkColor(num) {
    return num % 2 === 0 ? 'green' : 'white';
  }

  render() {
    const { one, two, three } = this.state;
    return (
      <div>
        <h1>Botões</h1>

        <button 
          onClick={ this.btnOneHandler }
          style={{ backgroundColor: this.checkColor(one) }}>
            { this.state.one }
        </button>

        <button
          onClick={ this.btnTwoHandler }
          style={{ backgroundColor: this.checkColor(two) }}>
            { this.state.two }
        </button>

        <button
          onClick={ this.btnThreeHandler }
          style={{ backgroundColor: this.checkColor(three) }}>
            { this.state.three }
        </button>
      </div>
    );
  }
}

export default App;