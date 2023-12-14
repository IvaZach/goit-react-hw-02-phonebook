import React from 'react';
import PropTypes from 'prop-types';
import ContactListItem from 'components/ContactListItem/ContactListItem';

const ContactList = ({ filterContact }) => (
  <>
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Number</th>
        </tr>
      </thead>
      <tbody>
        {filterContact().map(({ name, number, id }) => (
          <ContactListItem name={name} number={number} id={id} key={name} />
        ))}
      </tbody>
    </table>
  </>
);

ContactList.propTypes = {
  filterContact: PropTypes.func.isRequired,
};

export default ContactList;
