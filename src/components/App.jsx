import React, { Component } from 'react';

// import { InputForm }  from './InputForm/InputForm';
// import { nanoid } from 'nanoid';
import { Contacts } from './InputForm/Contacts/Contacts';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  // handleChange = evt => {
  //   this.setState({ name: evt.target.value });
  //   console.log('name:', evt.target.value);
  //   console.log('evt.target:', evt.target);
  // };

  handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    console.log('form:', e.currentTarget.elements.familyName);
    const nameInput = form.elements.familyName.value;
    console.log('Name:', nameInput);
   
    this.setState({
      contacts: [],
      name: nameInput,
    });
    console.log('6', this.state);
    form.reset();
  };


  render() {
    return (
      <>
        <h1>PHONEBOOK</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="familyName"
            required
            // value={this.state.name}
          />
          <button type="submit">Add contact</button>
        </form>
        <h2>Contacts</h2>
        <ul>
          <Contacts name={this.state.name} />
          {console.log('5', this.state.name)}
        </ul>
      </>
    );
  }
}
