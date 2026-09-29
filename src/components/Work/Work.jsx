import React from "react";
import { motion as Motion } from "framer-motion";
import { BriefcaseBusiness, Globe, Laptop, Trophy } from "lucide-react";

const Work = () => {
  const experiences = [
    {
      title: "Java Intern",
      company: "OCAC, Bhubaneswar",
      location: "",
      icon: <BriefcaseBusiness size={28} />,
      badgeColor: "bg-cyan-400/10 text-cyan-400",
      description:
        "Worked with Java, OOP concepts, Collections, File Handling and core APIs while developing practical applications and improving problem-solving skills.",
    },
    {
      title: "Backend Development Intern",
      company: "Web_Bocket Pvt. Ltd.",
      location: "",
      icon: <Laptop size={28} />,
      badgeColor: "bg-cyan-400/10 text-cyan-400",
      description:
        "Developed REST APIs using Node.js, Express.js and MongoDB. Implemented authentication, CRUD operations and optimized backend functionality.",
    },
    {
      title: "Web Developer Intern",
      company: "Nano Cloud Technology",
      location: "DLF Cyber City, Patia, Bhubaneswar",
      icon: <Globe size={28} />,
      badgeColor: "bg-cyan-400/10 text-cyan-400",
      description:
        "Worked as a Web Developer Intern, gaining practical experience in building responsive web applications and working with modern web development technologies.",
    },
    {
      title: "Hackathon Experience",
      company: "4+ hackathons and coding competitions",
      location: "",
      isHackathon: true,
      year: "2024 • 2025 • 2026",
      technologies: "Full-stack solutions",
      icon: <Trophy size={28} />,
      badgeColor: "bg-amber-400/10 text-amber-300",
      achievement:
        "Strengthened problem-solving, rapid prototyping, teamwork, and software development skills in a fast-paced environment.",
      description:
        "Collaborated with a team to design and develop full-stack solutions for real-world challenges.",
    },
  ];

  return (
    <section id="experience" className="section">
      <div className="relative z-10 max-w-7xl mx-auto">
        <Motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <p className="section-kicker">Experience & achievements</p>
          <h2 className="mt-3 text-4xl font-extrabold theme-heading sm:text-5xl">
            Internships <span className="text-cyan-400">& Hackathons</span>
          </h2>

          <p className="theme-muted mt-5 max-w-2xl mx-auto">
            Practical experience gained through internships, hackathons and
            real-world development projects.
          </p>
        </Motion.div>

        <div className="relative grid gap-6 lg:grid-cols-2">
          {experiences.map((item, index) => (
            <Motion.article
              key={index}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              whileHover={{ y: -8 }}
              className="glass-card p-6 sm:p-8 flex flex-col justify-between"
            >
              <div>
                <div className="mb-6 flex items-start justify-between gap-4">
                  <div className={`grid h-14 w-14 place-items-center rounded-2xl ${item.badgeColor}`}>
                    {item.icon}
                  </div>
                  {item.isHackathon && (
                    <span className="mono rounded-full border border-amber-400/20 bg-amber-400/10 px-3 py-1 text-xs font-bold text-amber-300">
                      4+ Events
                    </span>
                  )}
                </div>

                <h3 className="text-2xl font-bold theme-heading">{item.title}</h3>
                <p className="text-cyan-400 mt-2 font-semibold">{item.company}</p>
                {item.location && (
                  <p className="theme-muted mt-1 text-sm font-medium">{item.location}</p>
                )}

                {item.isHackathon && (
                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    <span className="rounded-2xl border border-cyan-400/15 bg-cyan-400/10 px-4 py-2.5 text-xs">
                      <span className="theme-muted block">Year</span>
                      <span className="font-semibold text-cyan-400">{item.year}</span>
                    </span>
                    <span className="rounded-2xl border border-emerald-400/15 bg-emerald-400/10 px-4 py-2.5 text-xs">
                      <span className="theme-muted block">Technologies</span>
                      <span className="font-semibold text-emerald-300">{item.technologies}</span>
                    </span>
                  </div>
                )}

                <p className="theme-muted mt-5 leading-7">{item.description}</p>
              </div>

              {item.achievement && (
                <p className="theme-text mt-5 rounded-2xl border border-amber-400/15 bg-amber-400/10 px-4 py-3 text-sm leading-6">
                  {item.achievement}
                </p>
              )}
            </Motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
