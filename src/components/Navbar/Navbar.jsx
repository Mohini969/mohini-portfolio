import React, { useState, useEffect } from "react";
import { AnimatePresence, motion as Motion } from "framer-motion";
import { Download, Menu, X } from "lucide-react";
import ThemeToggle from "../ThemeToggle/ThemeToggle";

const menuItems = [
  { path: "/about", label: "About" },
  { path: "/skills", label: "Skills" },
  { path: "/projects", label: "Projects" },
  { path: "/hackathon", label: "Hackathon" },
  { path: "/education", label: "Education" },
  { path: "/experience", label: "Experience" },
  { path: "/contact", label: "Contact" },
];

const Navbar = ({ activePath, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isItemActive = (itemPath) => {
    if ((activePath === "/" || !activePath) && itemPath === "/about") return true;
    if ((activePath === "/work") && itemPath === "/experience") return true;
    return activePath === itemPath;
  };

  const handleNavClick = (e, path) => {
    e.preventDefault();
    setIsOpen(false);
    if (onNavigate) {
      onNavigate(path);
    }
  };

  return (
    <Motion.nav
      initial={{ y: -22, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "theme-nav-scrolled shadow-[0_12px_35px_rgba(0,0,0,.08)]" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 h-20 flex items-center justify-between">
        <a
          href="/about"
          onClick={(e) => handleNavClick(e, "/about")}
          className="group flex items-center gap-2 text-left theme-heading"
          aria-label="Go to home"
        >
          <span className="mono grid h-10 w-10 place-items-center rounded-2xl border border-cyan-400/30 bg-cyan-400/10 text-cyan-400 transition group-hover:scale-105">
            MS
          </span>
          <span className="hidden sm:block">
            <span className="block text-sm font-bold leading-none">Mohini Sahoo</span>
            <span className="mono text-[11px] text-cyan-400">Full Stack Developer</span>
          </span>
        </a>

        <ul className="hidden lg:flex items-center gap-2 rounded-full border border-cyan-400/10 bg-white/[.03] p-1 theme-text backdrop-blur-xl">
          {menuItems.map((item) => {
            const active = isItemActive(item.path);
            return (
              <li key={item.path}>
                <a
                  href={item.path}
                  onClick={(e) => handleNavClick(e, item.path)}
                  className={`relative rounded-full px-4 py-2 text-sm font-semibold transition ${
                    active ? "text-slate-950" : "hover:text-cyan-400"
                  }`}
                >
                  {active && (
                    <Motion.span
                      layoutId="active-nav"
                      className="absolute inset-0 rounded-full bg-cyan-400"
                      transition={{ type: "spring", stiffness: 420, damping: 34 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </a>
              </li>
            );
          })}
        </ul>

        <div className="hidden lg:flex items-center gap-4">
          <ThemeToggle />

          <a
            href="/Mohini-Sahoo-CV.pdf"
            download="Mohini-Sahoo-CV.pdf"
            className="primary-btn !px-5 !py-2.5 text-sm"
          >
            <Download size={17} />
            CV
          </a>
        </div>

        <button
          className="lg:hidden grid h-11 w-11 place-items-center rounded-2xl border border-cyan-400/30 bg-cyan-400/10 text-cyan-400 transition hover:scale-105"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <Motion.div
            initial={{ opacity: 0, y: -14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.22 }}
            className="lg:hidden theme-mobile-nav"
          >
            <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-5">
              {menuItems.map((item) => {
                const active = isItemActive(item.path);
                return (
                  <a
                    key={item.path}
                    href={item.path}
                    onClick={(e) => handleNavClick(e, item.path)}
                    className={`rounded-2xl px-4 py-3 text-left font-semibold transition ${
                      active
                        ? "bg-cyan-400 text-slate-950"
                        : "theme-text hover:bg-cyan-400/10 hover:text-cyan-400"
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}

              <div className="mt-3 flex items-center justify-between gap-4 border-t border-cyan-400/10 pt-4">
                <ThemeToggle />

                <a
                  href="/Mohini-Sahoo-CV.pdf"
                  download="Mohini-Sahoo-CV.pdf"
                  className="primary-btn !px-5 !py-2.5 text-sm"
                >
                  <Download size={17} />
                  Download CV
                </a>
              </div>
            </div>
          </Motion.div>
        )}
      </AnimatePresence>
    </Motion.nav>
  );
};

export default Navbar;
