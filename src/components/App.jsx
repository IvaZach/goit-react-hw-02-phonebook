import React, { Component } from 'react';

import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [],
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
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Number</th>
            </tr>
          </thead>
          <tbody>
          {console.log(this.state.contacts)}
            {this.state.contacts.map(({ name, number, id }) => (
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

