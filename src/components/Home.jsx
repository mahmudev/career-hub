import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Home = () => {
  const [Category, setCategory] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [showAllJobs, setShowAllJobs] = useState(false);

  useEffect(() => {
    fetch("./categoryData.json")
      .then((response) => response.json())
      .then((data) => setCategory(data))
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    fetch("./jobData.json")
      .then((response) => response.json())
      .then((data) => setJobs(data.slice(0, showAllJobs ? data.length : 4)))
      .catch((error) => console.error(error));
  }, [showAllJobs]);

  return (
    <>
      <div className=" mx-auto sm:max-w-xl md:max-w-full  lg:pt-20 bg-[#F9F9FF] flex flex-col items-center justify-between lg:flex-row">
        <div className="mb-10 lg:max-w-lg lg:pl-60  lg:pr-5 lg:mb-0">
          <div className="max-w-xl mb-6 lg:mt-8">
            <h2 className="max-w-lg mb-6 font-sans font-bold tracking-tight text-gray-900 sm:text-2xl  lg:text-5xl ">
              One Step <br className="hidden md:block" />
              Closer To Your <br className="hidden md:block" />
              <span className="inline-block text-blue-400">Dream Job</span>
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
              Explore thousands of job opportunities with all the information
              you need. Its your future. Come find it. Manage all your job
              application from start to finish.
            </p>
          </div>
          <div className="flex flex-col items-center md:flex-row">
            <Link to="/appliedjobs" className="btn md:w-auto md:mr-4">
              <div className="inline-flex items-center justify-center w-full h-full">
                <p className="mr-3">Get Started</p>
              </div>
            </Link>
          </div>
        </div>
        {/* Lottie Animation */}
        <div className="lg:w-1/2 ">
          <img src="https://i.ibb.co/hgjcbZ8/P3-OLGJ1-copy-1.png" alt="" />
        </div>
      </div>
      <div className=" py-12">
        <h1 className="text-5xl text-center font-sans font-bold tracking-tight text-gray-800">
          Job Category List
        </h1>
        <p className="py-8 text-base text-center text-gray-700">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
        <div className="flex flex-wrap lg:px-60 mx-auto sm:max-w-xl md:max-w-full md:px-24">
          {Category.map((data) => (
            <div key={data.id} className="w-full md:w-1/4   px-4 mb-4">
              <div className="bg-[#FAF8FF] rounded-lg h-64 flex items-center justify-center">
                <div className="text-center flex flex-col">
                  <div className="w-40 h-40 flex items-center justify-center">
                    <img src={data.logo} />
                  </div>
                  <h1 className="text-lg text-gray-800 font-bold mb-2">
                    {data.name}
                  </h1>
                  <p className="text-gray-400">
                    {data.jobsAvailable} Jobs Available
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h1 className="text-5xl text-center font-sans font-bold tracking-tight text-gray-800">
          Featured Jobs
        </h1>
        <p className="py-8 text-base text-center text-gray-700">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
        <div className="grid grid-cols-1 gap-8 my-8 md:mt-16 md:grid-cols-2 lg:px-60 mx-auto sm:max-w-xl md:max-w-full md:px-24">
          {jobs.map((job) => (
            <div key={job.id} className=" border p-6 rounded-lg border-gray-300">
              <img className="object-cover" src={job.logo} alt="" />
              <div className="flex flex-col justify-between py-6 gap-2">
                <h1 className="font-bold text-2xl text-gray-600">
                  {job.jobTitle}
                </h1>
                <h4 className="font-bold text-md text-gray-600">
                  {job.companyName}
                </h4>
                <div className="flex gap-3">
                  <button className=" border border-purple-500 text-purple-500 font-bold rounded-md px-3  py-1">
                    {job.remoteOrOnsite}
                  </button>
                  <button className=" border border-purple-500 text-purple-500 font-bold rounded-md px-3 py-1">
                    {job.jobTime}
                  </button>
                </div>
              </div>
              <div className="flex pb-6 gap-2 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
                <p className="text-gray-600 font-bold">{job.location}</p>
                <p className="text-gray-600 font-bold">Salary: {job.Salary}</p>
              </div>
              <Link to={`/jobdetails/${job.id}`}>
                <button className="btn">View Details</button>
              </Link>
            </div>
          ))}
        </div>
        <div className="flex py-10 items-center justify-center">
          <button onClick={() => setShowAllJobs(!showAllJobs)} className="btn">
            {showAllJobs ? "Show Less" : "See All Jobs"}
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
