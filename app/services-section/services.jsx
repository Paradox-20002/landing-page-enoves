"use client";

import { motion } from "framer-motion";
import { services, services_title } from "./service-content";

export default function Services() {
  return (
    <div id="services" className="">
      {/* Services Section */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Services
            </h2>
            <p className="text-xl text-slate-400">
              Comprehensive solutions tailored to your needs
            </p>
          </motion.div>

          <ScrollTriggeredServices />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 text-center text-slate-400"></footer>
    </div>
  );
}

function ScrollTriggeredServices() {
  return (
    <div className="mx-auto max-w-6xl pb-24 flex flex-wrap gap-18 justify-center">
      {services.map((service, i) => (
        <ServiceCard key={service.title} service={service} index={i} />
      ))}
    </div>
  );
}

function ServiceCard({ service, index }) {
  const background = `linear-gradient(135deg, ${hue(service.hueA)}, ${hue(
    service.hueB
  )})`;

  return (
    <motion.div
      className="relative flex justify-center items-center pt-5 -mb-28 overflow-hidden"
      initial="offscreen"
      whileHover="onscreen"
      whileTap="onscreen"
      animate="rest"
      viewport={{ amount: 0.8 }}
    >
      {/* {services_title.map((services, id)=>(<div index={id} key={services.title}>{services.title}</div>))} */}
      {/* Gradient Splash Background */}
      <div
        className="absolute inset-0"
        style={{
          background,
          clipPath: `path("M 0 303.5 C 0 292.454 8.995 285.101 20 283.5 L 460 219.5 C 470.085 218.033 480 228.454 480 239.5 L 500 430 C 500 441.046 491.046 450 480 450 L 20 450 C 8.954 450 0 441.046 0 430 Z")`,
        }}
      />

      {/* Card Content */}
      <motion.div
        className="w-72 h-96 flex flex-col justify-center items-center rounded-2xl bg-white shadow-2xl relative z-10"
        style={{ transformOrigin: "10% 60%" }}
        variants={cardVariants}
      >
        <div className="text-7xl mb-4">{service.icon}</div>
        <h3 className="text-2xl font-bold text-slate-800 mb-3 px-6 text-center">
          {service.title}
        </h3>
        <p className="text-slate-600 text-center px-8 leading-relaxed">
          {service.description}
        </p>
      </motion.div>
    </motion.div>
  );
}

const cardVariants = {
  offscreen: {
    y: 300,
    opacity: 0,
  },
  onscreen: {
    y: 50,
    rotate: -10,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const hue = (h) => `hsl(${h}, 100%, 50%)`;
