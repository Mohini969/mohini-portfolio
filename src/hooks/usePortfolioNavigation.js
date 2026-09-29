import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const pathToSectionId = {
  "/": "about",
  "/about": "about",
  "/skills": "skills",
  "/projects": "projects",
  "/hackathon": "hackathon",
  "/education": "education",
  "/experience": "experience",
  "/work": "experience",
  "/contact": "contact",
};

export const sectionIdToPath = {
  about: "/about",
  skills: "/skills",
  projects: "/projects",
  hackathon: "/hackathon",
  education: "/education",
  experience: "/experience",
  contact: "/contact",
};

export function usePortfolioNavigation() {
  const navigate = useNavigate();
  const location = useLocation();
  const [activePath, setActivePath] = useState(location.pathname);
  const isProgrammaticScroll = useRef(false);
  const scrollTimeout = useRef(null);

  // Smoothly navigate and scroll to a section
  const scrollToSection = (path, replace = false) => {
    const targetPath = path === "/" ? "/about" : path;
    const sectionId = pathToSectionId[targetPath] || "about";
    const element = document.getElementById(sectionId);

    if (element) {
      isProgrammaticScroll.current = true;
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);

      element.scrollIntoView({ behavior: "smooth" });
      setActivePath(targetPath);

      if (replace) {
        navigate(targetPath, { replace: true });
      } else if (location.pathname !== targetPath) {
        navigate(targetPath);
      }

      scrollTimeout.current = setTimeout(() => {
        isProgrammaticScroll.current = false;
      }, 900);
    }
  };

  // ScrollSpy to sync URL and active navbar state while manually scrolling
  useEffect(() => {
    const sectionIds = ["about", "skills", "projects", "hackathon", "education", "experience", "contact"];
    const sections = sectionIds.map((id) => document.getElementById(id)).filter(Boolean);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (isProgrammaticScroll.current) return;

        const visibleEntries = entries.filter((entry) => entry.isIntersecting);
        if (visibleEntries.length === 0) return;

        // Sort by visible ratio to find the primary visible section
        visibleEntries.sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        const topEntry = visibleEntries[0];

        if (topEntry && topEntry.target.id) {
          const newPath = sectionIdToPath[topEntry.target.id];
          if (newPath) {
            setActivePath(newPath);
            if (window.location.pathname !== newPath && !(window.location.pathname === "/" && newPath === "/about")) {
              window.history.replaceState(null, "", newPath);
            }
          }
        }
      },
      {
        rootMargin: "-20% 0px -40% 0px",
        threshold: [0.15, 0.35, 0.6],
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // Handle direct URL access and browser Back/Forward button history
  useEffect(() => {
    const targetPath = location.pathname === "/" ? "/about" : location.pathname;
    setActivePath(targetPath);

    if (!isProgrammaticScroll.current) {
      const sectionId = pathToSectionId[targetPath] || "about";

      const scrollTimer = setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          isProgrammaticScroll.current = true;
          if (scrollTimeout.current) clearTimeout(scrollTimeout.current);

          element.scrollIntoView({ behavior: "smooth" });

          scrollTimeout.current = setTimeout(() => {
            isProgrammaticScroll.current = false;
          }, 900);
        }
      }, 60);

      return () => clearTimeout(scrollTimer);
    }
  }, [location.pathname]);

  return { activePath, scrollToSection };
}
