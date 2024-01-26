import React from "react";

const Portfolio = () => {
  return (
    <>
      {/* <!-- ---------portfolioSection----- --> */}

      <section id="portfolio">
        <div className="portfolio-top">
          <h3>PORTFOLIO</h3>
          <h1>Each project is a unique piece of development 🧩</h1>
        </div>

        <div className="container">
          <div className="card pro pro1">
            <div className="card-img">
              <img src="./pro1.png" alt="" />
            </div>

            <div className="card-detail">
              <h2 className="title">E-learning Platform 📚</h2>
              <p className="description">
                The e-learning platform is a dynamic online education solution
                that brings learning to your fingertips. It offers a wide range
                of courses and resources, making education easily accessible and
                interactive.
              </p>
              <div className="tech-used">
                <h4>React</h4>
                <h4>SCSS</h4>
              </div>
              <div className="pro-link">
                <a target="_blank" href="" rel="noreferrer">
                  Code <i className="fa-brands fa-github"></i>
                </a>
                <a target="_blank" href="" rel="noreferrer">
                  Live Demo
                  <i className="fa-solid fa-arrow-up-right-from-square link-icon"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
