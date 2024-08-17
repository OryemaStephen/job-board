import React from 'react';
import Brands from './Brands';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const HomeSummary = () => {
  return (
    <div className="w-full h-full">
      <div className="flex flex-col items-center justify-between w-full h-full gap-10 px-2 pb-16 md:pb-0">
        <h1 className="text-3xl font-bold text-center sm:text-4xl lg:text-5xl">
          Find & Apply for your dream job from anywhere.
        </h1>
        <p className="text-lg text-center md:text-xl">
          Unlock your potential with quality job & earn from world leading
          brands.
        </p>
        <Link
          to="/searchjobs"
          className="px-3 py-1 text-xl text-black bg-white border rounded-lg cursor-pointer hover:border-slate-500 hover:text-white hover:bg-slate-500"
        >
          Search for jobs
        </Link>
        <Brands />
      </div>
      <div className="bottom-0 w-full md:fixed">
        <Footer />
      </div>
    </div>
  );
};

export default HomeSummary;
