import React, { Component } from 'react';
import Name from './Name.js';
import Email from './Email.js';
import Cpf from './Cpf.js';
import City from './City.js';
import States from './States.js';


class Form extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.clearState = this.clearState.bind(this);


    this.state = {
      name: '',
      email: '',
      cpf: '',
      city: '',
      states: false,
    }
  }

  clearState({ target }) {
    const { value, name } = target;

    const firstChar = +value[0];

    if (firstChar) {
      this.setState({ [name]: '' })
    }
  }

  handleChange({ target }) {

    const { name, value } = target;

    this.setState({
      [name]: value,
    })
  }

  render() { 
    return (
      <>
        <fieldset>
          <Name
            value={ this.state.name }
            handleChange={ this.handleChange }
          />

          <Email
            value={ this.state.email }
            handleChange={ this.handleChange } 
          />

          <Cpf
            value={ this.state.cpf }
            handleChange={ this.handleChange }
          />

          <City
            value={ this.state.city }
            handleChange={ this.handleChange }
            clearState={ this.clearState }
          />

          <States
            value={ this.state.states }
            handleChange={ this.handleChange }
          />

          <Home
            value={ this.state.home }
            handleChange={ this.handleChange }
          />
        </fieldset>
      </>
    );
  }
}
 
export default Form;