"use client";
import Image from "next/image";
import  useTypingEffect  from "../hooks/useTypingEffect";
import styles from "./hero-section.module.css";
import { motion } from "framer-motion";
export default function HeroSection(){
    const typedText = useTypingEffect("DECISIONS");
    return(

        <main >
            <section className="flex flex-1 justify-around items-center px-20 py-10 bg-hero-section bg-cover bg-center ">
                <div className="w-[50vw]">
                    <h1 className="text-7xl font-bold">Transforming Data into <span className={`my-4 px-2 py-2 inline-block bg-hero-span rounded-2xl text-foreground`}>{typedText}</span></h1>
                    <p>leverage the power of machine learning and AI to unlock insights and drive business growth</p>
                    <motion.button
                     initial={{ scale: 0 }} 
                     animate={{ scale: 1 }}
                     whileHover={{ scale: 1.1 }}
                     whileTap={{ scale: 0.95 }} 
                     className={`bg-hero-span p-3 rounded-lg my-3 ${styles.meet_btn}`}>Book a meeting</motion.button>
                    <div className="flex space-x-4 mt-4">
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
                        <p>Over <span className="font-bold">100+ </span> Clients have worked with us</p>
                    </div>
                </div>
                <div className=" items-center">
                    <Image
                        className="[filter:drop-shadow(20px_10px_110px_theme(colors.foreground))]"
                        src="./heroSection.svg"
                        width={453}
                        height={458}
                        alt="robot"
                    />


                </div>
            </section>
        </main>
    )

}