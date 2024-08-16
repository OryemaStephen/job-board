import React from 'react'
import Brands from './Brands';

const HomeSummary = () => {
    const today = new Date();
    const year = today.getFullYear();
  return (
    <div className='w-full h-full flex flex-col justify-center items-center gap-5'>
        <h1 className='text-3xl sm:text-4xl lg:text-7xl text-center font-bold'>
            Find & Hire Experts for any Job.
        </h1>
        <p className='text-xl md:text-2xl text-center'>
            Unlock your potential with quality job & earn from world leading brands.
        </p>
        <Brands />
        <footer className='sticky top-2 py-5'>
            <span>&copy; </span>
            <span>{year} </span>
        </footer>
    </div>
  )
}

export default HomeSummary