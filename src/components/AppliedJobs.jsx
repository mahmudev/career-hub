import React, { useState } from "react";
import { Link } from "react-router-dom";

const AppliedJobs = () => {
  const [filterOption, setFilterOption] = useState("");
  const jobs = JSON.parse(localStorage.getItem("applied-job")) || [];

  return (
    <>
      <h1 className="text-5xl py-10 text-center font-sans font-bold tracking-tight text-gray-700">
        Applied Jobs
      </h1>
      <div className="flex justify-end my-8 md:mt-16 lg:px-60 mx-auto sm:max-w-xl md:max-w-full md:px-24">
        <div className="flex flex-col sm:flex-row gap-4">
          <select
            className="border border-purple-500 text-purple-500 font-bold rounded-md px-3 py-1"
            value={filterOption}
            onChange={(e) => setFilterOption(e.target.value)}
          >
            <option value="">Filter by</option>
            <option value="Remote">Remote</option>
            <option value="Onsite">Onsite</option>
          </select>
          <button
            className="border border-purple-500 text-purple-500 font-bold rounded-md px-3 py-1"
            onClick={() => setFilterOption("")}
          >
            Clear Filter
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-8 my-8 md:mt-16 lg:px-60 mx-auto sm:max-w-xl md:max-w-full md:px-24">
        {jobs
          .filter((job) => {
            if (filterOption === "") return true;
            return job.remoteOrOnsite === filterOption;
          })
          .map((job) => (
            <div
              key={job.id}
              className="flex flex-col md:flex-row justify-between border p-6 rounded-lg border-gray-300"
            >
              <div className="flex md:w-2/5">
                <div className="lg:p-10 mr-4 flex items-center justify-center rounded-lg bg-gray-100 w-full md:w-auto">
                  <img
                    className="h-auto w-full md:h-20 md:w-40"
                    src={job.logo}
                    alt=""
                  />
                </div>
                <div className="flex flex-col justify-between py-6 gap-2">
                  <h1 className="font-bold text-2xl text-gray-600">
                    {job.jobTitle}
                  </h1>
                  <h4 className="font-bold text-md text-gray-600">
                    {job.companyName}
                  </h4>
                  <div className="gap-3">
                    <div className="flex gap-3">
                      <button className="border border-purple-500 text-purple-500 font-bold rounded-md px-3 py-1">
                        {job.remoteOrOnsite}
                      </button>
                      <button className="border border-purple-500 text-purple-500 font-bold rounded-md px-3 py-1">
                        {job.jobTime}
                      </button>
                    </div>
                    <p className="text-gray-600 pt-2 font-bold">
                      {job.location} Salary: {job.Salary}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center mt-6 md:mt-0">
                <Link to={`/jobdetails/${job.id}`}>
                  <button className="btn">View Details</button>
                </Link>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default AppliedJobs;
