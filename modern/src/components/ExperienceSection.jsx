import { motion } from "framer-motion";

const experiences = [
  {
    company: "YellowPepper (Visa)",
    role: "QA Engineer",
    period: "Sep 2023 – Present",
    description: (
      <>
        <p>
          Currently working on a financial transaction system performing smoke and regression testing across 80+ microservices.
          Building robust and scalable test frameworks in Kotlin using Serenity BDD and Screenplay.
        </p>
        <ul className="list-disc list-inside mt-2 text-sm text-gray-300">
          <li>Data-driven REST API automation with decoupled logic via JSON configurations.</li>
          <li>Advanced response validations (nested JSONs, arrays, expected behavior).</li>
          <li>Dynamic data generation, assertions, SQL queries and SSL certificate support.</li>
          <li>Component-level performance testing using K6 and Locust.</li>
        </ul>
      </>
    ),
    iconColor: "bg-green-500",
  },
  {
    company: "Medable, Inc.",
    role: "QA Engineer",
    period: "Sep 2021 – Oct 2023",
    description: (
      <>
        <p>
          Designed and maintained the main regression automation framework for a clinical trial web platform.
          Focused on UI and API testing using Selenium, Python and later migrated to PyTest.
        </p>
        <ul className="list-disc list-inside mt-2 text-sm text-gray-300">
          <li>Replaced slow UI tests with efficient API requests to optimize execution times.</li>
          <li>Implemented accessibility testing using Jest-Axe and integration into GitLab pipelines.</li>
          <li>Led QA strategy sessions, technical documentation and onboarding support for new team members.</li>
        </ul>
      </>
    ),
    iconColor: "bg-blue-500",
  },
  {
    company: "Infosys",
    role: "QA Automation Engineer",
    period: "Apr 2016 – Sep 2021",
    description: (
      <>
        <p>
          Part of multiple banking and financial projects, focused on automating web and mobile testing using Java, Selenium and Appium.
        </p>
        <ul className="list-disc list-inside mt-2 text-sm text-gray-300">
          <li>Developed scalable regression suites using Page Object and Page Factory patterns.</li>
          <li>Created automation frameworks for functional and end-to-end test coverage.</li>
          <li>Documented QA processes and trained junior team members.</li>
          <li>Collaborated in RPA workflows and deployments in controlled environments.</li>
        </ul>
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
