import React, { useState } from 'react';
import PropTypes from 'prop-types';

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
    <>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        className="h-8 pl-4 rounded-lg w-80 bg-slate-300 "
      />
      {error && <p className="error-message">{error}</p>}
    </>
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
