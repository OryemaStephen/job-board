import React from 'react';
import { Link } from 'react-router-dom';

const AboutWelcome = () => {
  return (
    <div className="text-center text-white">
      <h2 className="py-4 text-2xl uppercase ">About us</h2>
      <span>
        <Link to="/" className="cursor-pointer hover:text-slate-600">
          Home
        </Link>
        /about
      </span>
    </div>
  );
};

export default AboutWelcome;
