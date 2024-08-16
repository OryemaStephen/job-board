import React from 'react'
import google from '../assets/google.png'
import slack from '../assets/slack.png'
import dribble from '../assets/dribble.png'
import airbnb from '../assets/airbnb.png'

const Brands = () => {
  return (
    <div className='w-full flex flex-wrap justify-between items-center py-5 px-4'>
        <img src={google} className='h-10 w-auto' alt='Google'/> 
        <img src={slack} className='h-10 w-auto' alt='Slack'/> 
        <img src={dribble} className='h-10 w-auto' alt='Dribble'/> 
        <img src={airbnb} className='h-10 w-auto' alt='AirBnB'/> 
    </div>
  )
}

export default Brands