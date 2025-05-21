import React, { useState } from "react";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-20 px-6 max-w-3xl mx-auto text-center" id="contact">
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
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-500 transition"
          >
            Send Message
          </button>
        </form>
      ) : (
        <p className="text-green-400 mt-6">✅ Message submitted! Thank you 🙂</p>
      )}
    </section>
  );
}
