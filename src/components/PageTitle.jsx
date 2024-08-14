import React from 'react';
import { FaBarsStaggered } from 'react-icons/fa6';
import SearchField from './SearchField';
import PropTypes from 'prop-types';

const PageTitle = ({ text }) => {
  return (
    <div className="flex items-center justify-around w-full h-10">
      <span>
        <FaBarsStaggered />
      </span>
      <span>{text}</span>
      <SearchField
        placeholder="Search something here .... "
        // value={inputValue}
        // onChange={handleInputChange}
        // validate={validateInput}
      />
    </div>
  );
};

PageTitle.propTypes = {
  text: PropTypes.string,
};

export default PageTitle;
