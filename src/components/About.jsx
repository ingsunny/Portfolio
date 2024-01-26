import React from "react";

const About = () => {
  return (
    <>
      {/* <!-- About Section --> */}

      <section id="about">
        <div className="container">
          <div className="about-left">
            <div
              className="about-banner"
              style={{ backgroundImage: "url(./background.jpg)" }}
            ></div>
            <div className="about-animation"></div>
          </div>

          <div className="about-right">
            <h3 style={{ color: "#1877f2" }}>ABOUT ME</h3>
            <h2>A dedicated Front-end Developer based in Lucknow, India 🚀</h2>
            <p>
              As a Junior Front-End Developer, I have a strong command of HTML,
              CSS, JavaScript, React, Tailwind, and SCSS. I create visually
              appealing, user-friendly websites that adapt seamlessly to
              different devices. Writing clean and efficient code, I build
              dynamic and engaging interfaces, staying updated with the latest
              tools and techniques in web development. Collaboration is integral
              to my approach, as I enjoy working with cross-functional teams to
              deliver exceptional web applications.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
