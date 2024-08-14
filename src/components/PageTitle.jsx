import React from 'react';
import SearchField from './SearchField';
import PropTypes from 'prop-types';

const PageTitle = ({ text, image }) => {
  return (
    <div className="flex items-center z-0 justify-between w-full h-10">
      <div className='flex justify-between w-full lg:w-1/2  items-center'>
        <div className='hidden sm:flex font-bold'>{text}</div>
        <SearchField
          placeholder="Search something here .... "
          // value={inputValue}
          // onChange={handleInputChange}
          // validate={validateInput}
        />
      </div>
      <div className='hidden w-1/2 lg:flex justify-end gap-5 items-center'>
        <img src={image} className='w-10 h-10 object-cover object-top rounded-full' />
        <div className='flex flex-col items-start text-xs'>
          <div className='font-bold text-sm'>Stephen </div>
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
