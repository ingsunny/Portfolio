import React from "react";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <>
      <header id="header">
        <div className="container">
          <div className="logo">
            <span>Sunny Patel</span>
          </div>
          <nav className="navbar">
            <ul className="nav-menu">
              <li>
                <Link to="home" spy={true} smooth={true} duration={1000}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="about" spy={true} smooth={true} duration={1000}>
                  About
                </Link>
              </li>
              <li>
                <Link to="projects" spy={true} smooth={true} duration={1000}>
                  Projects
                </Link>
              </li>
              <li>
                <Link to="contact" spy={true} smooth={true} duration={1000}>
                  Contact
                </Link>
              </li>
            </ul>
            <div className="mobile-menu">
              <ul className="hamburger-menu">
                <li>
                  <i className="fa fa-bars"></i>
                </li>
                <li>
                  <i className="fa fa-close"></i>
                </li>
              </ul>
              <ul className="menu-list">
                <li>
                  <a href="#hero">Home</a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#portfolio">Projects</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
