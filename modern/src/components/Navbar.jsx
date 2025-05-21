import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const sections = [
  { name: "Home", link: "#hero" },
  { name: "Projects", link: "#projects" },
  { name: "Toolkit", link: "#toolkit" },
  { name: "Resume", link: "#resume" },
  { name: "Contact", link: "#contact" },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);
  const closeMenu = () => setOpen(false);

  const rainbowColors = [
    "text-red-400",
    "text-orange-400",
    "text-yellow-400",
    "text-green-400",
    "text-blue-400",
    "text-purple-400"
  ];

  return (
    <>
      {/* Hamburger Button */}
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
      </div>

      {/* Menu with blur overlay */}
      <AnimatePresence>
        {open && (
          <>
            {/* Blur background */}
            <motion.div
              className="fixed inset-0 bg-black/40 backdrop-blur-md z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 40 }}
              className="fixed top-20 right-20 z-50 flex flex-col gap-6 bg-zinc-900 px-6 py-6 rounded-lg shadow-2xl"
            >
              {sections.map((sec, index) => (
                <motion.a
                  key={sec.name}
                  href={sec.link}
                  onClick={closeMenu}
                  className={`font-bold text-xl hover:underline transition ${rainbowColors[index % rainbowColors.length]}`}
                  animate={{
                    y: [0, -2.5, 2.5, -2, 2, 0],
                    rotate: [0, 1, -1, 0]
                  }}
                  whileHover={{ scale: 1.2, rotate: 3 }}
                  transition={{
                    repeat: Infinity,
                    repeatType: "mirror",
                    duration: 2,
                    delay: index * 0.15
                  }}
                >
                  {sec.name}
                </motion.a>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
