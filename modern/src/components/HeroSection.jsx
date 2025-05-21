export default function HeroSection() {
  return (
    <section id="home" className="h-screen flex flex-col justify-center items-center text-center px-4">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">Hi, I'm Alejandro Bufarini</h1>
      <p className="text-lg md:text-xl text-gray-400 max-w-xl">
        Senior QA Automation Engineer (SDET) – Building scalable and maintainable automation frameworks.
      </p>
      <div className="mt-6 flex gap-4">
        <a href="#projects" className="px-5 py-2 rounded bg-white text-zinc-900 font-semibold">See my work</a>
        <a href="#contact" className="px-5 py-2 rounded border border-white">Contact</a>
      </div>
    </section>
  )
}