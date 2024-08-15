import React, { useEffect, useState } from 'react';
import { IoMdArrowBack } from 'react-icons/io';
import { useParams, useNavigate } from 'react-router-dom';
import JobApplicationForm from './JobApplicationForm';

const JobDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [job, setJob] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const jobs = JSON.parse(localStorage.getItem('jobs'));
    const jobDetails = jobs.find((job) => job.id === parseInt(id));
    setJob(jobDetails);
  }, [id]);

  const handleApplyClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  if (!job) {
    return <div>Loading...</div>;
  }

  return (
    <div className='p-1 md:p-3'>
      <button
        onClick={() => navigate(-1)}
        className='mb-4 text-3xl text-black outline-none'
      >
        <IoMdArrowBack />
      </button>
      <div className='mb-4'>
        <img src={job.logo} alt={job.title} className='w-20 h-20 mb-4 rounded-full' />
        <h2 className='text-xl font-semibold'>{job.title}</h2>
        <p className='text-sm text-gray-700'>{job.company}</p>
      </div>
      <div className='mb-4'>
        <span className='text-base font-bold'>Salary: </span>
        <span className='text-base'>{job.salary} per year</span>
      </div>
      <div className='mb-4'>
        <p className='text-sm text-justify'>{job.description}</p>
      </div>
      <div className='mb-4'>
        <span className='text-base font-bold'>Type: </span>
        <span className='text-base'>{job.type}</span>
      </div>
      <div>
        <span className='text-base font-bold'>Location: </span>
        <span className='text-base'>{job.location}</span>
      </div>
      <button
        onClick={handleApplyClick}
        className='px-3 py-1 mt-3 text-white bg-blue-500 rounded-lg hover:bg-blue-900'
      >
        Apply
      </button>

      <JobApplicationForm isOpen={isModalOpen} onClose={handleCloseModal}>
        <h2 className="mb-4 text-lg font-bold">Apply for {job.title}</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              className="w-full p-2 mt-1 border border-gray-300 rounded-md"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              className="w-full p-2 mt-1 border border-gray-300 rounded-md"
              placeholder="Your email"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Phone</label>
            <input
              type="tel"
              className="w-full p-2 mt-1 border border-gray-300 rounded-md"
              placeholder="Your phone"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Phone</label>
            <input
              type="file"
              className="w-full p-2 mt-1 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Cover Letter</label>
            <textarea
              className="w-full p-2 mt-1 border border-gray-300 rounded-md"
              placeholder="Write your cover letter"
              rows="4"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
          >
            Submit Application
          </button>
        </form>
      </JobApplicationForm>
    </div>
  );
};

export default JobDetails;
