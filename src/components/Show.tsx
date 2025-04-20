"use client";
import React from "react";
import Button from "./utils/Button";
import { Label } from "./utils/Label";
import MediaQuery from "./utils/MediaQuery";
import { motion } from "motion/react";

export const Show = () => {
   return (
      <div className="bg-secondary/10 py-14">
         <MediaQuery>
            <div className="w-full flex flex-col md:flex-row items-end justify-between gap-4 lg:gap-0">
               <div className="w-full space-y-4 lg:w-2/3">
                  <Label text="let us show you" />
                  <h1 className="text-[clamp(1rem,10vw,3rem)] leading-[3rem] font-mitr uppercase font-black text-white">
                     how <span className="text-secondary"> we drive</span> your brand{" "}
                     <span className="text-secondary">to new height</span>
                  </h1>
               </div>
               <div className="h-full lg:w-1/2 space-y-2 flex flex-col sjustify-end items-end relative">
                  <p className="text-white text-right mb-2">
                     We transform innovative ideas into capitivating and memoriable digital
                     experience that engage and inspire
                  </p>
                  <motion.div
                     initial={{ opacity: 0, scale: 0.95, y: 20 }}
                     whileInView={{ opacity: 1, scale: 1, y: 0 }}
                     transition={{
                        type: "spring",
                        duration: 1,
                        delay: 0.4,
                        ease: "easeIn",
                        bounce: "0.5",
                     }}
                     className="mx-auto md:mx-0"
                  >
                     <Button link="/services" title="explore services" />
                  </motion.div>
               </div>
            </div>
         </MediaQuery>
      </div>
   );
};
