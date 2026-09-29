import React from "react";
import { motion as Motion } from "framer-motion";
import { SkillsInfo } from "../../constants";

const Skills = () => {
  return (
    <section id="skills" className="section">
      <div className="relative z-10 mx-auto max-w-7xl">
        <Motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <p className="section-kicker">Technical toolkit</p>
          <h2 className="mt-3 text-4xl font-extrabold theme-heading sm:text-5xl">
            Skills that support <span className="text-cyan-400">full-stack delivery</span>
          </h2>
          <p className="theme-muted mt-5 text-lg">
            Technologies and tools I use to build modern web applications.
          </p>
        </Motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {SkillsInfo.map((category) => (
            <Motion.article
              key={category.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55 }}
              whileHover={{ y: -8 }}
              className="glass-card group p-6 sm:p-8"
            >
              <div className="mb-6 flex items-start justify-between gap-5">
                <div>
                  <h3 className="text-2xl font-bold theme-heading">{category.title}</h3>
                  <p className="theme-muted mt-2 text-sm">
                    {category.skills.length} technologies in active use
                  </p>
                </div>
                <span className="mono rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-sm font-bold text-cyan-400">
                  {category.skills.length} tools
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {category.skills.map((skill) => (
                  <Motion.div
                    key={skill.name}
                    whileHover={{ scale: 1.04, y: -3 }}
                    className="theme-tile group/skill flex min-h-[92px] flex-col items-center justify-center rounded-2xl border p-3 text-center transition hover:border-cyan-400"
                  >
                    <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white shadow-sm transition group-hover/skill:shadow-[0_0_18px_rgba(34,211,238,.25)]">
                      <img
                        src={skill.logo}
                        alt={skill.name}
                        loading="lazy"
                        className="h-8 w-8 object-contain"
                      />
                    </div>
                    <p className="theme-text mt-3 text-sm font-semibold">{skill.name}</p>
                  </Motion.div>
                ))}
              </div>
            </Motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
