import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Projects = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const fetchRepos = async () => {
      const url = "https://api.github.com/users/sunnypatel-dev/repos";

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        const filteredData = data.filter((i) => i.homepage)
        setRepos(filteredData);
      } catch (error) {
        console.error("Error fetching repositories:", error);
      }
    };

    fetchRepos();
  }, []);


  return (
    <section className="">
      <div className="flex justify-between items-center">
        <h1 className="text-[2rem] text-[#c1c2c5] font-bold">
          Projects {":)"}
        </h1>
        {/* <select className="text-lg font-bold outline-none bg-[#313234] text-[#c1c2c5] border-none px-2 py-1 h-fit">
          <option>All</option>
          <option>Web Apps</option>
          <option>Mobile Apps</option>
          <option>Games</option>
        </select> */}
      </div>

      <div className="my-10 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-7">
        {repos.map((repo, index) => (
          <div
            key={index}
            className={`flex flex-1 flex-col gap-8 bg-[#25262b] px-4 py-3 ${
              index === repos.length - 1 ? "md:col-span-2" : ""
            }`}
          >
            <div className="flex justify-between">
              <h3 className="text-[#c1c2c5] text-xl font-bold">{repo.name}</h3>
              <span className="flex gap-1">
                <Link to={repo.clone_url} target="_blank">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-brand-github"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    stroke="white"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
                  </svg>
                </Link>
                <Link to={repo.homepage} target="_blank">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-brand-vercel"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    stroke="white"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-label="Link to project on Vercel"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M3 19h18l-9 -15z"></path>
                  </svg>
                </Link>
              </span>
            </div>

            <p className="text-[#c1c2c5]">{repo.description}</p>

            <div className="py-2">
              <hr className=" border-[#5c5f66]" />
              <ul className="flex text-yellow-400 text-[9px] gap-2 font-semibold pt-4">
                {repo.topics.slice(0, 3).map((tag, index) => (
                  <li className="border border-yellow-400 uppercase rounded-xl px-[0.4rem]">
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
