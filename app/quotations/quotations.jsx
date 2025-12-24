"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

export default function Quotations() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const quotations = [
    {
      review:
        "So we built a platform that empowers companies to transform raw data into real-time decisions using the power of AI",
      name: "John Doe",
      position: "CEO, Enoves",
    },
    {
      review:
        "So we built a platform that empowers companies to transform raw data into real-time decisions using the power of AI.",
      name: "Jane Doe",
      position: "CTO, Enoves",
    },
    {
      review:
        "We saw businesses drowning in data but struggling to make sense of it. Decisions were slow and insights were buried.",
      name: "John Doe",
      position: "CEO, Enoves",
    },
    {
      review:
        "So we built a platform that empowers companies to transform raw data into real-time decisions using the power of AI.",
      name: "Jane Doe",
      position: "CTO, Enoves",
    },
  ];

  const next = () => {
    setCurrentIndex((prev) => (prev < quotations.length - 1 ? prev + 1 : 0));
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : quotations.length - 1));
  };

  const getVisibleIndices = () => {
    const left = (currentIndex - 1 + quotations.length) % quotations.length;
    const center = currentIndex;
    const right = (currentIndex + 1) % quotations.length;
    return [left, center, right];
  };

  const visibleIndices = getVisibleIndices();

  return (
    <section className="relative py-12 sm:py-16 md:py-20 text-center text-foreground">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-8 sm:mb-10 md:mb-12">
        Quotations
      </h2>

      <div className="relative flex items-center justify-center">
        {/* Previous Button */}
        <motion.button
          onClick={prev}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="absolute left-2 sm:left-6 md:left-10 z-10 w-10 h-10 sm:w-12 sm:h-12 text-foreground border border-foreground rounded-full hover:bg-foreground/10 flex items-center justify-center"
        >
          <ChevronLeft size={18} className="sm:size-20" />
        </motion.button>

        {/* Carousel viewport */}
        <div className="overflow-hidden relative flex justify-center">
          <div className="flex gap-4 sm:gap-6 md:gap-6 lg:gap-6">
            {visibleIndices.map((idx, pos) => {
              const q = quotations[idx];
              const scale = pos === 1 ? 1 : 0.85; // center bigger
              const opacity = pos === 1 ? 1 : 0.7;

              return (
                <motion.div
                  key={idx}
                  className="relative flex-shrink-0 w-[220px] sm:w-[260px] md:w-[300px] lg:w-[320px] h-[200px] sm:h-[220px] md:h-[250px] lg:h-[270px] py-3 sm:py-4 px-4 sm:px-6 md:px-6 lg:px-8 flex flex-col justify-center items-center text-center bg-background rounded-2xl shadow-lg"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale, opacity }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  transition={{ type: "spring", stiffness: 120, damping: 20 }}
                >
                  <div className="flex items-center justify-center mb-3 sm:mb-4 w-full">
                    <div className="h-[1px] sm:h-[2px] bg-foreground flex-1"></div>
                    <Quote className="text-hero-span mx-2 sm:mx-3" />
                    <div className="h-[1px] sm:h-[2px] bg-foreground flex-1"></div>
                  </div>

                  <p className="text-sm sm:text-base md:text-base lg:text-lg mb-1 sm:mb-2 px-2">
                    {q.review}
                  </p>
                  <p className="font-semibold text-hero-span text-sm sm:text-base">
                    {q.name}
                  </p>
                  <p className="text-xs sm:text-sm text-hero-span">
                    {q.position}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Fade overlays */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-12 sm:w-16 bg-gradient-to-r from-background via-background/50 to-transparent"></div>
          <div className="pointer-events-none absolute right-0 top-0 h-full w-12 sm:w-16 bg-gradient-to-l from-background via-background/50 to-transparent"></div>
        </div>

        {/* Next Button */}
        <motion.button
          onClick={next}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="absolute right-2 sm:right-6 md:right-10 z-10 w-10 h-10 sm:w-12 sm:h-12 text-foreground border border-foreground rounded-full hover:bg-foreground/10 flex items-center justify-center"
        >
          <ChevronRight size={18} className="sm:size-20" />
        </motion.button>
      </div>
    </section>
  );
}
