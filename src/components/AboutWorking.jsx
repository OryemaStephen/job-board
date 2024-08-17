import React from 'react'
import { BsSend } from 'react-icons/bs'
import {   FaUser } from 'react-icons/fa'
import { FaListCheck } from 'react-icons/fa6'

const AboutWorking = () => {
  return (
    <div className='w-full h-full p-5 text-center text-white'>
        <h1 className='text-3xl capitalize'>How it works</h1>
        <div className='items-center justify-between block gap-10 pt-10 lg:flex'>
            <div className='flex flex-col items-center justify-start gap-3 p-4 mb-5 text-black bg-slate-200'>
                <span className='p-5 text-2xl text-white bg-black rounded-full'><FaUser /></span>
                <h2 className='text-xl font-semibold'>Open Application</h2>
                <p>
                    It&apos;s very easy to open the app and start your journey.
                </p>
            </div>
            <div className='flex flex-col items-center justify-start gap-3 p-4 mb-5 text-black bg-slate-200'>
                <span className='p-5 text-2xl text-white bg-black rounded-full'><FaListCheck /></span>
                <h2 className='text-xl font-semibold'>Search jobs</h2>
                <p>
                    Filter jobs to your need and view details.
                </p>
            </div>
            <div className='flex flex-col items-center justify-start gap-3 p-4 text-black bg-slate-200'>
                <span className='p-5 text-2xl text-white bg-black rounded-full'><BsSend /></span>
                <h2 className='text-xl font-semibold'>Apply and hire</h2>
                <p>
                    Send an application and wait for response.
                </p>
            </div>
        </div>
    </div>
  )
}

export default AboutWorking