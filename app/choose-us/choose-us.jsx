"use client";
import { motion } from "framer-motion";
import { Lightbulb, Users, Award, ShieldCheck } from "lucide-react";
import { Hind_Madurai } from "next/font/google";

export default function ChooseUs() {
  const content = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "Pushing boundaries in AI, blockchain, and quantitative trading to deliver cutting-edge solutions.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description:
        "Working closely with clients to develop tailored solutions that drive measurable success.",
    },
    {
      icon: Award,
      title: "Quality",
      description:
        "Maintaining the highest standards in code quality, system performance, and client outcomes.",
    },
    {
      icon: ShieldCheck,
      title: "Integrity",
      description:
        "Operating with transparency and ethical considerations at the forefront of all decisions.",
    },
  ];

  return (
    <section className="py-20">
      <div className="text-center mb-12">
        <motion.h2
          className="text-4xl font-bold"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          Why Choose Us
        </motion.h2>
      </div>

      <motion.div
        className="flex ml-15 flex-wrap justify-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="show" // only parent
        viewport={{ once: false, amount: 0.3 }}
      >
        {content.map((item) => {
          const Icon = item.icon;
          return (
            <motion.div
              drag
              // dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
              // dragElastic={0.2}
              key={item.title}
              variants={itemVariants} // children just listen to parent
              className="w-80 h-80 -ml-10 flex flex-col items-center justify-center text-center bg-contact-us-hover border-background border-9 rounded-full p-9"
            >
              <Icon size={46} className="mb-3 bg-background rounded-full p-2" />
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.25, // delay between items
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: -30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};
