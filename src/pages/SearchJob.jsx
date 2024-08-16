import React from 'react';
import PageTitle from '../components/PageTitle';
import profile from '../assets/profile.png'
import Jobs from '../components/Jobs';

const SearchJob = () => {
  return (
    <div className="w-full space-y-4">
      <div className='w-full h-full'>
        <PageTitle text="Search Jobs" image={profile} />
      </div>
      <div>
        <Jobs />
      </div>
  </div>
  )
};

export default SearchJob;
