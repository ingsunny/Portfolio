import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link, NavLink } from "react-router-dom";

import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const pathSegments = location.pathname
    .split("/")
    .filter((segment) => segment !== ""); // Remove empty segments

  const capitalizedPath = pathSegments
    .map((segment) => {
      return segment.charAt(0).toUpperCase() + segment.slice(1);
    })
    .join(" ");

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [tabName, setTabName] = useState(
    capitalizedPath ? capitalizedPath : "Home"
  );

  const toggleNav = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleKeyCombination = () => {
    const event = document.createEvent("Events");
    event.initEvent("keydown", true, true);
    event.key = "k";
    event.ctrlKey = true;
    document.dispatchEvent(event);
  };

  return (
    <>
      <nav className="border-b border-gray-700/70 px-4 md:px-8 ">
        <div className="text-[#c1c2c5] text-[0.96rem] font-medium flex justify-between py-4  max-w-screen-md2 m-auto">
          <ul className="hidden md:flex gap-2">
            <Link to="/">
              <li
                onClick={(e) => setTabName(e.target.innerHTML)}
                className={`px-3 py-2 rounded-md h-fit ${
                  tabName == "Home" ? "bg-[#29292b] text-yellow-300" : ""
                }`}
              >
                Home
              </li>
            </Link>
            <Link to="/projects">
              {" "}
              <li
                onClick={(e) => setTabName(e.target.innerHTML)}
                className={`px-3 py-2 rounded-md h-fit ${
                  tabName == "Projects" ? "bg-[#29292b] text-yellow-300" : ""
                }`}
              >
                Projects
              </li>
            </Link>
            <Link to="/about">
              {" "}
              <li
                onClick={(e) => setTabName(e.target.innerHTML)}
                className={`px-3 py-2 rounded-md h-fit ${
                  tabName == "About" ? "bg-[#29292b] text-yellow-300" : ""
                }`}
              >
                About
              </li>
            </Link>
            <Link to="/timeline">
              {" "}
              <li
                onClick={(e) => setTabName(e.target.innerHTML)}
                className={`px-3 py-2 rounded-md h-fit ${
                  tabName == "Timeline" ? "bg-[#29292b] text-yellow-300" : ""
                }`}
              >
                Timeline
              </li>
            </Link>
            <Link to="/tools">
              {" "}
              <li
                onClick={(e) => setTabName(e.target.innerHTML)}
                className={`px-3 py-2 rounded-md h-fit ${
                  tabName == "Tools" ? "bg-[#29292b] text-yellow-300" : ""
                }`}
              >
                Tools
              </li>
            </Link>
          </ul>

          <h1 className="text-[1.6rem] md:hidden" onClick={toggleNav}>
            {isMobileMenuOpen ? <>&times;</> : <>&#9776;</>}
          </h1>

          <ul className="flex gap-4">
            <li
              onClick={handleKeyCombination}
              className="hidden md:flex items-center px-2 py-1 rounded-md bg-[#29292b] text-yellow-300"
            >
              <span className="text-2xl">⌘</span> + K
            </li>
            <li className="flex items-center px-2 py-1 rounded-md bg-[#29292b] text-yellow-300">
              <span className="text-2xl">
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
                    d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25"
                  />
                </svg>
              </span>
            </li>
          </ul>
        </div>
      </nav>

      <motion.div
        className="bg-[#1a1b1e] w-full md:hidden text-[#c1c2c5] absolute z-50 h-full"
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: isMobileMenuOpen ? 1 : 0.9,
          opacity: isMobileMenuOpen ? 1 : 0,
        }}
        transition={{ duration: 0.2 }}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        <ul className="bg-[#1a1b1e] ">
          <Link to="/">
            <li
              className={`px-3 py-2 h-fit ${
                tabName == "Home" ? "bg-[#29292b] text-yellow-300" : ""
              }`}
              onClick={(e) => setTabName(e.target.innerHTML)}
            >
              Home
            </li>
          </Link>
          <Link to="/projects">
            <li
              className={`px-3 py-2 h-fit ${
                tabName == "Projects" ? "bg-[#29292b] text-yellow-300" : ""
              }`}
              onClick={(e) => setTabName(e.target.innerHTML)}
            >
              Projects
            </li>
          </Link>
          <Link to="/about">
            <li
              className={`px-3 py-2 h-fit ${
                tabName == "About" ? "bg-[#29292b] text-yellow-300" : ""
              }`}
              onClick={(e) => setTabName(e.target.innerHTML)}
            >
              About
            </li>
          </Link>
          <Link to="/timeline">
            <li
              className={`px-3 py-2 h-fit ${
                tabName == "Timeline" ? "bg-[#29292b] text-yellow-300" : ""
              }`}
              onClick={(e) => setTabName(e.target.innerHTML)}
            >
              Timeline
            </li>
          </Link>
          <Link to="/tools">
            <li
              className={`px-3 py-2 h-fit ${
                tabName == "Tools" ? "bg-[#29292b] text-yellow-300" : ""
              }`}
              onClick={(e) => setTabName(e.target.innerHTML)}
            >
              Tools
            </li>
          </Link>
        </ul>
      </motion.div>
    </>
  );
};

export default Header;
