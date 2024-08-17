import React from 'react'
import google from '../assets/google.png'
import slack from '../assets/slack.png'
import dribble from '../assets/dribble.png'
import airbnb from '../assets/airbnb.png'

const Brands = () => {
  return (
    <div className='grid w-full grid-cols-1 gap-4 py-5 mx-auto text-center sm:grid-cols-2 lg:grid-cols-4'>
        <div className='flex items-center justify-center'>
            <img src={google} className='w-auto h-10' alt='Google'/> 
        </div>
        <div className='flex items-center justify-center'>
            <img src={slack} className='w-auto h-7' alt='Slack'/> 
        </div>
        <div className='flex items-center justify-center'>
            <img src={dribble} className='w-auto h-7' alt='Dribble'/> 
        </div>
        <div className='flex items-center justify-center'>
            <img src={airbnb} className='w-auto h-10' alt='AirBnB'/> 
        </div>
    </div>

  )
}

export default Brands