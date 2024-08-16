import React from 'react'
import PageTitle from '../components/PageTitle'
import profile from '../assets/profile.png'

const About = () => {
  return (
    <div>
      <div className='w-full h-full'>
        <PageTitle text="About"  image={profile}/>
      </div>
    </div>
  )
}

export default About