import React from "react";

const Tools = () => {
  const apps = [
    "AWS",
    "Docker",
    "Discord",
    "Figma",
    "Firebase",
    "Git",
    "GitHub",
    "Google Chrome",
    "Postman",
    "Spotify",
    "Visual Studio Code",
  ];

  return (
    <div>
      <div className=" flex flex-col gap-5">
        <h1 className="text-2xl sm:text-3xl text-[#c1c2c5] font-bold ">
          Tools
        </h1>
        <ul className="flex flex-col text-[0.9rem]  font-bold ">
          {apps.map((app, index) => (
            <li key={index}>
              <span className="text-[#909090]">&nbsp;-&nbsp; </span>
              <a className="underline text-[#fcc419]">{app}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Tools;
