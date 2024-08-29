import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaCode,
  FaGraduationCap,
} from "react-icons/fa";

const About = () => {
  const skills = [
    {
      name: "Frontend",
      icon: <FaCode />,
      items: [
        "React",
        "JavaScript",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "Redux Toolkit",
      ],
    },
    {
      name: "Learning",
      icon: <FaGraduationCap />,
      items: ["Node.js", "Express.js", "MongoDB"],
    },
    { name: "Tools", icon: null, items: ["Git", "VS Code"] },
  ];

  const projects = [
    {
      name: "SocioCurry",
      description:
        "A food app created with React, Tailwind CSS, and Redux Toolkit",
      link: "https://github.com/Deep687/SocioCurry.git",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 py-4 px-2 sm:py-8 sm:px-4 md:py-12 md:px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden">
        <header className="bg-blue-600 text-white p-4 sm:p-6 md:p-8 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
            Deep Chakradhar Mankar
          </h1>
          <p className="text-base sm:text-lg md:text-xl">
            Frontend Developer | Aspiring Full-Stack Developer
          </p>
        </header>

        <main className="p-4 sm:p-6 md:p-8">
          <section className="mb-6 sm:mb-8 md:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800 mb-3">
              About Me
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-700">
              I'm a passionate frontend developer and MCA student with a keen
              interest in creating engaging user interfaces. My journey in web
              development began with mastering HTML, CSS, and JavaScript, and
              I've since specialized in React for building dynamic web
              applications. I'm currently expanding my skills towards full-stack
              development, learning backend technologies to complement my
              frontend expertise.
            </p>
          </section>

          <section className="mb-6 sm:mb-8 md:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800 mb-3">
              Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {skills.map((skillSet) => (
                <div
                  key={skillSet.name}
                  className="bg-gray-50 p-3 sm:p-4 rounded-lg shadow"
                >
                  <h3 className="text-base sm:text-lg font-semibold mb-2 flex items-center">
                    {skillSet.icon && (
                      <span className="mr-2">{skillSet.icon}</span>
                    )}
                    {skillSet.name}
                  </h3>
                  <ul className="list-disc list-inside">
                    {skillSet.items.map((item) => (
                      <li
                        key={item}
                        className="text-gray-700 text-xs sm:text-sm"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-6 sm:mb-8 md:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800 mb-3">
              Projects
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {projects.map((project) => (
                <div
                  key={project.name}
                  className="bg-white p-3 sm:p-4 rounded-lg shadow-md"
                >
                  <h3 className="text-base sm:text-lg font-semibold mb-2">
                    {project.name}
                  </h3>
                  <p className="text-gray-600 mb-3 text-xs sm:text-sm">
                    {project.description}
                  </p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 transition-colors text-xs sm:text-sm"
                  >
                    View on GitHub
                  </a>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800 mb-3">
              Let's Connect
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-4">
              I'm always excited to work on new projects and continue growing as
              a developer. Whether you're looking for a frontend developer or
              have advice on my journey to full-stack development, I'd love to
              hear from you!
            </p>
            <div className="flex space-x-4 sm:space-x-6">
              <a
                href="mailto:deepmankar0@gmail.com"
                className="text-blue-600 hover:text-blue-800 transition-colors"
              >
                <FaEnvelope size={28} />
              </a>
              <a
                href="https://github.com/Deep687"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-gray-900 transition-colors"
              >
                <FaGithub size={28} />
              </a>
              <a
                href="https://www.linkedin.com/in/deep-mankar-a938b5287/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:text-blue-900 transition-colors"
              >
                <FaLinkedin size={28} />
              </a>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default About;
