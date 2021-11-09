import React, { Component } from 'react';
import InputName from './InputName.jsx';
import SelectType from './SelectType.jsx';

class Form extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.verifyErrors = this.verifyErrors.bind(this);


    this.state = {
      desc: '',
      name: '',
      type: '',
      live: '',
      thereIsErrors: true,
    }
  }



  verifyErrors() {
    const { desc, name, } = this.state;

    const errorCases = [
      !name.length,
      name.length > 10,
      !desc.length,
    ];

    const errorCheck = errorCases.every((error) => error !== false);

    this.setState({
      thereIsErrors: errorCheck,
    })
  }

  handleChange({ target }) {
    this.verifyErrors();

    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.verifyErrors(target);

    this.setState({ [name]: value });
  }

  render() { 
    return (
      <form>
        <fieldset>
          <InputName
            value={ this.state.name }
            onChange={ this.handleChange }
            onError={ this.verifyErrors }
          />

          <SelectType
            value={ this.state.type }
            onChange={ this.handleChange }
            onError={ this.verifyErrors }
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