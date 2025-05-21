import React from "react";

const tools = [
  { name: "Kotlin", icon: "/assets/icons/Kotlin.svg" },
  { name: "Java", icon: "/assets/icons/java.svg" },
  { name: "Python", icon: "/assets/icons/python.svg" },
  { name: "Git", icon: "/assets/icons/Git.svg" },
  { name: "GitHub", icon: "/assets/icons/Github.svg" },
  { name: "Serenity", icon: "/assets/icons/Serenity.png" },
  { name: "Cucumber", icon: "modern/assets/cucumber.png" },
  { name: "RestAssured", icon: "/assets/icons/RestAssured.png" },
  { name: "Selenium", icon: "/assets/icons/Selenium.png" },
  { name: "K6", icon: "modern/dist/assets/K6.svg" },
];

export default function ToolkitSection() {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-10 text-white text-center">My Toolkit</h2>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8 justify-items-center">
        {tools.map((tool) => (
          <div key={tool.name} className="flex flex-col items-center">
            <img
              src={tool.icon}
              alt={tool.name}
              className="w-14 h-14 mb-2 hover:scale-110 transition-transform"
            />
            <span className="text-sm text-gray-300">{tool.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}