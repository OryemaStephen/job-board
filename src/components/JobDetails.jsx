import React, { useEffect, useState } from 'react';
import { IoMdArrowBack } from 'react-icons/io';
import { useParams, useNavigate } from 'react-router-dom';
import JobApplicationForm from './JobApplicationForm';
import emailjs from 'emailjs-com';

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

  const handleFormSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_dbma1ll', // Replace with your EmailJS service ID
        'template_fx2oe9d', // Replace with your EmailJS template ID
        e.target,
        'z8XuPpnJZ9SabQfG3',
      )
      .then(
        (result) => {
          console.log(result.text);
          alert('Application sent successfully!');
          handleCloseModal();
        },
        (error) => {
          console.log(error);
          alert('Failed to send application. Please try again.');
        },
      );
  };

  if (!job) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full h-full p-1 py-10 bg-white md:p-3">
      <button
        onClick={() => navigate(-1)}
        className="mb-4 text-3xl text-black outline-none"
      >
        <IoMdArrowBack />
      </button>
      <div className="mb-4">
        <img
          src={job.logo}
          alt={job.title}
          className="w-20 h-20 mb-4 rounded-full"
        />
        <h2 className="text-xl font-semibold">{job.title}</h2>
        <p className="text-sm text-gray-700">{job.company}</p>
      </div>
      <div className="mb-4">
        <span className="text-base font-bold">Salary: </span>
        <span className="text-base">{job.salary} per year</span>
      </div>
      <div className="mb-4">
        <p className="text-sm text-justify">{job.description}</p>
      </div>
      <div className="mb-4">
        <span className="text-base font-bold">Type: </span>
        <span className="text-base">{job.type}</span>
      </div>
      <div>
        <span className="text-base font-bold">Location: </span>
        <span className="text-base">{job.location}</span>
      </div>
      <button
        onClick={handleApplyClick}
        className="px-3 py-1 mt-3 text-white bg-blue-500 rounded-lg hover:bg-blue-900"
      >
        Apply
      </button>

      <JobApplicationForm isOpen={isModalOpen} onClose={handleCloseModal}>
        <h2 className="mb-4 text-lg font-bold">Apply for {job.title}</h2>
        <form onSubmit={handleFormSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Position
            </label>
            <input
              type="text"
              name="title"
              value={job.title}
              className="w-full p-2 mt-1 border border-gray-300 rounded-md"
              readOnly
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              name="name"
              className="w-full p-2 mt-1 border border-gray-300 rounded-md"
              placeholder="Your name"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="w-full p-2 mt-1 border border-gray-300 rounded-md"
              placeholder="Your email"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Phone
            </label>
            <input
              type="tel"
              name="phone"
              className="w-full p-2 mt-1 border border-gray-300 rounded-md"
              placeholder="Your phone"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Resume
            </label>
            <input
              type="file"
              name="resume"
              className="w-full p-2 mt-1 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Cover Letter
            </label>
            <textarea
              name="cover_letter"
              className="w-full p-2 mt-1 border border-gray-300 rounded-md"
              placeholder="Write your cover letter"
              rows="4"
              required
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
