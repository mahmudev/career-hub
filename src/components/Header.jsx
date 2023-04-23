import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="bg-[#F9F9FF] px-4 py-5 lg:px-60 mx-auto sm:max-w-xl md:max-w-full md:px-24">
      <div className="relative flex items-center justify-between">
        <div className="flex justify-between w-full">
          <div>
            <Link to="/" className="inline-flex items-center">
              <span className="ml-2 text-2xl font-bold tracking-wide text-gray-800">
                JobSearchHQ
              </span>
            </Link>
          </div>
          <div>
            <ul className="items-center hidden space-x-8 lg:flex">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "active" : "default"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/statistics"
                  className={({ isActive }) =>
                    isActive ? "active" : "default"
                  }
                >
                  Statistics
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/appliedjobs"
                  className={({ isActive }) =>
                    isActive ? "active" : "default"
                  }
                >
                  AppliedJobs
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/blog"
                  className={({ isActive }) =>
                    isActive ? "active" : "default"
                  }
                >
                  Blog
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="items-center hidden space-x-8 lg:flex">
            <button className="btn md:w-auto md:mr-4">Start Applying</button>
          </div>
        </div>
        {/* Mobile Navbar Section */}
        <div className="lg:hidden">
          {/* Dropdown Open Button */}
          <button
            aria-label="Open Menu"
            title="Open Menu"
            onClick={() => setIsMenuOpen(true)}
          >
            <Bars3BottomRightIcon className="w-5 text-gray-600" />
          </button>
          {isMenuOpen && (
            <div className="absolute top-0 left-0 w-full z-10">
              <div className="p-5 bg-white border rounded shadow-sm">
                {/* Logo & Button section */}
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <Link to="/" className="inline-flex items-center">
                      <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                        JobSearchHQ
                      </span>
                    </Link>
                  </div>
                  {/* Dropdown menu close button */}
                  <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <XMarkIcon className="w-5 text-gray-600" />
                    </button>
                  </div>
                </div>
                {/* Mobile Nav Items Section */}
                <nav>
                  <ul className="space-y-4">
                    <li>
                      <Link to="/" className="default">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/statistics"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400"
                      >
                        Statistics
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/appliedjobs"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400"
                      >
                        AppliedJobs
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/blog"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400"
                      >
                        Blog
                      </Link>
                    </li>
                    <li>
                      <button className="btn md:w-auto md:mr-4">
                        Start Applying
                      </button>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
