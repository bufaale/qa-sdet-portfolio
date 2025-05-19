export default function ToolkitSection() {
  const tools = ['Java', 'Kotlin', 'Python', 'Selenium', 'RestAssured', 'Cucumber', 'JUnit 5', 'K6']
  return (
    <section className="py-16 px-6 text-center">
      <h2 className="text-2xl font-bold mb-6">My Toolkit</h2>
      <div className="flex flex-wrap justify-center gap-4 text-sm text-white">
        {tools.map(tool => (
          <span key={tool} className="bg-zinc-700 px-4 py-2 rounded">{tool}</span>
        ))}
      </div>
    </section>
  )
}