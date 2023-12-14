import React, { Component } from 'react';

import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import Section from './Section/Section';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleChange = evt => {
    const { name, value } = evt.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = contact => {
    this.setState(({ contacts }) => {
      return { contacts: [...contacts, contact] };
    });
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
      <Section>
        <div>
          <h1 className="h1">PHONE BOOK</h1>
          <ContactForm onSubmit={this.handleSubmit} />
        </div>
        <div>
          <h2 className="h1">Contacts</h2>
          <Filter handleChange={this.handleChange} filter={this.state.filter} />
          <ContactList
            filterContact={this.filterContact}
            handleChange={this.handleChange}
          />
        </div>
      </Section>
    );
  }
}
