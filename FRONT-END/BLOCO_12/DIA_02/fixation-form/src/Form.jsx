import React, { Component } from 'react';
import InputName from './InputName.jsx';
import SelectType from './SelectType.jsx';

class Form extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleErrors = this.handleErrors.bind(this);


    this.state = {
      desc: '',
      name: '',
      type: '',
      live: '',
      errors: false,
    }
  }

  handleErrors() {
    const { errors } = this.state;

    if(errors) this.setState({ errors: true });
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({ [name]: value });
  }

  render() { 
    return (
      <form>
        <fieldset>
          <InputName
            value={ this.state.name }
            onChange={ this.handleChange }
            onError={ this.handleErrors }
          />

          <SelectType
            value={ this.state.type }
            onChange={ this.handleChange }
            onError={ this.handleErrors }
          />

          <p>Descrição do quadro</p>
          <textarea 
            name="desc"
            value={ this.state.idea }
            onChange={ this.handleChange }
          >
          </textarea>

          <p>Ao vivo?</p>
          <input
            name="live"
            type="checkbox"
            value={ this.state.live }
            onChange={ this.handleChange }
          />

          <p>Fotos referentes ao quadro:</p>
          <input type="file" />
        </fieldset>
      </form>
    );
  }
}
 
export default Form;