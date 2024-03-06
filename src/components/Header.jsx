import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleNav = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav className="border-b border-gray-700/70 px-4 md:px-8 ">
        <div className="text-[#c1c2c5] text-[0.96rem] font-medium flex justify-between py-4  max-w-screen-lg m-auto">
          <ul className="hidden md:flex gap-2">
            <li className="px-3 py-2 rounded-md bg-[#29292b] text-yellow-300 h-fit">
              <Link to="/">Home</Link>
            </li>
            <li className="px-3 py-2 rounded-md h-fit">
              <Link to="/projects">Projects</Link>
            </li>
            <li className="px-3 py-2 rounded-md h-fit">Bookmarks</li>
            <li className="px-3 py-2 rounded-md h-fit">Tools</li>
            <li className="px-3 py-2 rounded-md h-fit">Timeline</li>
            <li className="px-3 py-2 rounded-md h-fit">About</li>
          </ul>

          <h1 className="text-[1.6rem] md:hidden" onClick={toggleNav}>
            {isMobileMenuOpen ? <>&times;</> : <>&#9776;</>}
          </h1>

          <ul className="flex gap-4">
            <li className="hidden md:flex items-center px-2 py-1 rounded-md bg-[#29292b] text-yellow-300">
              <span className="text-2xl ">⌘</span> + K
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
        className=" bg-[#1a1b1e] w-full md:hidden text-[#c1c2c5] absolute"
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: isMobileMenuOpen ? 1 : 0.9,
          opacity: isMobileMenuOpen ? 1 : 0,
        }}
        transition={{ duration: 0.2 }}
      >
        <ul>
          <li className="px-3 py-2  bg-[#29292b] text-yellow-300 h-fit">
            Home
          </li>
          <li className="px-3 py-2 h-fit">Projects</li>
          <li className="px-3 py-2 h-fit">Bookmarks</li>
          <li className="px-3 py-2 h-fit">Tools</li>
          <li className="px-3 py-2 h-fit">Timeline</li>
          <li className="px-3 py-2 h-fit">About</li>
        </ul>
      </motion.div>
    </>
  );
};

export default Header;
