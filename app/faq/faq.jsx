"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { faqContent } from "./content";

export default function Faq() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section>
      <motion.div className="text-center mb-10">
        <h2 className="text-4xl font-bold">FAQ</h2>
      </motion.div>
      <motion.div>
        {faqContent.map((faq, index) => {
          return (
            <motion.div key={faq.question}>
              <motion.div className="text-center">
                <p>{faq.question}</p>
                <motion.button
                  initial={{ rotate: 0 }}
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  whileHover={{ rotate: isOpen ? 180 : 0 }}
                  whileTap={{ rotate: isOpen ? 180 : 0 }}
                  onClick={() => setIsOpen(!isOpen)}
                >
                  {isOpen ? "-" : "+"}
                </motion.button>
              </motion.div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
