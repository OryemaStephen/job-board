import React from 'react';

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <div className="bottom-0 flex items-center justify-center w-full py-5 text-black bg-white">
      <span>&copy; </span>
      <span>{year} JobBoard256 </span>
      <span className="pl-1">
        {' '}
        Developed by <a href="https://oryemasteph.netlify.app">Stephen</a>{' '}
      </span>
    </div>
  );
};

export default Footer;
