import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SingleJobDetail = () => {
  const info = useParams();

  const [detailData, setDetailData] = useState([]);
  const jobData = info.id;

  useEffect(() => {
    fetch("/jobData.json")
      .then((res) => res.json())
      .then((data) => setDetailData(data.find((jobs) => jobs.id === jobData)));
  }, [jobData]);

  const {
    logo,
    jobTitle,
    companyName,
    remoteOrOnsite,
    location,
    jobTime,
    Salary,
    jobDescription,
    JobResponsibility,
    requirements,
    experiences,
    contactInfo,
  } = detailData;

  const applyJob = (jobData) => {
    const {
      id,
      logo,
      jobTitle,
      companyName,
      remoteOrOnsite,
      location,
      jobTime,
      Salary,
    } = jobData;
    const currentJobs = JSON.parse(localStorage.getItem("applied-job")) || [];

    if (currentJobs.some((job) => job.id === id)) {
      toast("Already Applied To This Job", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      return;
    }
    const updatedJobs = [
      ...currentJobs,
      {
        id,
        logo,
        jobTitle,
        companyName,
        remoteOrOnsite,
        location,
        jobTime,
        Salary,
      },
    ];
    localStorage.setItem("applied-job", JSON.stringify(updatedJobs));
  };

  return (
    <>
      <h1 className="text-5xl py-10 text-center font-sans font-bold tracking-tight text-gray-700">
        Job Details
      </h1>
      <div className="flex flex-wrap md:my-20 md:grid-cols-2 lg:px-60 mx-auto sm:max-w-xl md:max-w-full md:px-24">
        <div className="w-full sm:w-2/3 p-6">
          <h1 className="text-2xl py-3 font-sans font-bold tracking-tight text-gray-700">
            jobTitle: {jobTitle}
          </h1>
          <p className="text-gray-700 py-6 text-base leading-loose">
            <span className="font-bold">Job Description : </span>
            {jobDescription}
          </p>
          <p className="text-gray-700 pb-6 text-base leading-loose">
            <span className="font-bold">Job Responsibility : </span>
            {JobResponsibility}
          </p>
          <h2 className="text-xl text-gray-700 font-bold mb-2 ">
            Educational Requirements:
          </h2>
          <p className="text-gray-700 py-4 text-base leading-loose">
            {requirements}
          </p>
          <h2 className="text-xl text-gray-700 font-bold mb-2">Experiences: </h2>
          <p className="text-gray-700 text-base">
            {experiences} Years in this field.
          </p>
        </div>
        <div className="w-full  sm:w-1/3 p-6">
          <div className="bg-[#F4F1FF] p-8 rounded-md">
            <h1 className="text-2xl text-center py-3 font-sans font-bold tracking-tight text-gray-700">
              Job Details
            </h1>
            <hr className="border-b border-gray-300 my-6" />

            <div className="flex  items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-indigo-600"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>

              <p className="text-gray-700  text-base leading-loose">
                <span className="font-bold "> Salary : </span>
                {Salary} (Per Month)
              </p>
            </div>
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6 text-indigo-600"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                />
              </svg>

              <p className="text-gray-700  text-base leading-loose">
                <span className="font-bold "> job Time : </span>
                {jobTime}
              </p>
            </div>
            <h1 className="text-xl  py-3 font-sans font-bold tracking-tight text-gray-700">
              Contact Information
            </h1>
            <hr className="border-b border-gray-300 my-6" />
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6 text-indigo-600"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>

              <p className="text-gray-700  text-base leading-loose">
                <span className="font-bold "> Email : </span>
                {contactInfo}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6 text-indigo-600"
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

              <p className="text-gray-700  text-base leading-loose">
                <span className="font-bold "> Address : </span>
                {location}
              </p>
            </div>
          </div>
          <a
            onClick={() => applyJob(detailData)}
            className="inline-flex cursor-pointer items-center justify-center h-12 px-6 mb-3 font-medium text-white transition duration-200 rounded shadow-md md:mb-0 bg-gradient-to-r from-purple-400 to-blue-400 hover:from-purple-700 hover:to-blue-700 my-6 w-full"
          >
            Apply Now
          </a>
        </div>
      </div>
    </>
  );
};

export default SingleJobDetail;
