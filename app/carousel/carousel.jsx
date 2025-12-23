"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const CARD_WIDTH = 80; // width of each logo
const CARD_HEIGHT = 20; // height of each logo
const CARD_MARGIN_X = 20; // horizontal margin (mx-10)

const TRACK_DURATION = 7; // seconds for one loop

export default function Carousel({ img1, img2, img3, img4, img5 }) {
  const logos = [img1, img2, img3, img4, img5].filter(Boolean); // remove undefined
  const duplicatedLogos = [...logos, ...logos, ...logos, ...logos]; // duplicate for seamless scroll

  // total width of one set of logos including margin
  const cardTotalWidth = CARD_WIDTH + CARD_MARGIN_X * 2; 
  const distance = cardTotalWidth * logos.length;

  return (
    <section className="w-full h-[20vh] overflow-x-hidden border-2 border-border my-2">
      <motion.div
        className="flex items-center h-full"
        animate={{ x: -distance }}
        transition={{
          duration: TRACK_DURATION,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
      >
        {duplicatedLogos.map((logo, index) => (
          <div
            key={index}
            className="flex-shrink-0 mx-10"
          >
            <Image
              src={`./${logo}.svg`} // adjust path as needed
              alt={`Logo ${index + 1}`}
              width={CARD_WIDTH}
              height={CARD_HEIGHT}
            />
          </div>
        ))}
      </motion.div>
    </section>
  );
}
