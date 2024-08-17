import React from 'react';
import Job from './Job';
import { faker } from '@faker-js/faker';
import PropTypes from 'prop-types';

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

const Jobs = ({ searchTerm }) => {
  const jobData = Array.from({ length: 9 }, (_, index) =>
    generateRandomJob(index),
  );

  // Store the jobs in local storage
  localStorage.setItem('jobs', JSON.stringify(jobData));

  // Filter jobs based on search term
  const filteredJobs = jobData.filter((job) =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="grid grid-cols-1 gap-4 px-4 sm:grid-cols-2 lg:grid-cols-3">
      {filteredJobs.map((job) => (
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

Jobs.propTypes = {
  searchTerm: PropTypes.string.isRequired,
};

export default Jobs;
