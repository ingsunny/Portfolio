import React from "react";

const Tools = () => {
  const apps = [
    { name: "AWS", link: "https://aws.amazon.com/" },
    { name: "Docker", link: "https://www.docker.com/" },
    { name: "Discord", link: "https://discord.com/" },
    { name: "Figma", link: "https://www.figma.com/" },
    { name: "Canva", link: "https://www.canva.com/" },
    { name: "Firebase", link: "https://firebase.google.com/" },
    { name: "Git", link: "https://git-scm.com/" },
    { name: "GitHub", link: "https://github.com/" },
    { name: "Google Chrome", link: "https://www.google.com/chrome/" },
    { name: "Postman", link: "https://www.postman.com/" },
    { name: "Spotify", link: "https://www.spotify.com/" },
    {
      name: "Visual Studio Code",
      link: "https://code.visualstudio.com/",
    },
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
              <a
                href={app.link}
                target="_blank"
                className="underline text-[#fcc419]"
              >
                {app.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Tools;
