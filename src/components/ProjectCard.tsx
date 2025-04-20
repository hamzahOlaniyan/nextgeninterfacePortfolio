"use client";
import React, { Suspense } from "react";
import Link from "next/link";
import { LoadingPlaceholder } from "./utils/LoadingPlaceholder";
import { motion } from "motion/react";

const ProjectCard = ({ project }: { project: any }) => {
   const { name, image, type } = project;
   const renameUrl = name?.split(" ").join("");
   const ImageWithSuspense = React.lazy(() =>
      import("next/image").then((module) => ({ default: module.default }))
   );

   return (
      <Link href={`/portfolio/${renameUrl}`} className="group w-full relative cursor-pointer">
         <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
               duration: 0.4,
               scale: { type: "tween" },
               ease: "easeIn",
            }}
            className=""
         >
            <div className="w-full h-60 relative">
               <Suspense fallback={<LoadingPlaceholder />}>
                  <div className="w-full h-full absolute top-0 left-0 z-10 rounded-lg hover:bg-secondary/60 hover:opacity-40 duration-400"></div>
                  <ImageWithSuspense
                     src={image[0]}
                     alt={`Image ${name}`}
                     fill={true}
                     className="w-full h-full object-cover object-center bg-white rounded-t-lg shadow-sm shadow-black/20"
                  />
               </Suspense>
            </div>
            <div className="bg-secondary/15 rounded-b-lg p-2">
               <h1 className="text-lg font-medium text-white capitalize text-center">{name}</h1>
            </div>
         </motion.div>
      </Link>
   );
};

export default ProjectCard;
