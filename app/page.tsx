"use client";

import { FloatingNav } from "@/components/ui/FloatingNav";
import { FaHome, FaUser, FaCode, FaBriefcase, FaEnvelope } from "react-icons/fa";
import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import { motion } from "framer-motion";
import { useRef } from "react";

export default function Home() {
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

  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        
        {/* Hero Section */}
        <section id="hero">
          <Hero />
        </section>

        {/* About Section */}
        <motion.section
          id="about"
          ref={aboutRef}
          className="py-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="heading">About Me</h2>
          <p className="text-center text-muted-foreground mt-4 max-w-2xl mx-auto">
            Hi, I’m Eze Anyaegbu, a Computer Science student at Drexel University. I’m passionate about software development and AI, currently working on B.A.G.S, a recycling app to detect plastic bags. Fun fact: I built a tool to help students find lost items on campus!
          </p>
        </motion.section>

        {/* Skills Section */}
        <motion.section
          id="skills"
          ref={skillsRef}
          className="py-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Skills />
        </motion.section>

        {/* Experience Section */}
        <motion.section
          id="experience"
          ref={experienceRef}
          className="py-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Experience />
        </motion.section>

        {/* Projects Section */}
        <motion.section
          id="projects"
          ref={projectsRef}
          className="py-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Grid />
        </motion.section>

        {/* Contact Section */}
        <motion.section
          id="contact"
          ref={contactRef}
          className="py-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Contact />
        </motion.section>

        {/* Footer */}
        <footer className="py-10 text-center text-muted-foreground">
          <p>© 2025 Eze Anyaegbu. Built with Next.js & Tailwind CSS.</p>
          <a href="https://linkedin.com/in/ezeanyaegbu" className="text-blue-300 hover:underline">LinkedIn</a>
        </footer>
      </div>
    </main>
  );
}