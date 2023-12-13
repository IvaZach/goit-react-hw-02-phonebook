import React, { Component } from 'react';

import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  handleChange = evt => {
    const { name, value } = evt.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const contact = {
      name: this.state.name,
      number: this.state.number,
      id: nanoid(6),
    };

    this.setState(prevState => {
      return { contacts: [...prevState.contacts, contact] };
    });

    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  filterContact = () => {
    const { filter, contacts } = this.state;

    if (filter.length) {
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      );
    } else {
      return contacts;
    }
  };

  render() {
    return (
      <>
        <h1 className="display-4">PHONE BOOK</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="mb-3">
            <label htmlFor="validationDefault01" className="form-label">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="validationDefault01"
              value={this.state.name}
              onChange={this.handleChange}
              required
              className="form-control"
            />
            <div className="valid-feedback">Looks good!</div>
          </div>
          <div className="mb-3">
            <label htmlFor="inputTel" className="form-label">
              Number
            </label>
            <input
              type="tel"
              name="number"
              id="inputTel"
              value={this.state.number}
              onChange={this.handleChange}
              required
              className="form-control"
            />
            <div className="valid-feedback">Looks good!</div>
          </div>

          <button type="submit" className="btn btn-primary">
            Add contact
          </button>
        </form>

        <h2 className="display-4">Contacts</h2>
        <label className="display-6">
          Find contacts by name
          <input
            type="text"
            name="filter"
            value={this.state.filter}
            onChange={this.handleChange}
            className="form-control"
          ></input>
          {console.log(this.state.filter)}
        </label>

        <table className="table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Number</th>
            </tr>
          </thead>
          <tbody>
            {this.filterContact().map(({ name, number, id }) => (
              <tr key={name} id={id}>
                <td>{name}</td>
                <td>{number}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  }
}
