"use client";
import React from "react";
import MediaQuery from "./MediaQuery";
import Image from "next/image";
import { motion } from "motion/react";

export const ThemeBackground = ({
   children,
   heading,
   image,
}: {
   children?: React.ReactNode;
   heading: string | React.ReactNode;
   subheading?: string;
   image?: any;
}) => {
   return (
      <div className="h-[45vh] relative bg-themeColor flex items-center justify-center overflow-hidden">
         <MediaQuery>
            {image && (
               <motion.div
                  initial={{ opacity: 0, scale: 3, rotate: 90 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{
                     type: "spring",
                     duration: 0.5,
                     delay: 0.4,
                     ease: "easeIn",
                     bounce: 0.2,
                  }}
                  className="w-full h-full relative"
               >
                  <Image
                     src={image}
                     width={500}
                     height={500}
                     alt="img"
                     priority
                     className="absolute right-0 top-16 md:top-0 w-[20rem] h-[20rem] md:w-[30rem] md:h-[30rem] opacity-50 object-cover object-center rotate-[30deg]"
                  />
               </motion.div>
            )}
            <div className="flex flex-col items-center justify-center text-center text-white space-y-3 relative top-10">
               <div className="flex items-center gap-2 relative">
                  <motion.h1
                     initial={{ opacity: 0, scale: 1.5 }}
                     whileInView={{ opacity: 1, scale: 1 }}
                     transition={{
                        type: "tween",
                        duration: 0.5,
                        delay: 0.4,
                        ease: "easeIn",
                        bounce: 0.3,
                     }}
                     className="text-5xl lg:text-6xl font-bold  font-mitr uppercase"
                  >
                     {heading}
                  </motion.h1>
               </div>
               <div className="w-full md:w-3/4">{children && children}</div>
            </div>
         </MediaQuery>
      </div>
   );
};
