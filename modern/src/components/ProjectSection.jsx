import React from "react";

const projects = [
  {
    title: "TDD + Shift Left Demo",
    description:
      "Simulates the TDD Red/Green cycle and Shift Left with tests before backend is running, powered by Spring Boot, RestAssured, and GitHub Actions.",
    link: "https://github.com/bufaale/automation-tdd-shiftleft-demo",
    tech: ["Java", "Spring Boot", "JUnit 5", "RestAssured", "GitHub Actions"],
  },
  {
    title: "API Test Automation Framework",
    description:
      "Data-driven framework using Serenity BDD, RestAssured and JSON validation.",
    link: "https://github.com/bufaale/api-testing",
    tech: ["Java", "Gradle", "Serenity BDD", "Cucumber", "RestAssured"],
  },
  {
    title: "UI Web Automation Framework",
    description:
      "UI automation with Selenium WebDriver, Screenplay and GitHub Actions integration.",
    link: "https://github.com/bufaale/automation-web-java-maven",
    tech: ["Java", "Selenium", "Serenity BDD", "JUnit 5", "GitHub Actions"],
  },
];

export default function ProjectSection() {
  return (
    <section id="projects" className="py-32 px-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-white">Selected Projects</h2>
      <div className="grid gap-8">
        {projects.map((project, i) => (
          <a
            key={i}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-zinc-800 p-6 rounded-lg shadow-md hover:bg-zinc-700 transition duration-200"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold text-white">
                {project.title}
              </h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-300"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.85 10.92.57.1.77-.25.77-.54v-1.87c-3.19.69-3.87-1.53-3.87-1.53-.52-1.32-1.28-1.67-1.28-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.67 1.24 3.32.95.1-.74.4-1.24.73-1.53-2.55-.29-5.24-1.28-5.24-5.71 0-1.26.45-2.3 1.18-3.11-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.07 11.07 0 0 1 5.79 0C17.63 6.18 18.6 6.5 18.6 6.5c.62 1.59.23 2.76.11 3.05.73.81 1.18 1.85 1.18 3.11 0 4.44-2.7 5.41-5.26 5.69.41.35.78 1.04.78 2.11v3.13c0 .3.2.64.79.53A10.53 10.53 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z" />
              </svg>
            </div>
            <p className="text-gray-400 mt-2">{project.description}</p>
            <div className="flex flex-wrap gap-2 mt-4">
              {project.tech.map((tech, idx) => (
                <span
                  key={idx}
                  className="bg-zinc-700 text-gray-200 text-xs px-3 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
