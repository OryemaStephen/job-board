import React from 'react';
import Job from './Job';
import { faker } from '@faker-js/faker';

const generateRandomJob = (index) => {
  return {
    id: index + 1,
    company: faker.company.name(),
    title: faker.name.jobTitle(),
    logo: faker.image.business(100, 100, true),
    salary: faker.finance.amount(50000, 200000, 0, '$'),
    description: faker.lorem.sentences(3),
    type: faker.helpers.arrayElement(['Full-time', 'Part-time', 'Contract']),
    location: faker.address.city(),
  };
};

const Jobs = () => {
  const jobData = Array.from({ length: 9 }, (_, index) => generateRandomJob(index));

  // Store the jobs in local storage
  localStorage.setItem('jobs', JSON.stringify(jobData));

  return (
    <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
      {jobData.map((job) => (
        <Job
          key={job.id}
          id={job.id}
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
