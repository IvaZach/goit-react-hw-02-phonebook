import React from 'react';
import PropTypes from 'prop-types';

const ContactListItem = ({ name, number }) => {
  return (
    <>
      <tr key={name}>
        <td>{name}</td>
        <td>{number}</td>
      </tr>
    </>
  );
};

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactListItem;
