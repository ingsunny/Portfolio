import "./App.css";
import React from "react";
import About from "./components/About";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import { Element } from "react-scroll";

function App() {
  return (
    <>
      <Element name="home">
        <Header />
      </Element>
      <Hero />
      <Element name="about">
        <About />
      </Element>
      <Element name="projects">
        <Portfolio />
      </Element>
      <Element name="contact">
        <Contact />
      </Element>
      <Footer />
    </>
  );
}

export default App;
