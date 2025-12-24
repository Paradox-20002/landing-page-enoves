"use client";
import Image from "next/image";
import useTypingEffect from "../hooks/useTypingEffect";
import styles from "./hero-section.module.css";
import { motion } from "framer-motion";

export default function HeroSection() {
  const typedText = useTypingEffect("DECISIONS");

  const textVariant = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const imageVariant = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  return (
    <main id="home">
      <section className="flex flex-col-reverse md:flex-row items-center px-6 md:px-20 py-10 bg-hero-section bg-cover bg-center">
        {/* Text Content */}
        <motion.div
          className="w-full md:w-1/2 flex flex-col justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={textVariant}
        >
          <h1 className="text-4xl md:text-7xl font-bold my-4 lg:my-15 md:my-6">
            Transforming Data into{" "}
            <span className="inline-block bg-hero-span text-foreground rounded-2xl px-2 py-2">
              {typedText}
            </span>
          </h1>
          <p className="text-sm md:text-lg mb-6 md:mb-8">
            Leverage the power of machine learning and AI to unlock insights and
            drive business growth
          </p>
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className={`bg-hero-span p-3 rounded-lg mb-6 md:mb-8 ${styles.meet_btn}`}
          >
            Book a meeting
          </motion.button>

          {/* Avatars */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
            <div className="flex -space-x-2">
              <Image
                className="rounded-full"
                src="/image1.png"
                width={30}
                height={30}
                alt="avatar"
              />
              <Image
                className="rounded-full"
                src="/image2.png"
                width={30}
                height={30}
                alt="avatar2"
              />
              <Image
                className="rounded-full"
                src="/image3.png"
                width={30}
                height={30}
                alt="avatar3"
              />
            </div>
            <p className="text-sm md:text-base">
              Over <span className="font-bold">100+</span> Clients have worked
              with us
            </p>
          </div>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={imageVariant}
        >
          <Image
            className="[filter:drop-shadow(20px_10px_110px_theme(colors.foreground))]"
            src="./heroSection.svg"
            width={453}
            height={458}
            alt="robot"
          />
        </motion.div>
      </section>
    </main>
  );
}
