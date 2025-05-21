import React from "react";

export default function Navbar() {
  return (
    <header className="fixed w-full top-0 bg-zinc-900 bg-opacity-90 shadow-md z-50">
      <nav className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center text-white">
        <div className="text-xl font-bold">Alejandro Bufarini</div>
        <ul className="flex gap-6 text-sm font-semibold">
          <li><a href="#hero" className="hover:text-blue-400">Home</a></li>
          <li><a href="#projects" className="hover:text-blue-400">Projects</a></li>
          <li><a href="#toolkit" className="hover:text-blue-400">Toolkit</a></li>
          <li><a href="#cv" className="hover:text-blue-400">CV</a></li>
          <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}
