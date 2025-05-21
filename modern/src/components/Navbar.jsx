import { useState } from "react";
import { motion } from "framer-motion";

const sections = [
  { name: "Home", link: "#hero" },
  { name: "Reflection", link: "#reflection" },
  { name: "Experience", link: "#experience" },
  { name: "Projects", link: "#projects" },
  { name: "Toolkit", link: "#toolkit" },
  { name: "Resume", link: "#cv" },
  { name: "Contact", link: "#contact" },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => setOpen(!open);
  const closeMenu = () => setOpen(false);

  const rainbowColors = [
    "text-red-400",
    "text-orange-400",
    "text-yellow-300",
    "text-green-400",
    "text-blue-400"
  ];

  return (
    <div className="fixed top-6 right-6 z-50">
      <button
        className="space-y-1 group"
        onClick={toggleMenu}
        aria-label="Menu"
      >
        <div className="w-6 h-0.5 bg-white transition-all group-hover:scale-x-125"></div>
        <div className="w-6 h-0.5 bg-white transition-all group-hover:scale-x-125"></div>
        <div className="w-6 h-0.5 bg-white transition-all group-hover:scale-x-125"></div>
      </button>

      {open && (
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 40 }}
          className="absolute top-0 right-16 flex flex-row gap-3 bg-zinc-900 px-4 py-2 rounded-lg shadow-xl"
        >
          {sections.map((sec, index) => (
            <motion.a
              key={sec.name}
              href={sec.link}
              onClick={closeMenu}
              className={`text-sm font-semibold hover:underline transition ${rainbowColors[index % rainbowColors.length]}`}
              animate={{
                y: [0, -1.5, 1.5, -1, 1, 0],
                rotate: [0, 1, -1, 0]
              }}
              whileHover={{ scale: 1.2, rotate: 2 }}
              transition={{
                repeat: Infinity,
                repeatType: "mirror",
                duration: 1.8,
                delay: index * 0.1
              }}
            >
              {sec.name}
            </motion.a>
          ))}
        </motion.div>
      )}
    </div>
  );
}
