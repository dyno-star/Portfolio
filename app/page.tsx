"use client";

import { useState, useEffect, useRef } from "react";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { FaHome, FaUser, FaCode, FaBriefcase, FaEnvelope, FaMoon, FaSun, FaArrowUp, FaFileDownload } from "react-icons/fa";
import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Skills from "@/components/skills";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import { motion } from "framer-motion";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showResumeModal, setShowResumeModal] = useState(false);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const navItems = [
    { name: "Home", link: "#hero", icon: <FaHome /> },
    { name: "About", link: "#about", icon: <FaUser /> },
    { name: "Skills", link: "#skills", icon: <FaCode /> },
    { name: "Experience", link: "#experience", icon: <FaBriefcase /> },
    { name: "Contact", link: "#contact", icon: <FaEnvelope /> },
  ];

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toggleResumeModal = () => {
    setShowResumeModal(!showResumeModal);
  };

  return (
    <main className={`relative flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 ${darkMode ? "dark bg-black-100 text-white" : "bg-white text-black"} transition-colors duration-500`}>
      <div className="fixed top-0 left-0 w-full h-1 bg-blue-500 z-50" style={{ width: `${scrollProgress}%` }} />
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <motion.button
          onClick={toggleTheme}
          className="fixed top-4 right-4 p-2 bg-gray-200 dark:bg-gray-800 rounded-full z-50"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-gray-600" />}
        </motion.button>

        {showScrollTop && (
          <motion.button
            onClick={scrollToTop}
            className="fixed bottom-4 right-4 p-3 bg-blue-500 text-white rounded-full z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaArrowUp />
          </motion.button>
        )}

        <section id="hero"><Hero darkMode={darkMode} /></section>
        <motion.section id="about" ref={aboutRef} className="py-20" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white">About Me</h2>
          <div className="flex justify-center mt-6">
            <motion.div
              onClick={toggleResumeModal}
              className="flex flex-col items-center cursor-pointer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaFileDownload className="text-4xl text-blue-500" title="View My Resume" />
              <span className="mt-2 text-gray-600 dark:text-gray-300">My Resume</span>
            </motion.div>
          </div>
        </motion.section>

        {showResumeModal && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleResumeModal}
          >
            <motion.div
              className="bg-white dark:bg-black-100 p-4 rounded-lg w-11/12 md:w-3/4 lg:w-1/2 max-h-[80vh] overflow-auto"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={toggleResumeModal}
                className="absolute top-2 right-2 text-gray-600 dark:text-gray-300 text-xl"
              >
                ✕
              </button>
              <iframe
                src="https://drive.google.com/file/d/10w1SwQcXwJtwYw8oN4z5VF4QfKvob_KF/preview"
                className="w-full h-[70vh]"
                allow="autoplay"
              />
            </motion.div>
          </motion.div>
        )}

        <motion.section id="skills" ref={skillsRef} className="py-20" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
          <Skills darkMode={darkMode} />
        </motion.section>
        <motion.section id="experience" ref={experienceRef} className="py-20" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
          <Experience darkMode={darkMode} />
        </motion.section>
        <motion.section id="projects" ref={projectsRef} className="py-20 w-full" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
          <Grid darkMode={darkMode} />
        </motion.section>
        <motion.section id="contact" ref={contactRef} className="py-20" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
          <Contact darkMode={darkMode} />
        </motion.section>

        <footer className="py-10 text-center text-gray-600 dark:text-gray-300">
          <p>© 2025 Eze Anyaegbu. Built with Next.js & Tailwind CSS.</p>
          <a href="https://linkedin.com/in/ezeanyaegbu" className="text-blue-500 dark:text-blue-300 hover:underline">LinkedIn</a>
        </footer>
      </div>
    </main>
  );
}