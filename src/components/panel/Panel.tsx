"use client";
import React from "react";
import { services_provided } from "./servicesProvided";
import { HiArrowLongRight } from "react-icons/hi2";
import "../../app/globals.css";
import Link from "next/link";
import MediaQuery from "../utils/MediaQuery";
import { motion } from "motion/react";

const Panel = () => {
   return (
      <div className="h-full py-24">
         <MediaQuery>
            <div className="w-full flex flex-col-reverse md:grid grid-cols-[1fr_2fr] gap-6 items-end">
               <div className="flex gap-6 items-center">
                  <Link href="/services" className="font-semibold text-lg hover:underline">
                     See all services
                  </Link>
                  <HiArrowLongRight />
               </div>
               <div className="space-y-6">
                  <h1 className="text-2xl font-mitr uppercase font-black text-label italic">
                     * you know what?!
                  </h1>
                  <h1 className="text-[clamp(2rem,12vw,3rem)] leading-[2.2rem] lg:leading-[3.5rem] font-mitr uppercase font-black text-blue">
                     we design meaningful not just quick impressions
                  </h1>
               </div>
            </div>

            <div className="w-full flex flex-col sm:grid grid-cols-2 gap-6 my-20">
               {services_provided.map((item, idx) => (
                  <motion.div
                     initial={{ opacity: 0, scale: 0.95, y: 20 }}
                     whileInView={{ opacity: 1, scale: 1, y: 0 }}
                     transition={{
                        type: "spring",
                        duration: 0.5,
                        delay: 0.4,
                        ease: "easeIn",
                     }}
                     key={idx}
                     className="relative p-6 lg:p-12 rounded-3xl text-blue bg-panel1 first:bg-panel2 first:text-white last:text-white last:bg-panel2  overflow-hidden"
                  >
                     <div className="flex absolute top-0 right-5 lg:right-20">
                        <div className="w-[57px] h-[57px] bg-white rotate-[57deg] absolute right-3 -top-5 "></div>
                        <div className="flex relative">
                           <div className="absolute w-12 h-12 rounded-tl-3xl bg-panel1"></div>
                           <div className="w-12 h-12 bg-white"></div>
                        </div>
                     </div>
                     <div className="space-y-5">
                        <h2 className="text-4xl font-bold w-[80%]">{item.title}</h2>
                        <p className="font-medium">{item.description}</p>
                     </div>
                  </motion.div>
               ))}
            </div>
         </MediaQuery>
      </div>
   );
};

export default Panel;
