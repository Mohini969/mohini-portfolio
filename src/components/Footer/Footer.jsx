import React from "react";
import { motion as Motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = ({ onNavigate }) => {
  const socialLinks = [
    {
      icon: <FaGithub />,
      link: "https://github.com/Mohini969",
    },
    {
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/mohini-sahoo-64924933b",
    },
    {
      icon: <FaInstagram />,
      link: "https://www.instagram.com/khu_si__khusi/",
    },
  ];

  const scrollTop = () => {
    if (onNavigate) {
      onNavigate("/about");
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="relative theme-footer overflow-hidden border-t border-cyan-400/15">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/70 to-transparent"></div>

      <Motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
        className="relative z-10 mx-auto grid max-w-7xl gap-6 px-6 py-10 md:grid-cols-[1fr_auto_1fr] md:items-center lg:px-10"
      >
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-bold theme-heading">
            Mohini <span className="text-cyan-400">Sahoo</span>
          </h2>

          <p className="theme-muted mt-2">
            Full Stack Developer | AI/ML Enthusiast
          </p>
        </div>

        <div className="text-center">
          <p className="text-slate-400 text-sm font-medium">
            © {new Date().getFullYear()} Mohini Sahoo. All Rights Reserved.
          </p>
        </div>

        <div className="flex items-center justify-center gap-3 md:justify-end">
          {socialLinks.map((item, index) => (
            <Motion.a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -4, scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="w-11 h-11 rounded-2xl theme-tile border flex items-center justify-center text-cyan-400 text-xl transition-all duration-300 hover:border-cyan-400"
            >
              {item.icon}
            </Motion.a>
          ))}
          <button
            onClick={scrollTop}
            className="grid h-11 w-11 place-items-center rounded-2xl border border-cyan-400/30 bg-cyan-400/10 text-cyan-400 transition hover:-translate-y-1 hover:border-cyan-400"
            aria-label="Back to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </Motion.div>
    </footer>
  );
};

export default Footer;
