import React from "react";
import { motion as Motion } from "framer-motion";
import {
  FaGithub,
  FaJava,
  FaReact,
  FaRobot,
  FaUsers,
} from "react-icons/fa";
import { ArrowUpRight, Code2 } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Flight Management System",
      tech: "Java • OOP • File Handling",
      icon: <FaJava />,
      description:
        "Developed a console-based Flight Management System that manages flight schedules, passenger bookings, cancellations, and user information using Object-Oriented Programming and file handling.",
      github: "https://github.com/Mohini969",
      demo: "#",
    },
    {
      title: "Bank Management System",
      tech: "MongoDB • Express • React • Node.js",
      icon: <FaReact />,
      description:
        "Built a full-stack banking application with secure authentication, account management, balance tracking, and transaction history using the MERN Stack.",
      github: "https://github.com/Mohini969",
      demo: "#",
    },
    {
      title: "AI Movie & Music Recommendation",
      tech: "React • Node.js • AI",
      icon: <FaRobot />,
      description:
        "Designed an AI-powered recommendation platform that suggests personalized movies and music based on user interests and preferences through an interactive interface.",
      github: "https://github.com/Mohini969",
      demo: "#",
    },
    {
      title: "Creator Hub",
      tech: "MERN Stack",
      icon: <FaUsers />,
      description:
        "Developed a platform connecting brands with creators, enabling campaign management, creator profiles, collaboration requests, and secure authentication.",
      github: "https://github.com/Mohini969",
      demo: "#",
    },
  ];

  const renderProjectButton = (url, label, icon, isPrimary) => {
    const isAvailable = url && url !== "#" && url.trim() !== "";

    if (isAvailable) {
      return (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className={`relative inline-flex items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold transition-all duration-300 hover:-translate-y-1 ${
            isPrimary
              ? "primary-btn hover:shadow-[0_0_25px_rgba(34,211,238,0.4)]"
              : "secondary-btn hover:border-cyan-400 hover:text-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.25)]"
          }`}
        >
          {icon}
          {label}
        </a>
      );
    }

    return (
      <div className="group/tooltip relative inline-block">
        <button
          disabled
          aria-disabled="true"
          className={`inline-flex w-full items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold opacity-50 cursor-not-allowed transition-all duration-300 ${
            isPrimary ? "primary-btn" : "secondary-btn"
          }`}
        >
          {icon}
          {label}
        </button>
        <span className="absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-lg border border-cyan-400/30 bg-slate-950 px-2.5 py-1 text-xs font-semibold text-cyan-300 shadow-xl opacity-0 transition-opacity duration-200 group-hover/tooltip:opacity-100 pointer-events-none z-20">
          Coming Soon
        </span>
      </div>
    );
  };

  return (
    <section id="projects" className="section">
      <div className="relative z-10 max-w-7xl mx-auto">
        <Motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <p className="section-kicker">Selected work</p>
          <h2 className="mt-3 text-4xl font-extrabold theme-heading sm:text-5xl">
            Featured <span className="text-cyan-400">Projects</span>
          </h2>

          <p className="theme-muted mt-5 max-w-2xl mx-auto">
            A collection of projects that demonstrate my knowledge of software
            development, full-stack engineering and problem solving.
          </p>
        </Motion.div>

        <div className="grid gap-7 md:grid-cols-2">
          {projects.map((project, index) => (
            <Motion.article
              key={index}
              initial={{ opacity: 0, y: 34 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.05 }}
              whileHover={{ y: -10 }}
              className="group glass-card overflow-hidden"
            >
              <div className="project-thumb relative h-56 overflow-hidden border-b border-cyan-400/10 p-5">
                <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,.1)_1px,transparent_1px)] bg-[size:22px_22px] opacity-30" />
                <Motion.div
                  initial={{ scale: 0.92, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 + 0.1 }}
                  className="relative flex h-full flex-col justify-between rounded-[1rem] border border-cyan-400/20 bg-black/10 p-5 backdrop-blur-sm"
                >
                  <div className="flex items-center justify-between">
                    <span className="mono rounded-full bg-cyan-400/15 px-3 py-1 text-xs font-semibold text-cyan-400">
                      Project 0{index + 1}
                    </span>
                    <span className="grid h-11 w-11 place-items-center rounded-2xl bg-cyan-400/10 text-2xl text-cyan-400 transition group-hover:scale-110">
                      {project.icon}
                    </span>
                  </div>
                  <div>
                    <Code2 className="mb-3 text-[var(--color-accent-2)]" size={24} />
                    <p className="max-w-xs text-xl font-bold theme-heading">{project.title}</p>
                  </div>
                </Motion.div>
              </div>

              <div className="p-6 sm:p-7">
                <div className="flex flex-wrap gap-2">
                  {project.tech.split(" • ").map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <h3 className="mt-5 text-2xl font-bold theme-heading">{project.title}</h3>
                <p className="theme-muted mt-4 leading-7">{project.description}</p>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  {renderProjectButton(project.github, "GitHub", <FaGithub />, false)}
                  {renderProjectButton(project.demo, "Live Demo", <ArrowUpRight size={17} />, true)}
                </div>
              </div>
            </Motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
