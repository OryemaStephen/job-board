import React from 'react';
import PropTypes from 'prop-types';

const JobApplicationForm = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black bg-opacity-50">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
        <button
          onClick={onClose}
          className="absolute p-2 text-black bg-transparent rounded-full hover:bg-gray-200 top-2 right-2"
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

JobApplicationForm.propTypes = {
  isOpen: PropTypes.bool.isRequired,       
  onClose: PropTypes.func.isRequired,     
  children: PropTypes.node.isRequired,    
};

export default JobApplicationForm;
