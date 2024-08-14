import React from 'react';
import PropTypes from 'prop-types';

const Job = ({ company, title, logo, salary, description, type, location }) => {
  return (
    <div className='w-full p-4 bg-white shadow-lg rounded-lg'>
      <div className='flex items-center justify-between mb-2'>
        <div>
          <div className='text-sm text-gray-700'>{company}</div>
          <div className='text-base font-bold'>{title}</div>
        </div>
        <img src={logo} alt={title} className='w-10 h-10 rounded-full' />
      </div>
      <div className='mb-2'>
        <span className='text-xs text-violet-600'>{salary}</span>
      </div>
      <p className='mb-4 text-xs text-justify'>{description}</p>
      <div className='flex justify-between gap-4'>
        <span className='bg-violet-400 px-2 py-1 rounded-3xl '>{type}</span>
        <span className='text-sm font-semibold px-2 py-1 rounded'>{location}</span>
      </div>
    </div>
  );
};

Job.propTypes = {
  company: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  logo: PropTypes.string,
  salary: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  description: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};

export default Job;
