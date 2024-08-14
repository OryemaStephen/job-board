import React from 'react';
import Job from './Job';
import { faker } from '@faker-js/faker';

const generateRandomJob = () => {
  return {
    company: faker.company.name(),
    title: faker.name.jobTitle(),
    logo: faker.image.business(100, 100, true), // Generate a random business image (100x100 size)
    salary: faker.finance.amount(50000, 200000, 0, '$'), // Generate random salary between 50k and 200k
    description: faker.lorem.sentences(3),
    type: faker.helpers.arrayElement(['Full-time', 'Part-time', 'Contract']),
    location: faker.address.city(),
  };
};

const Jobs = () => {
  const jobData = Array.from({ length: 9 }, () => generateRandomJob()); // Create an array of 5 random jobs

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
      {jobData.map((job, index) => (
        <Job
          key={index}
          company={job.company}
          title={job.title}
          logo={job.logo}
          salary={job.salary}
          description={job.description}
          type={job.type}
          location={job.location}
        />
      ))}
    </div>
  );
};

export default Jobs;
