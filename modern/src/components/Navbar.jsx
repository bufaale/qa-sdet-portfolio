import React, { useState } from "react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <>
      <button
        onClick={toggleMenu}
        className="fixed top-6 right-6 z-50 bg-white text-zinc-900 px-4 py-2 rounded-full shadow-lg font-semibold hover:bg-gray-100 transition"
      >
        {isOpen ? "Close" : "Menu"}
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-gradient-to-br from-pink-400 to-cyan-300 z-40 flex flex-col items-center justify-center text-white text-3xl gap-8 font-bold">
          <button onClick={() => scrollTo("home")}>Home</button>
          <button onClick={() => scrollTo("projects")}>My Work</button>
          <button onClick={() => scrollTo("toolkit")}>My Skills</button>
          <button onClick={() => scrollTo("cv")}>Download CV</button>
          <button onClick={() => scrollTo("contact")}>Contact</button>
        </div>
      )}
    </>
  );
}
