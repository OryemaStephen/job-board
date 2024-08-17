import React from 'react';
import profile from '../assets/profile.png'
import Jobs from '../components/Jobs';

const SearchJob = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e)=>{
    setSearchTerm(e.target.value)
  }
  return (
    <div className="w-full space-y-4">
      <div className='w-full h-full'>
        <PageTitle text="Search Jobs" showSearch={true} image={profile} onSearchChange = {handleSearchChange} />
      </div>
      <div>
        <Jobs searchTerm = {searchTerm} />
      </div>
      <Footer />
  </div>
  )
};

export default SearchJob;
