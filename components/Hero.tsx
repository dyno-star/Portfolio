import { MagicButton } from "./ui/MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { motion } from "framer-motion";

const Hero = ({ darkMode }: { darkMode: boolean }) => {
  return (
    <div className={`min-h-screen w-full pb-20 pt-36 ${darkMode ? "bg-gray-900" : "bg-gray-100"} flex flex-col items-center justify-center relative overflow-hidden transition-colors duration-500`}>
      <Spotlight className="top-0 left-0 h-[80vh] w-[60vw]" fill={darkMode ? "white" : "gray"} />
      <div className={`absolute inset-0 h-full w-full ${darkMode ? "bg-gray-900 bg-grid-white/[0.03]" : "bg-gray-100 bg-grid-gray-300/[0.2]"} flex items-center justify-center`}>
        <div className={`absolute pointer-events-none inset-0 flex items-center justify-center ${darkMode ? "bg-gray-900 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" : "bg-gray-100 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,gray)]"}`} />
      </div>
      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h2 className={`uppercase tracking-widest text-xs text-center ${darkMode ? "text-blue-300" : "text-blue-600"} max-w-80`}>
          Software Development & AI Enthusiast
          </h2>
          <TextGenerateEffect
            className={`text-center text-[40px] md:text-5xl lg:text-6xl ${darkMode ? "text-white" : "text-gray-900"}`}
            words="Building Solutions with Code"
            />
          <p className={`text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
            Hi, I'm Eze, a Computer Science Student
          </p>
          <motion.a href="#projects" whileHover={{ scale: 1.05, rotate: 2 }} whileTap={{ scale: 0.95 }} transition={{ type: "spring", stiffness: 300 }}>
            <MagicButton title="Show my work" icon={<span>🔍</span>} position="center" />
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default Hero;