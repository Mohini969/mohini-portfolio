import React from "react";
import { Link } from "react-router-dom";
import profileImg from "../../assets/mohini.png";
import { motion as Motion } from "framer-motion";
import { ArrowDown, Download, Mail, MapPin, Sparkles } from "lucide-react";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

const Hero = ({ onNavigate }) => {
  const socialLinks = [
    { label: "GitHub", href: "https://github.com/Mohini969", icon: <FaGithub /> },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/mohini-sahoo-64924933b",
      icon: <FaLinkedinIn />,
    },
    { label: "Instagram", href: "https://www.instagram.com/khu_si__khusi/", icon: <FaInstagram /> },
  ];

  // const highlights = [
  //   { value: "MERN", label: "Full-stack projects" },
  //   { value: "Java", label: "OOP & backend focus" },
  //   { value: "4+", label: "Hackathons" },
  // ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 22 },
    show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } },
  };

  return (
    <section
      id="about"
      className="relative flex min-h-screen items-center overflow-hidden px-5 pb-16 pt-28 sm:px-6 lg:px-20"
    >
      {/* <Motion.div
        aria-hidden="true"
        className="absolute left-1/2 top-24 h-80 w-[min(72rem,92vw)] -translate-x-1/2 rounded-[2rem] border border-cyan-400/10 bg-white/[.025] backdrop-blur-[1px]"
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      /> */}

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.06fr_.94fr]">
        <Motion.div variants={container} initial="hidden" animate="show">
          <Motion.div variants={item} className="eyebrow mb-6">
            <Sparkles size={16} />
            <span>Available for developer opportunities</span>
          </Motion.div>

          <Motion.p variants={item} className="theme-text mb-3 text-lg font-medium">
            Hello, I'm
          </Motion.p>

          <Motion.h1
            variants={item}
            className="text-balance text-5xl font-extrabold leading-[1.02] theme-heading sm:text-6xl lg:text-7xl"
          >
            Mohini <span className="text-cyan-400">Sahoo</span>
          </Motion.h1>

          <Motion.div
            variants={item}
            className="mt-5 min-h-[3rem] text-2xl font-bold theme-heading sm:text-3xl lg:text-4xl"
          >
            <span className="theme-muted">I build as a </span>
            <span className="text-cyan-400">
              <TypeAnimation sequence={["Full Stack Developer", 2000]} repeat={Infinity} />
            </span>
          </Motion.div>

          <Motion.p variants={item} className="theme-muted mt-7 max-w-2xl text-base leading-8 sm:text-lg">
            Passionate Full Stack Developer skilled in React, Node.js, Express,
            MongoDB and Java. I enjoy building modern, scalable and responsive
            web applications with clean UI and great user experience.
          </Motion.p>

          <Motion.div variants={item} className="mt-7 flex flex-wrap items-center gap-3 theme-text">
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/15 bg-cyan-400/10 px-4 py-2 text-sm">
              <MapPin size={16} className="text-cyan-400" />
              Bhubaneswar, Odisha
            </span>
            <a
              href="mailto:mohinisahoo395@gmail.com"
              className="inline-flex items-center gap-2 rounded-full border border-cyan-400/15 bg-cyan-400/10 px-4 py-2 text-sm transition hover:border-cyan-400 hover:text-cyan-400"
            >
              <Mail size={16} />
              mohinisahoo395@gmail.com
            </a>
          </Motion.div>

          <Motion.div variants={item} className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="/contact"
              onClick={(e) => {
                e.preventDefault();
                if (onNavigate) onNavigate("/contact");
              }}
              className="primary-btn"
            >
              Hire Me
              <ArrowDown size={18} />
            </a>

            <a
              href="/projects"
              onClick={(e) => {
                e.preventDefault();
                if (onNavigate) onNavigate("/projects");
              }}
              className="primary-btn"
            >
              Projects
              <ArrowDown size={18} />
            </a>

            {/* <a href="/Mohini-Sahoo-cv.pdf" download className="secondary-btn">
              <Download size={18} />
              Download CV
            </a> */}
          </Motion.div>

          <Motion.div variants={item} className="mt-8 flex items-center gap-4">
            {socialLinks.map((social) => (
              <Motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
                whileHover={{ y: -4, scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                className="grid h-12 w-12 place-items-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-xl text-cyan-400 transition hover:border-cyan-400 hover:shadow-[0_0_26px_rgba(34,211,238,.24)]"
              >
                {social.icon}
              </Motion.a>
            ))}
          </Motion.div>
        </Motion.div>

        <Motion.div
          initial={{ opacity: 0, x: 36 }}
          animate={{ opacity: 1, x: 0, y: [0, -8, 0] }}
          transition={{
            opacity: { duration: 0.75, delay: 0.18, ease: "easeOut" },
            x: { duration: 0.75, delay: 0.18, ease: "easeOut" },
            y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
          }}
          className="relative mx-auto w-full max-w-[22rem] sm:max-w-[24rem]"
        >
          {/* <div className="absolute -right-4 top-6 hidden rounded-2xl border border-emerald-400/20 bg-emerald-400/10 px-4 py-3 text-sm font-semibold text-[var(--color-accent-2)] backdrop-blur-xl sm:block">
            Clean UI + scalable code
          </div> */}
          {/* <div className="absolute -left-3 bottom-28 hidden rounded-2xl border border-amber-400/20 bg-amber-400/10 px-4 py-3 text-sm font-semibold text-[var(--color-accent-3)] backdrop-blur-xl sm:block">
            Recruiter-ready portfolio
          </div> */}

          <div className="relative overflow-hidden rounded-[2rem] border border-purple-500/30 bg-slate-950/40 p-3 shadow-[0_0_35px_rgba(168,85,247,0.25)] backdrop-blur-xl transition-all duration-500 hover:border-purple-400/60 hover:shadow-[0_0_50px_rgba(168,85,247,0.4)]">
            <div className="absolute inset-x-6 top-6 h-px bg-gradient-to-r from-transparent via-purple-400/60 to-transparent" />
            <img
              src={profileImg}
              alt="Mohini"
              loading="eager"
              className="aspect-[4/5] w-full rounded-[1.5rem] object-cover object-[center_22%] scale-[1.06] transition-transform duration-500 hover:scale-[1.08]"
            />
          </div>

          {/* <div className="mt-5 grid grid-cols-3 gap-3">
            {highlights.map((highlight) => (
              <Motion.div
                key={highlight.label}
                whileHover={{ y: -4 }}
                className="glass-card rounded-2xl p-4 text-center"
              >
                <p className="mono text-xl font-bold text-cyan-400">{highlight.value}</p>
                <p className="theme-muted mt-1 text-xs leading-5">{highlight.label}</p>
              </Motion.div>
            ))}
          </div> */}
        </Motion.div>
      </div>
    </section>
  );
};

export default Hero;
