import React, { Component } from 'react';
import Name from './Name';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    }
  }
  render() { 
    return (
      <>
        <fieldset>
          <Name />
        </fieldset>
      </>
    );
  }
}
 
export default Form;