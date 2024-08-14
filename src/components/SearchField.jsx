import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FaSearch } from 'react-icons/fa';

const SearchField = ({
  placeholder,
  type = 'text',
  value,
  onChange,
  validate,
}) => {
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const inputValue = e.target.value;

    // Basic validation logic
    if (validate) {
      const validationError = validate(inputValue);
      setError(validationError);
    }

    onChange(e);
  };

  return (
    <div className="relative w-64 lg:w-80">
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        className="h-8 pl-4 pr-8 rounded-lg w-full bg-slate-300 border-none outline-none"
      />
      <FaSearch className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500" />
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

// Prop types validation
SearchField.propTypes = {
  placeholder: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  validate: PropTypes.func,
};

SearchField.defaultProps = {
  placeholder: '',
  type: 'text',
  validate: null,
};

export default SearchField;
