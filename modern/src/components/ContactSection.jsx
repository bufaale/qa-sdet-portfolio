import React, { useState } from "react";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-32 px-6 max-w-3xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-6 text-white">Let’s Connect</h2>
      <p className="text-gray-400 mb-8">
        Drop me a message and I’ll get back to you soon!
      </p>

      {!submitted ? (
        <form onSubmit={handleSubmit} className="space-y-4 text-left">
          <input
            type="text"
            placeholder="Your name"
            required
            className="w-full p-3 rounded bg-zinc-800 text-white border border-zinc-700"
          />
          <input
            type="email"
            placeholder="Your email"
            required
            className="w-full p-3 rounded bg-zinc-800 text-white border border-zinc-700"
          />
          <textarea
            placeholder="Your message"
            rows="5"
            required
            className="w-full p-3 rounded bg-zinc-800 text-white border border-zinc-700"
          ></textarea>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-500 transition"
            >
              Send Message
            </button>
            <a
              href="https://www.linkedin.com/in/alejandro-bufarini-113060129/"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-blue-600 text-blue-400 px-6 py-2 rounded hover:bg-blue-600 hover:text-white transition"
            >
              View LinkedIn
            </a>
          </div>
        </form>
      ) : (
        <>
          <p className="text-green-400 mt-6">✅ Message submitted! Thank you 🙂</p>
          <a
            href="https://www.linkedin.com/in/alejandro-bufarini-113060129/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 border border-blue-600 text-blue-400 px-6 py-2 rounded hover:bg-blue-600 hover:text-white transition"
          >
            View LinkedIn
          </a>
        </>
      )}
    </section>
  );
}
