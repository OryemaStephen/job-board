import React from 'react';
import profile from '../assets/profile.png'
import Jobs from '../components/Jobs';
import Footer from '../components/Footer';
import PageTitle from '../components/pageTitle';

const SearchJob = () => {
  return (
    <div className="w-full space-y-4">
      <div className='w-full h-full'>
        <PageTitle text="Search Jobs" image={profile} />
      </div>
      <div className='px-4'>
        <Jobs />
      </div>
      <Footer />
  </div>
  )
};

export default SearchJob;
