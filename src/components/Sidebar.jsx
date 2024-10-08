import React, { useState } from 'react';
import { FaBars, FaHome, FaSearch, FaUser } from 'react-icons/fa';
import { MdOutlineArrowBackIosNew } from 'react-icons/md';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // To get the current path
  const [activeLink, setActiveLink] = useState(location.pathname);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (path) => {
    setActiveLink(path);
    setIsOpen(false); // Optionally close the sidebar on link click
  };

  return (
    <div className="z-10 h-screen md:w-64">
      <div className="relative w-full">
        <button
          className={`absolute z-50 text-xl rounded-full bg-transparent ${isOpen ? 'text-white top-0 left-[170px]' : 'top-3 left-0 text-slate-700'} md:hidden`}
          onClick={toggleSidebar}
        >
          {isOpen ? <MdOutlineArrowBackIosNew /> : <FaBars />}
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
            className={`flex items-center gap-4 px-4 py-2 rounded-md hover:bg-gray-700 ${
              activeLink === '/' ? 'bg-gray-700' : ''
            }`}
            onClick={() => handleLinkClick('/')}
          >
            <span>
              <FaHome />
            </span>
            <span>Dashboard</span>
          </Link>
          <Link
            to="/searchjobs"
            className={`flex items-center gap-4 px-4 py-2 rounded-md hover:bg-gray-700 ${
              activeLink === '/searchjobs' ? 'bg-gray-700' : ''
            }`}
            onClick={() => handleLinkClick('/searchjobs')}
          >
            <span>
              <FaSearch />
            </span>
            <span>Search Jobs</span>
          </Link>
          <Link
            to="/about"
            className={`flex items-center gap-4 px-4 py-2 rounded-md hover:bg-gray-700 ${
              activeLink === '/about' ? 'bg-gray-700' : ''
            }`}
            onClick={() => handleLinkClick('/about')}
          >
            <span>
              <FaUser />
            </span>
            <span>About</span>
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
