import { useState } from "react";
import { motion } from "framer-motion";

const sections = [
  { name: "Home", link: "#hero" },
  { name: "Projects", link: "#projects" },
  { name: "Toolkit", link: "#toolkit" },
  { name: "CV", link: "#cv" },
  { name: "Contact", link: "#contact" },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);
  const closeMenu = () => setOpen(false);

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
          className="absolute top-0 right-16 flex gap-4 bg-zinc-900 px-6 py-4 rounded-lg shadow-2xl"
        >
          {sections.map((sec, index) => (
            <motion.a
              key={sec.name}
              href={sec.link}
              onClick={closeMenu}
              className="text-white font-semibold text-sm hover:text-blue-400"
              initial={{ rotate: 0 }}
              animate={{ rotate: [0, -2, 2, -1, 1, 0] }}
              transition={{ repeat: Infinity, duration: 2, delay: index * 0.1 }}
            >
              {sec.name}
            </motion.a>
          ))}
        </motion.div>
      )}
    </div>
  );
}
