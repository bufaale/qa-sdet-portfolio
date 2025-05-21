export default function DownloadCVSection() {
  return (
    <section id="resume" className="py-32 px-6 max-w-3xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-4 text-white">Want my resume?</h2>
      <p className="text-gray-400 mb-6">
        Download my resume to explore my experience, skills and projects in detail.
      </p>
      <a
        href="/Alejandro_Bufarini_CV.pdf"
        download
        className="inline-block bg-green-600 text-white px-6 py-3 rounded hover:bg-green-500 transition font-semibold"
      >
        📄 Download Resume
      </a>
    </section>
  );
}
