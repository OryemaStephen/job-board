import React, { useState } from 'react';
import { FaBars, FaHome, FaSearch, FaTimes, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-20 h-screen md:w-64">
      <button
        className="fixed top-0 left-0 z-50 p-2 text-white rounded-r-sm bg-slate-600 md:hidden"
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
          <Link to="/" className="flex items-center gap-4 px-4 py-2 rounded-md hover:bg-gray-700">
          <span>
            <FaHome />
          </span>
          <span>
              Dashboard
            </span>
          </Link>
          <Link
            to="/searchjobs"
            className="flex items-center gap-4 px-4 py-2 rounded-md hover:bg-gray-700"
          >
            <span>
              <FaSearch />
            </span>
            <span>
              Search Jobs
            </span>
          </Link>
          <Link
            to="/profile"
            className="flex items-center gap-4 px-4 py-2 rounded-md hover:bg-gray-700"
          >
            <span>
              <FaUser />
            </span>
            <span>
              Profile
            </span>
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
