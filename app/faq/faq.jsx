"use client";
import { useState } from "react";
import { faqContent } from "./content";
import { motion, AnimatePresence } from "framer-motion";

export default function Faq() {
  const [isOpen, setIsOpen] = useState(null);

  const handleToggle = (index) => {
    setIsOpen(isOpen === index ? null : index);
  };

  return (
    <section className="py-20">
      <h2 className="text-center font-bold text-3xl sm:text-4xl md:text-4xl lg:text-5xl mb-12 text-foreground">
        FAQ
      </h2>

      {faqContent.map((faq, index) => (
        <motion.div key={index} className="mx-4 sm:mx-6 md:mx-20 lg:mx-40 mb-4">
          {/* Question Row */}
          <motion.div
            className={`flex flex-col w-full border border-navbar rounded-2xl px-4 sm:px-6 md:px-6 lg:px-8 py-4 sm:py-5 cursor-pointer`}
            onClick={() => handleToggle(index)}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex items-center justify-between">
              <span
                className={`rounded-2xl px-3 sm:px-4 py-1 sm:py-2 font-semibold text-sm sm:text-base md:text-base lg:text-base ${
                  isOpen === index
                    ? "bg-hero-span text-foreground"
                    : "bg-foreground text-hero-span"
                }`}
              >
                {index + 1}
              </span>
              <p
                className={`flex-1 mx-4 text-sm sm:text-base md:text-lg lg:text-lg font-medium ${
                  isOpen === index ? "text-hero-span" : "text-foreground"
                }`}
              >
                {faq.question}
              </p>
              <motion.button
                initial={{ rotate: 0 }}
                animate={{ rotate: isOpen === index ? 180 : 0 }}
                transition={{ duration: 0.25 }}
                className={`text-2xl font-bold ${
                  isOpen === index ? "text-hero-span" : "text-foreground"
                }`}
              >
                {isOpen === index ? "x" : "+"}
              </motion.button>
            </div>

            {/* Answer */}
            <AnimatePresence>
              {isOpen === index && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="pt-4 text-center text-foreground/80 leading-relaxed overflow-hidden text-sm sm:text-base md:text-base lg:text-base px-2 sm:px-6 md:px-6 lg:px-8"
                >
                  {faq.answer}
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      ))}
    </section>
  );
}
