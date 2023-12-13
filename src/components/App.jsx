import React, { Component } from 'react';


import { nanoid } from 'nanoid';


export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  handleChange = evt => {
    const { name, value } = evt.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const contact = {
      name: this.state.name,
      id: nanoid(6),
    };
    console.log('contact.name:', contact.name);
    console.log('contact.id:', contact.id);
    console.log('contact:', contact);

    this.setState(prevState => {
      return { contacts: [...prevState.contacts, contact] };
    });

    this.reset();
  };

  reset = () => {
    this.setState({ name: '' });
  };

  render() {
    return (
      <>
        <h1>PHONE BOOK</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='inputName'>Name</label>
          <input
            type="text"
            name="name"
            id='inputName'
            value={this.state.name}
            onChange={this.handleChange}
            required
          />
          <button type="submit">Add contact</button>
        </form>
        <h2>Contacts</h2>
        <ul>
          {console.log(this.state.contacts)}
          {this.state.contacts.map(({ name, id }) => (
            <li key={name} id={id}>
              {name}
            </li>
          ))}
        </ul>
      </>
    );
  }
}
