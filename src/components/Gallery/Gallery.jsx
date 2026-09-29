import React, { useState, useEffect, useCallback } from "react";
import { motion as Motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, X, Maximize2, Sparkles, Trophy } from "lucide-react";
import { HackathonGallery } from "../../constants/gallery";

const Gallery = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const shouldReduceMotion = useReducedMotion();

  const handleOpen = (index) => {
    setSelectedIndex(index);
    document.body.style.overflow = "hidden";
  };

  const handleClose = useCallback(() => {
    setSelectedIndex(null);
    document.body.style.overflow = "auto";
  }, []);

  const handlePrev = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev === 0 ? HackathonGallery.length - 1 : prev - 1));
  }, [selectedIndex]);

  const handleNext = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev === HackathonGallery.length - 1 ? 0 : prev + 1));
  }, [selectedIndex]);

  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        handleClose();
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      } else if (e.key === "ArrowRight") {
        handleNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, handleClose, handlePrev, handleNext]);

  const currentImage = selectedIndex !== null ? HackathonGallery[selectedIndex] : null;

  return (
    <section id="hackathon" className="section relative overflow-hidden">
      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}
        <Motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <div className="eyebrow mb-4 inline-flex items-center gap-2 border-purple-500/30 bg-purple-500/10 text-purple-300">
            <Trophy size={16} className="text-purple-400" />
            <span>Memories & Milestones</span>
          </div>

          <h2 className="text-4xl font-extrabold theme-heading sm:text-5xl">
            Hackathon <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Moments</span>
          </h2>

          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-purple-500 to-cyan-400" />

          <p className="theme-muted mt-5 text-lg leading-relaxed">
            Some of my favorite moments, memories, and experiences from hackathons.
          </p>
        </Motion.div>

        {/* Responsive Image Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {HackathonGallery.map((item, index) => (
            <Motion.article
              key={item.id}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: (index % 4) * 0.08 }}
              whileHover={shouldReduceMotion ? {} : { y: -6 }}
              className="group relative cursor-pointer overflow-hidden rounded-2xl border border-purple-500/20 bg-slate-900/60 shadow-[0_4px_20px_rgba(168,85,247,0.12)] backdrop-blur-md transition-all duration-300 hover:border-purple-400/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.35)]"
              onClick={() => handleOpen(index)}
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-950/80">
                <img
                  src={item.src}
                  alt={item.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />

                {/* Subtle Purple Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex flex-col justify-end p-5" />

                {/* Hover Content */}
                <div className="absolute inset-0 flex flex-col justify-between p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="flex justify-end">
                    <span className="grid h-9 w-9 place-items-center rounded-xl border border-purple-400/30 bg-purple-500/20 text-purple-300 backdrop-blur-md shadow-md">
                      <Maximize2 size={16} />
                    </span>
                  </div>

                  <div>
                    <span className="mono text-xs font-semibold uppercase tracking-wider text-purple-300">
                      {String(index + 1).padStart(2, "0")} / {HackathonGallery.length}
                    </span>
                    <h3 className="mt-1 text-lg font-bold text-white leading-snug">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </div>
            </Motion.article>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedIndex !== null && currentImage && (
          <Motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 p-4 sm:p-6 md:p-10 backdrop-blur-xl"
            onClick={handleClose}
          >
            {/* Modal Container */}
            <Motion.div
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.94, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.94, y: 12 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-3xl border border-purple-500/30 bg-slate-900/90 shadow-[0_0_60px_rgba(168,85,247,0.3)] backdrop-blur-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header Bar */}
              <div className="flex items-center justify-between border-b border-purple-500/20 px-6 py-4">
                <div className="flex items-center gap-3">
                  <span className="mono rounded-full border border-purple-400/30 bg-purple-500/15 px-3 py-1 text-xs font-bold text-purple-300">
                    {selectedIndex + 1} / {HackathonGallery.length}
                  </span>
                  <h4 className="text-base font-bold text-white sm:text-lg">
                    {currentImage.title}
                  </h4>
                </div>

                <button
                  onClick={handleClose}
                  className="grid h-10 w-10 place-items-center rounded-2xl border border-purple-400/30 bg-purple-500/10 text-purple-300 transition hover:border-purple-400 hover:bg-purple-500/20 hover:text-white"
                  aria-label="Close lightbox"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Image View */}
              <div className="relative flex flex-1 items-center justify-center overflow-hidden bg-slate-950/90 p-4 sm:p-6 min-h-[280px]">
                <img
                  src={currentImage.src}
                  alt={currentImage.title}
                  className="max-h-[60vh] w-auto max-w-full rounded-xl object-contain shadow-2xl"
                />

                {/* Left Arrow Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePrev();
                  }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 grid h-12 w-12 place-items-center rounded-2xl border border-purple-400/30 bg-slate-950/70 text-purple-200 backdrop-blur-md transition hover:scale-105 hover:border-purple-400 hover:bg-purple-500/30 hover:text-white"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={24} />
                </button>

                {/* Right Arrow Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNext();
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 grid h-12 w-12 place-items-center rounded-2xl border border-purple-400/30 bg-slate-950/70 text-purple-200 backdrop-blur-md transition hover:scale-105 hover:border-purple-400 hover:bg-purple-500/30 hover:text-white"
                  aria-label="Next image"
                >
                  <ChevronRight size={24} />
                </button>
              </div>

              {/* Description Footer */}
              <div className="border-t border-purple-500/20 bg-slate-900/80 px-6 py-4">
                <p className="theme-muted text-sm leading-relaxed">
                  {currentImage.description}
                </p>
              </div>
            </Motion.div>
          </Motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
