import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';

const withBasePath = (path) => `${import.meta.env.BASE_URL}${path}`;

export default function HeroSection() {
  const blockText = `QA Automation Engineer (SDET)
Building scalable and maintainable automation frameworks
Crafting tests with Serenity BDD, RestAssured, and K6`;

  return (
    <section id="hero" className="h-screen flex flex-col justify-center items-center text-center px-4">

      <motion.img
        src={withBasePath("/assets/profile.jpg")} // asegurate que esté en /public/assets/
        alt="Alejandro Bufarini"
        className="w-32 h-32 rounded-full shadow-lg border-2 border-white mb-6 object-cover"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      />

      <motion.h1
        className="text-4xl md:text-6xl font-bold mb-4"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Hi, I'm Alejandro Bufarini
      </motion.h1>

      <motion.p
        className="text-lg md:text-xl text-gray-400 max-w-xl h-[100px] whitespace-pre-line"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <Typewriter
          words={[blockText]}
          loop={true}
          cursor
          cursorStyle="|"
          typeSpeed={40}
          deleteSpeed={25}
          delaySpeed={3000}
        />
      </motion.p>

      <div className="mt-6 flex gap-4">
        <a href="#projects" className="px-5 py-2 rounded bg-white text-zinc-900 font-semibold">
          See my work
        </a>
        <a href="#contact" className="px-5 py-2 rounded border border-white">
          Contact
        </a>
      </div>
    </section>
  );
}
