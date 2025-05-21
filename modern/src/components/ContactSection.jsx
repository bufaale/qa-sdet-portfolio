import React from "react";

export default function ContactSection() {
  return (
    <section className="py-20 px-6 max-w-4xl mx-auto text-center" id="contact">
      <h2 className="text-3xl font-bold mb-6 text-white">Let’s Connect</h2>
      <p className="text-gray-400 mb-8">
        If you’d like to talk about collaboration, QA consulting, or just say hi — feel free to reach out!
      </p>
      <div className="flex justify-center gap-6 flex-wrap">
        <a
          href="mailto:alejandroebufarini@gmail.com"
          className="bg-zinc-800 px-6 py-3 rounded-lg text-white hover:bg-zinc-700 transition"
        >
          📩 alejandroebufarini@gmail.com
        </a>
        <a
          href="https://www.linkedin.com/in/alejandro-bufarini-113060129"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 px-6 py-3 rounded-lg text-white hover:bg-blue-500 transition"
        >
          💼 LinkedIn Profile
        </a>
      </div>
    </section>
  );
}
