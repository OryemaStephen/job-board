import React from 'react'
import HomeSummaryItem from './HomeSummaryItem'
import { FaCalendar, FaSuitcase, FaUser } from 'react-icons/fa'
import { CiMail } from 'react-icons/ci'

const HomeSummary = () => {
  return (
    <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-between gap-5'>
        <HomeSummaryItem
            title="Interview Schedule"
            number={86}
            icon={FaCalendar}
            bgColor="bg-blue-500"
        />
        <HomeSummaryItem
            title="Application Sent"
            number={75}
            icon={FaSuitcase}
            bgColor="bg-blue-400"
        />
        <HomeSummaryItem
            title="Profile Viewed"
            number={4230}
            icon={FaUser}
            bgColor="bg-green-400"
        />
        <HomeSummaryItem
            title="Unread Messages"
            number={100}
            icon={CiMail}
            bgColor="bg-lime-500"
        />
    </div>
  )
}

export default HomeSummary