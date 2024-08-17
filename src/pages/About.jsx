import React from 'react'
import Footer from '../components/Footer'
import PageTitle from '../components/pageTitle';
import profile from '../assets/profile.png';
import AboutWelcome from '../components/AboutWelcome';
import AboutWorking from '../components/AboutWorking';

const About = () => {
  return (
    <div>
      <div className="w-full h-full text-black bg-white">
        <PageTitle text="About" showSearch={false} image={profile} />
      </div>
      <div>
       <AboutWelcome />
       <AboutWorking />
      </div>
      <div className='bottom-0 w-full md:fixed'>
          <Footer /> 
      </div> 
    </div>
  )
}

export default About