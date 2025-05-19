export default function ProjectSection() {
  return (
    <section id="projects" className="py-20 px-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-white">Selected Projects</h2>
      <div className="grid gap-8">
        <div className="bg-zinc-800 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-white">API Test Automation Framework</h3>
          <p className="text-gray-400 mt-2">Data-driven framework using Serenity BDD, RestAssured and JSON validation.</p>
        </div>
        <div className="bg-zinc-800 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-white">UI Web Automation Framework</h3>
          <p className="text-gray-400 mt-2">UI automation with Selenium WebDriver, Screenplay and GitHub Actions integration.</p>
        </div>
      </div>
    </section>
  )
}