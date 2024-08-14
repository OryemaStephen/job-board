import React, { useState } from 'react';
import { FaBars, FaHome, FaSearch, FaTimes, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-10 z-10 h-screen md:w-64">
      <div className='w-full relative'>
        <button
          className={`absolute z-50 p-1 text-xl text-white rounded-full bg-transparent ${isOpen?'text-white top-0 left-0':'top-3 left-3 text-slate-700'}  md:hidden`}
          onClick={toggleSidebar}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      <div
        className={`fixed top-0 left-0 h-full bg-gray-800 text-white transition-transform transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 md:relative md:block`}
      >
        <div className="flex flex-col p-4">
          <Link to="/" className="flex items-center text-4xl ">
            Job Board
          </Link>
        </div>
        <nav className="flex flex-col p-4">
          <Link
            to="/"
            className="flex items-center gap-4 px-4 py-2 rounded-md hover:bg-gray-700"
          >
            <span>
              <FaHome />
            </span>
            <span>Dashboard</span>
          </Link>
          <Link
            to="/searchjobs"
            className="flex items-center gap-4 px-4 py-2 rounded-md hover:bg-gray-700"
          >
            <span>
              <FaSearch />
            </span>
            <span>Search Jobs</span>
          </Link>
          <Link
            to="/profile"
            className="flex items-center gap-4 px-4 py-2 rounded-md hover:bg-gray-700"
          >
            <span>
              <FaUser />
            </span>
            <span>Profile</span>
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
