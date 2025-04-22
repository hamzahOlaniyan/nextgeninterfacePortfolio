"use client";
import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import Button from "./utils/Button";
import ParticlesComponent from "@/lib/particles/Particles";
import laptop from "/public/computer.png";
import logo from "/public/nextgen_logo_color.svg";
import rec from "/public/9594682.png";
import black from "/public/black.png";
import "../app/globals.css";
import Image from "next/image";
import MediaQuery from "./utils/MediaQuery";
import { motion } from "motion/react";

const Hero = () => {
   return (
      <MediaQuery>
         <div className="h-[105vh] w-full relative flex items-center justify-center z-30">
            <div className="relative w-full flex flex-col items-center justify-center pt-32 lg:pt-14">
               <div className="text-[clamp(1rem,11vw,17rem)] text-white font-mitr font-black uppercase w-full leading-[50px] md:leading-[70px] lg:leading-[130px]">
                  <div className="md:hidden text-center text-[3.5rem] sm:text-[5rem] relative sm:leading-[70px]">
                     {/* <Image
                        src={rec}
                        alt="mac"
                        width={1000}
                        height={1000}
                        priority
                        className="h-40 w-40 object-center object-contain block absolute left-0 top-0 -z-10"
                     /> */}
                     <motion.h1
                        initial={{ opacity: 0, scale: 0.95, x: -40 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{
                           type: "spring",
                           duration: 1,
                           ease: "easeIn",
                           bounce: "0.5",
                        }}
                        className="text-secondary"
                     >
                        we craft
                     </motion.h1>
                     <motion.h1
                        initial={{ opacity: 0, scale: 0.95, x: -40 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{
                           type: "spring",
                           duration: 1,
                           ease: "easeIn",
                           bounce: "0.5",
                        }}
                     >
                        the
                     </motion.h1>
                     <motion.h1
                        initial={{ opacity: 0, scale: 0.85, y: 40, x: -50 }}
                        animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
                        transition={{
                           type: "spring",
                           duration: 0.5,
                           delay: 0.2,
                           ease: "easeOut",
                           visualDuration: 0.3,
                           bounce: 0.3,
                        }}
                        className="text-secondary"
                     >
                        digital
                     </motion.h1>
                     <motion.h1
                        initial={{ opacity: 0, scale: 0.85, y: 40, x: -50 }}
                        animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
                        transition={{
                           type: "spring",
                           duration: 0.5,
                           delay: 0.2,
                           ease: "easeOut",
                           visualDuration: 0.3,
                           bounce: 0.3,
                        }}
                     >
                        experience
                     </motion.h1>
                     {/* <Image
                        src={black}
                        alt="mac"
                        width={1000}
                        height={1000}
                        priority
                        className="h-40 w-40 object-center object-contain block absolute right-0 top-0 -z-10"
                     /> */}
                  </div>

                  <div className="hidden md:block">
                     <div className="flex gap-4 lg:gap-12 justify-between items-center">
                        <motion.span
                           initial={{ opacity: 0, scale: 0.95, x: -40 }}
                           animate={{ opacity: 1, scale: 1, x: 0 }}
                           transition={{
                              type: "spring",
                              duration: 1,
                              ease: "easeIn",
                              bounce: "0.5",
                           }}
                        >
                           we
                        </motion.span>
                        <motion.span
                           initial={{ opacity: 0, scale: 0.95, y: -40 }}
                           animate={{ opacity: 1, scale: 1, y: 0 }}
                           transition={{
                              type: "spring",
                              duration: 0.6,
                              ease: "easeIn",
                              visualDuration: 0.4,
                              bounce: "0.3",
                           }}
                           className="text-secondary"
                        >
                           Craft
                        </motion.span>
                        <motion.div
                           initial={{ opacity: 0, scale: 0.95, x: 40, rotate: 45 }}
                           animate={{ opacity: 1, scale: 1, x: 0, rotate: 0 }}
                           transition={{
                              type: "spring",
                              duration: 2,
                              ease: "easeIn",
                              bounce: "0.6",
                           }}
                           className="w-full"
                        >
                           <Image
                              src={rec}
                              alt="mac"
                              width={100}
                              height={100}
                              className="w-full h-8 sm:h-12 md:h-16 lg:h-[5.5rem] object-center object-cover block relative bg-dirtyOrange rounded-full"
                           />
                        </motion.div>
                     </div>
                     <div className="flex gap-4 justify-between items-center ">
                        <motion.div
                           initial={{ opacity: 0, scale: 2, rotate: 45 }}
                           animate={{ opacity: 1, scale: 1, rotate: 0 }}
                           transition={{
                              type: "spring",
                              duration: 1.5,
                              delay: 0.1,
                              ease: "easeIn",
                              bounce: "0.5",
                           }}
                           className="w-full h-full"
                        >
                           <Image
                              src={laptop}
                              alt="mac"
                              width={100}
                              height={100}
                              className="w-[clamp(1rem,10vw,10rem)] h-[clamp(1rem,10vw,10rem)] object-center object-contain block relative"
                           />
                        </motion.div>
                        <motion.span
                           initial={{ opacity: 0 }}
                           animate={{ opacity: 1 }}
                           transition={{
                              type: "tween",
                              duration: 0.9,
                              delay: 0.1,
                              ease: "easeIn",
                              visualDuration: 0.4,
                              bounce: "0.5",
                           }}
                        >
                           the
                        </motion.span>

                        <motion.div
                           initial={{ opacity: 0, scale: 2 }}
                           animate={{ opacity: 1, scale: 1 }}
                           transition={{
                              type: "spring",
                              duration: 3,
                              ease: "easeOut",
                              visualDuration: 0.4,
                              bounce: "0.6",
                           }}
                           className="w-full h-full"
                        >
                           <Image
                              src={logo}
                              alt="mac"
                              width={100}
                              height={100}
                              className="w-[clamp(1rem,8vw,7rem)] mx-auto h-[clamp(1rem,8vw,7rem)] object-center object-contain block relative"
                           />
                        </motion.div>

                        <motion.span
                           initial={{ opacity: 0, scale: 0.85, x: 40 }}
                           animate={{ opacity: 1, scale: 1, x: 0 }}
                           transition={{
                              type: "spring",
                              duration: 0.8,
                              delay: 0.2,
                              ease: "easeIn",
                              visualDuration: 0.4,
                              bounce: "0.3",
                           }}
                           className="text-secondary"
                        >
                           Digital
                        </motion.span>
                     </div>

                     <div className="flex gap-4 items-center">
                        <motion.span
                           initial={{ opacity: 0, scale: 0.85, y: 40, x: -50 }}
                           animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
                           transition={{
                              type: "spring",
                              duration: 0.5,
                              delay: 0.2,
                              ease: "easeOut",
                              visualDuration: 0.3,
                              bounce: 0.3,
                           }}
                           className="text-secondary"
                        >
                           experience
                        </motion.span>

                        <motion.div
                           initial={{ opacity: 0, scale: 0.85, x: 100 }}
                           animate={{ opacity: 1, scale: 1, x: 0 }}
                           transition={{
                              type: "spring",
                              duration: 0.6,
                              delay: 0.3,
                              ease: "easeOut",
                              visualDuration: 0.4,
                              bounce: 0.4,
                           }}
                           className="w-full"
                        >
                           <Image
                              src={black}
                              alt="mac"
                              width={100}
                              height={100}
                              className="w-[clamp(1rem,10vw,7rem)] h-[clamp(1rem,10vw,7rem)] object-center object-contain block relative"
                           />
                        </motion.div>
                     </div>
                  </div>
               </div>

               <div className="flex flex-col lg:grid grid-cols-[.5fr_2fr] mt-14 gap-12 lg:items-center">
                  <div>
                     <Button
                        title="start project"
                        link="/contact"
                        icon={<IoIosArrowRoundForward className="text-xl" />}
                        varient="white"
                     />
                  </div>

                  <div className="space-y-1">
                     <h1 className="text-white text-3xl font-semibold tracking-tight font-mitr">
                        Transforming Ideas into Digital Masterpieces
                     </h1>
                     <p className="text-white font-light w-6/7">
                        Web & Mobile Developer and Designer dedicated to bringing your ideas to
                        life. With a keen eye for design and a knack for coding, creating stunning
                        websites and graphics that not only look good but also perform
                        exceptionally.
                     </p>
                  </div>
               </div>
            </div>
            <ParticlesComponent className="-z-[200] h-[20vh]" />
         </div>
      </MediaQuery>
   );
};

export default Hero;
