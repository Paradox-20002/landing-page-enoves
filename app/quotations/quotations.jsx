"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

  // Get indices of 3 visible cards
  const getVisibleIndices = () => {
    const left = (currentIndex - 1 + quotations.length) % quotations.length;
    const center = currentIndex;
    const right = (currentIndex + 1) % quotations.length;
    return [left, center, right];
  };

  const visibleIndices = getVisibleIndices();
  const cardWidth = 300;
  const cardGap = 24;

  return (
    <section className="relative py-20 text-center text-foreground">
      <h2 className="text-4xl font-bold mb-12">Quotations</h2>

      <div className="relative flex items-center justify-center">
        {/* Previous Button */}
        <motion.button
          onClick={prev}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="absolute left-10 z-10 w-12 h-12 text-foreground border border-foreground rounded-full hover:bg-foreground/10 flex items-center justify-center"
        >
          <ChevronLeft size={20} />
        </motion.button>

        {/* Carousel viewport */}
        <div
          className="overflow-hidden relative flex justify-center"
          style={{ width: cardWidth * 3 + cardGap * 2 }}
        >
          <motion.div
            className="flex gap-6"
            key={currentIndex} // key changes on slide to animate
            initial={{ x: 0 }}
            animate={{ x: 0 }}
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
          >
            {visibleIndices.map((idx, pos) => {
              const q = quotations[idx];
              const scale = pos === 1 ? 1 : 0.85; // center bigger
              const opacity = pos === 1 ? 1 : 0.7;

              return (
                <motion.div
                  key={idx}
                  className="relative flex-shrink-0 w-[300px] h-[250px] py-4 px-6 flex flex-col justify-center items-center text-center"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale, opacity }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  transition={{ type: "spring", stiffness: 120, damping: 20 }}
                >
                  {/* Top line + comma icon + line */}
                  <div className="flex items-center justify-center mb-4 w-full">
                    <div className="h-[2px] bg-foreground flex-1"></div>
                    <Quote className="text-hero-span mx-2" />
                    <div className="h-[2px] bg-foreground flex-1"></div>
                  </div>

                  <p className="text-md mb-2">{q.review}</p>
                  <p className="font-semibold text-hero-span">{q.name}</p>
                  <p className="text-sm text-hero-span">{q.position}</p>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Fade overlays */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-background via-background/50 to-transparent"></div>
          <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-background via-background/50 to-transparent"></div>
        </div>

        {/* Next Button */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={next}
          className="absolute right-10 z-10 w-12 h-12 text-foreground border border-foreground rounded-full hover:bg-foreground/10 flex items-center justify-center"
        >
          <ChevronRight size={20} />
        </motion.button>
      </div>
    </section>
  );
}
