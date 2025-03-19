import { MagicButton } from "./ui/MagicButton";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact">
      <h2 className="heading">Get in Touch</h2>
      <p className="text-center text-muted-foreground mt-4 max-w-2xl mx-auto">
        Feel free to reach out to me on LinkedIn or via email!
      </p>
      <div className="mt-10 flex flex-col items-center gap-6">
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
          />
        </motion.a>
        <motion.a
          href="mailto:da8930@drexel.edu"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <MagicButton
            title="Email Me"
            icon={<span>✉️</span>}
            position="center"
          />
        </motion.a>
      </div>
    </section>
  );
};

export default Contact;