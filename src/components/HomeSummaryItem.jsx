import React from 'react';
import PropTypes from 'prop-types';

const HomeSummaryItem = ({ title, bgColor, number, icon: Icon }) => {
  return (
    <div className={`rounded-lg gap-1 w-full flex items-center justify-between text-white p-5 ${bgColor}`}>
      <span className='p-1 rounded-lg border border-white'>
        <Icon className="text-4xl" />
      </span>
      <div className="flex flex-col justify-start items-end">
        <div className='text-sm'>{title}</div>
        <div className='text-2xl'>{number}</div>
      </div>
    </div>
  );
};

// Prop types validation
HomeSummaryItem.propTypes = {
  title: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
  number: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  icon: PropTypes.elementType.isRequired,
};

export default HomeSummaryItem;
