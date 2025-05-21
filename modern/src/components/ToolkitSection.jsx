import React from "react";

const tools = [
  { name: "Kotlin", icon: "/assets/icons/kotlin.svg" },
  { name: "Java", icon: "/assets/icons/java.svg" },
  { name: "Python", icon: "/assets/icons/python.png" },
  { name: "Git", icon: "/assets/icons/git.png" },
  { name: "GitHub", icon: "/assets/icons/github.png" },
  { name: "Serenity", icon: "/assets/icons/serenity.png" },
  { name: "Cucumber", icon: "/assets/icons/cucumber.png" },
  { name: "RestAssured", icon: "/assets/icons/restassured.png" },
  { name: "Selenium", icon: "/assets/icons/selenium.png" },
  { name: "K6", icon: "/assets/icons/K6.svg" }
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