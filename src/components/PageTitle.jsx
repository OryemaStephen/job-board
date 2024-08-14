import React from 'react';
import { FaBarsStaggered } from 'react-icons/fa6';
import SearchField from './SearchField';
import PropTypes from 'prop-types';

const PageTitle = ({ text, image }) => {
  return (
    <div className="flex items-center justify-between w-full h-10">
      <div className='flex justify-between w-1/2 items-center'>
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
      <div className='w-1/2 flex justify-end gap-5 items-center'>
        <img src={image} className='w-5 h-5 rounded-full' />
        <div className='flex flex-col items-start text-xs'>
          <div>Stephen </div>
          <div>Admin </div>
        </div>
      </div>

    </div>
  );
};

PageTitle.propTypes = {
  text: PropTypes.string,
  image: PropTypes.string,
};

export default PageTitle;
