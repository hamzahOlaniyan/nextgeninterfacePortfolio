"use client";
import React from "react";
import pic1 from "/public/ek93.png";
import pic2 from "/public/tp1.png";
import pic4 from "/public/jg2.png";
import Image from "next/image";
import { HiArrowLongRight } from "react-icons/hi2";
import { Label } from "./utils/Label";
import Link from "next/link";
import MediaQuery from "./utils/MediaQuery";
import { motion } from "motion/react";

export const ProjectSection = () => {
   const images = [pic1, pic2, pic4];

   return (
      <MediaQuery>
         <div className="relative my-12">
            <div className="w-full lg:grid grid-cols-2 gap-4 items-end">
               <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                     duration: 0.4,
                     delay: 0.4,
                     scale: { type: "tween", visualDuration: 0.4, bounce: 0.5 },
                  }}
                  className="w-full space-y-6"
               >
                  <Label text="curious of what we've created?" />
                  <h1 className=" text-[3.5rem] leading-[3.5rem] font-mitr uppercase font-black text-dirtyOrange ">
                     explore our projects
                  </h1>
               </motion.div>
               <div className="flex gap-6 items-center">
                  <Link
                     href="/portfolio"
                     className="text-white font-semibold text-lg hover:underline animate-pulse"
                  >
                     See Portfolio{" "}
                  </Link>
                  <HiArrowLongRight className="text-white" />
               </div>
            </div>

            <motion.div
               initial={{ opacity: 0, scale: 0.8, y: 60 }}
               whileInView={{ opacity: 1, scale: 1, y: 0 }}
               transition={{
                  duration: 0.4,
                  delay: 0.3,
                  scale: { type: "tween", visualDuration: 0.4, bounce: 0.5 },
               }}
               className="my-12 overflow-hidden"
            >
               <div className="h-80 flex gap-4 overflow-x-scroll">
                  {images.map((stack: any) => (
                     <Image
                        src={stack}
                        alt={stack}
                        className="object-center rounded-2xl lg:rounded-3xl object-cover h-full w-[80%] relative"
                        key={stack}
                        priority
                     />
                  ))}
               </div>
            </motion.div>
         </div>
      </MediaQuery>
   );
};
