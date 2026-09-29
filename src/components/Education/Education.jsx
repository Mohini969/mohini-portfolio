import React from "react";
import { motion as Motion } from "framer-motion";
import { GraduationCap, MapPin } from "lucide-react";

const Education = () => {
  const educationData = [
    {
      year: "2023 - 2027",
      degree: "B.Tech in Computer Science & Engineering",
      school: "GIFT Autonomous College",
      location: "Bhubaneswar, Odisha",
      result: "CGPA : 8.95",
      description:
        "Currently pursuing B.Tech in Computer Science and Engineering with a strong focus on Full Stack Development, Java, and Backend Technologies.",
    },
    {
      year: "2021 - 2023",
      degree: "Higher Secondary Education (Science)",
      school: "Viswass Higher Secondary School",
      location: "Bhubaneswar, Odisha",
      result: "80.33%",
      description:
        "Completed Higher Secondary Education in the Science stream with Physics, Chemistry and Mathematics.",
    },
    {
      year: "2020",
      degree: "Secondary Education",
      school: "Sri Aurobindo Institute of Integral Education",
      location: "Bhubaneswar, Odisha",
      result: "88%",
      description:
        "Completed Secondary Education with excellent academic performance and developed a strong foundation in Mathematics and Science.",
    },
  ];

  return (
    <section id="education" className="section">
      <div className="relative z-10 max-w-7xl mx-auto">
        <Motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <p className="section-kicker">Academic path</p>
          <h2 className="mt-3 text-4xl font-extrabold theme-heading sm:text-5xl">
            My <span className="text-cyan-400">Education</span>
          </h2>

          <p className="theme-muted mt-5 max-w-2xl mx-auto">
            My academic journey that built the foundation of my technical career.
          </p>
        </Motion.div>

        <div className="relative mx-auto max-w-5xl">
          <div className="timeline-line absolute left-5 top-0 hidden h-full w-px md:left-1/2 md:block"></div>

          <div className="space-y-8">
          {educationData.map((item, index) => (
            <Motion.article
              key={index}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.55, delay: index * 0.06 }}
                className={`relative grid gap-5 md:grid-cols-2 ${
                  index % 2 === 0 ? "md:text-right" : "md:text-left"
                }`}
            >
                <span className="absolute left-1/2 top-7 hidden h-4 w-4 -translate-x-1/2 rounded-full border-4 border-cyan-400 bg-[var(--color-bg)] md:block" />
                <div className={`hidden md:block ${index % 2 === 0 ? "md:order-2" : "md:order-1"}`} />

                <Motion.div
                  whileHover={{ y: -6 }}
                  className={`glass-card relative p-6 sm:p-7 ${index % 2 === 0 ? "md:order-1" : "md:order-2"}`}
                >
                  <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                    <div className={index % 2 === 0 ? "md:order-2" : ""}>
                      <div className={`mb-4 flex items-center gap-3 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                        <span className="grid h-12 w-12 place-items-center rounded-2xl bg-cyan-400/10 text-cyan-400">
                          <GraduationCap size={25} />
                        </span>
                        <span className="mono rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-sm font-bold text-cyan-400">
                          {item.year}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold theme-heading sm:text-2xl">{item.degree}</h3>
                      <p className="mt-2 font-semibold text-cyan-400">{item.school}</p>
                      <p className={`theme-muted mt-2 flex items-center gap-2 text-sm ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                        <MapPin size={15} />
                        {item.location}
                      </p>
                    </div>
                  </div>

                  <span className="mt-5 inline-block rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm font-semibold text-emerald-300">
                    {item.result}
                  </span>

                  <p className="theme-text mt-5 leading-7">{item.description}</p>
                </Motion.div>
              </Motion.article>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
