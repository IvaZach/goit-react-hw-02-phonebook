import React from 'react';
import PropTypes from 'prop-types';

const Filter = ({ handleChange, filter }) => (
  <label className="h4">
    Find contacts by name
    <input
      type="text"
      name="filter"
      value={filter}
      onChange={handleChange}
      className="form-control"
    ></input>
  </label>
);

Filter.propTypes = {
  handleChange: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

export default Filter;
