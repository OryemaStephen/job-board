import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='md:w-64 w-20 h-screen'>
      <button 
        className="fixed z-50 p-2 text-white bg-slate-600 rounded-lg top-4 left-4 md:hidden" 
        onClick={toggleSidebar}
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      <div 
        className={`fixed top-0 left-0 h-full bg-gray-800 text-white transition-transform transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 md:relative md:block`}
      >
        <nav className="flex flex-col p-4">
          <Link to="/" className="px-4 py-2 rounded-md hover:bg-gray-700">Dashboard</Link>
          <Link to="/searchjobs" className="px-4 py-2 rounded-md hover:bg-gray-700">Search Jobs</Link>
          <Link to="/profile" className="px-4 py-2 rounded-md hover:bg-gray-700">Profile</Link>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
