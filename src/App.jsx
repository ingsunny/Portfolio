import { motion, AnimatePresence } from "framer-motion";
import Header from "./components/Header";
import Home from "./components/Home";
import Projects from "./components/Projects";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";
import LoadingIndicator from "./components/LoadingIndicator";
import About from "./components/About";
import Timeline from "./components/Timeline";
import Tools from "./components/Tools";
import Modal from "./components/Modal";
// import LoadingSkeleton from "react-loading-skeleton";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      {loading ? (
        <LoadingIndicator count={5} />
      ) : (
        <div>
          <Header />
          <Modal />
          <main className="max-w-screen-md2 m-auto px-4 md:px-2 py-11">
            <AnimatePresence mode="wait">
              <Routes location={location}>
                <Route
                  path="/about"
                  element={
                    <motion.div
                      key="about"
                      initial={{ y: 45, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -10, opacity: 0 }}
                      transition={{ duration: 0.6 }}
                    >
                      <About />
                    </motion.div>
                  }
                />
                <Route
                  path="/timeline"
                  element={
                    <motion.div
                      key="timeline"
                      initial={{ y: 45, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -10, opacity: 0 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Timeline />
                    </motion.div>
                  }
                />
                <Route
                  path="/tools"
                  element={
                    <motion.div
                      key="tools"
                      initial={{ y: 45, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -10, opacity: 0 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Tools />
                    </motion.div>
                  }
                />
                <Route
                  path="/"
                  element={
                    <motion.div
                      key="home"
                      initial={{ y: 45, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -10, opacity: 0 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Home />
                    </motion.div>
                  }
                />
                <Route
                  path="/projects"
                  element={
                    <motion.div
                      key="projects"
                      initial={{ y: 45, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -10, opacity: 0 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Projects />
                    </motion.div>
                  }
                />
              </Routes>
            </AnimatePresence>
          </main>
        </div>
      )}
    </BrowserRouter>
  );
}

export default App;
