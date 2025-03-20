import { MagicButton } from "./ui/MagicButton";
import { motion } from "framer-motion";

const Contact = ({ darkMode }: { darkMode: boolean }) => {
  return (
    <section id="contact" className="text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Contact</h2>
      <div className="mt-10 flex flex-col sm:flex-row justify-center gap-6">
        <motion.a
          href="https://linkedin.com/in/ezeanyaegbu"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <MagicButton
            title="Connect on LinkedIn"
            icon={<span>🔗</span>}
            position="center"
            otherClasses={darkMode ? "bg-gray-800 text-white" : "bg-gray-200 text-black"}
          />
        </motion.a>
        <motion.a
          href="mailto:ezea1790@gmail.com"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <MagicButton
            title="Email Me"
            icon={<span>✉️</span>}
            position="center"
            otherClasses={darkMode ? "bg-gray-800 text-white" : "bg-gray-200 text-black"}
          />
        </motion.a>
        <motion.a
          href="https://github.com/dyno-star"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <MagicButton
            title="My GitHub"
            icon={<span>🐙</span>} // Changed to GitHub-like icon
            position="center"
            otherClasses={darkMode ? "bg-gray-800 text-white" : "bg-gray-200 text-black"}
          />
        </motion.a>
      </div>
    </section>
  );
};

export default Contact;