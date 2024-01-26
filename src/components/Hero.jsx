import React from "react";

const Hero = () => {
  return (
    <>
      {/* <!-- Hero Section --> */}
      <section id="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-left">
              <h1>
                Front-End React <br /> Developer{" "}
                <img src="./waving.png" alt="" />
              </h1>

              <p>
                Hi, I'm Sunny Patel. A passionate Front-end React Developer
                based in Lucknow, India.🌐
              </p>

              <div className="social-links">
                <a
                  href="https://www.linkedin.com/in/sunny-patel-7654a4251/"
                  target="_blank"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="https://github.com/sunnypatel-koder" target="_blank">
                  <i className="fab fa-github"></i>
                </a>
              </div>
            </div>

            <div className="hero-right">
              <div
                className="image-wrapper"
                style={{ backgroundImage: "url(./hero.jpeg)" }}
              ></div>
            </div>
          </div>

          <div className="tech-stack">
            <h3>Tech Stack |</h3>
            <ul className="tech-list">
              <li>
                <img src="./html.svg" title="HTML" alt="HTML" />
              </li>
              <li>
                <img src="./css.svg" title="CSS" alt="CSS" />
              </li>
              <li>
                <img
                  src="./javascript.svg"
                  title="JavaScript"
                  alt="JavaScript"
                />
              </li>
              <li>
                <img src="./react.svg" title="React" alt="React" />
              </li>

              <li>
                <img
                  src="./talwind.svg"
                  title="Tailwind CSS"
                  alt="Tailwind CSS"
                />
              </li>
              <li>
                <img src="./scss.svg" title="SCSS" alt="SCSS" />
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
