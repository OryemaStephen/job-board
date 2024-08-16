import React from 'react';
import SearchField from './SearchField';
import PropTypes from 'prop-types';

const PageTitle = ({ text, image, onSearchChange, showSearch }) => {
  return (
    <div className="z-0 flex items-center justify-between w-full h-10">
      <div className='flex items-center justify-between w-full lg:w-1/2'>
        <div className='hidden font-bold uppercase sm:flex'>{text}</div>
        {showSearch && (
          <SearchField
            placeholder="Search something here .... "
            onChange={onSearchChange}
          />
        )}
      </div>
      <div className='items-center justify-end hidden w-1/2 gap-5 lg:flex'>
        <img src={image} className='object-cover object-top w-10 h-10 rounded-full' />
        <div className='flex flex-col items-start text-xs'>
          <div className='text-sm font-bold'>Stephen </div>
          <div>Admin </div>
        </div>
      </div>
    </div>
  );
};

PageTitle.propTypes = {
  text: PropTypes.string,
  image: PropTypes.string,
  onSearchChange: PropTypes.func,
  showSearch: PropTypes.bool, 
};

PageTitle.defaultProps = {
  showSearch: false, 
};

export default PageTitle;
