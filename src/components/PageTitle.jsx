import React from 'react';
import SearchField from './SearchField';
import PropTypes from 'prop-types';
const PageTitle = ({ text, image, showSearch = true}) => {
  return (
    <div className="flex bg-white items-center justify-between w-full h-fit md:h-20 px-4">
      <div className='block md:flex py-5 md:items-center md:justify-between w-full lg:w-1/2'>
        <div className='font-bold uppercase py-5'>{text}</div>
        {
        showSearch && <SearchField
          placeholder="Search something here .... "
        />
        }
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
  showSearch: PropTypes.bool, 
};

PageTitle.defaultProps = {
  showSearch: false, 
};

export default PageTitle;
