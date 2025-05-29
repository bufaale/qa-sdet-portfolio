import { motion } from "framer-motion";

const experiences = [
  {
    company: "YellowPepper (Visa)",
    role: "QA Engineer",
    period: "Sep 2023 – Present",
    description: (
      <>
        <ul className="list-disc list-inside mt-2 text-sm text-gray-300">
          <li>Developed performance testing using K6 aligned with architecture standards.</li>
          <li>Created and maintained end-to-end (E2E) test flows for API services.</li>
          <li>Executed smoke and regression tests to ensure system stability.</li>
          <li>Developed automation tools to enhance efficiency and reliability.</li>
          <li>Implemented support for SSL certificate handling in projects.</li>
          <li>Designed and developed encryption and decryption methods to enhance data security and compliance.</li>
          <li><strong>Language:</strong> Kotlin</li>
        </ul>
        <div className="mt-4 flex flex-wrap gap-2">
          {["Kotlin", "Serenity BDD", "RestAssured", "K6", "SSL", "GitHub Actions"].map((tech) => (
            <span
              key={tech}
              className="bg-zinc-700 text-gray-200 text-xs px-2 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </>
    ),
    iconColor: "bg-green-500",
  },
  {
    company: "Medable, Inc.",
    role: "Quality Assurance Engineer",
    period: "Sep 2021 – Oct 2023",
    description: (
      <>
        <ul className="list-disc list-inside mt-2 text-sm text-gray-300">
          <li>Automated web testing using Selenium with Python.</li>
          <li>Refactored test pages and step definitions, removing unused code and improving maintainability.</li>
          <li>Replaced slow UI tests with faster API calls in the ASP project, reducing execution times.</li>
          <li>Built a tool for automatic site creation with complete test data generation.</li>
          <li>Set up and maintained CI pipelines in GitLab, automating cross-browser testing via BrowserStack and reducing manual testing time by 40%.</li>
          <li>Integrated Jest-Axe for accessibility testing in React apps.</li>
          <li>Led the transformation to fully unattended test execution, boosting test coverage and reducing execution time by 30% while ensuring consistent delivery quality.</li>
          <li><strong>Language:</strong> Python</li>
        </ul>
        <div className="mt-4 flex flex-wrap gap-2">
          {["Python", "Selenium", "PyTest", "Jest-Axe", "GitLab CI", "BrowserStack"].map((tech) => (
            <span
              key={tech}
              className="bg-zinc-700 text-gray-200 text-xs px-2 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </>
    ),
    iconColor: "bg-blue-500",
  },
  {
    company: "Infosys",
    role: "QA Automation",
    period: "Apr 2016 – Sep 2021",
    description: (
      <>
        <ul className="list-disc list-inside mt-2 text-sm text-gray-300">
          <li>Designed, developed, and executed automated test plans for web and mobile applications using Selenium (TestNG) and Appium.</li>
          <li>Built and maintained automated regression test suites, ensuring long-term stability and reliability.</li>
          <li>Optimized test execution time while maintaining high coverage and reducing false positives.</li>
          <li>Managed the bug tracking process using JIRA and TestRail, collaborating closely with developers.</li>
          <li>Created and maintained QA process documentation and best practices for standardization.</li>
          <li>Implemented Robotic Process Automation (RPA) solutions to automate repetitive tasks, improving efficiency and reducing errors.</li>
          <li><strong>Language:</strong> Java</li>
        </ul>
        <div className="mt-4 flex flex-wrap gap-2">
          {["Java", "Selenium", "Appium", "TestNG", "RPA", "JIRA", "TestRail"].map((tech) => (
            <span
              key={tech}
              className="bg-zinc-700 text-gray-200 text-xs px-2 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </>
    ),
    iconColor: "bg-purple-500",
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 px-6 max-w-4xl mx-auto text-white">
      <h2 className="text-3xl font-bold mb-12 text-center">Experience</h2>
      <div className="relative border-l border-zinc-600 pl-6">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true }}
            className="mb-14 relative"
          >
            <span
              className={`w-4 h-4 rounded-full ${exp.iconColor} absolute -left-2.5 top-2`}
            />
            <div className="bg-zinc-800 p-6 rounded shadow-md">
              <h3 className="text-lg font-semibold">{exp.role}</h3>
              <p className="text-sm text-gray-400">
                {exp.company} — {exp.period}
              </p>
              <div className="mt-3 text-gray-300 text-sm leading-relaxed">
                {exp.description}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
