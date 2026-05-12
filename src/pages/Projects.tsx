import ProjectShowcase from "@/components/ProjectShowcase";
import { motion } from "framer-motion";
import React from "react";

export default function Projects() {
   return (
      <main className="pt-12 max-w-6xl mx-auto">
         <div className="grid md:grid-cols-12 pb-12">
            <div className="md:col-span-4 text-xs uppercase tracking-[0.25em] text-muted-foreground">
               Index — Projects
            </div>
            <motion.h1
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6 }}
               className="md:col-span-8 font-display text-5xl sm:text-6xl lg:text-8xl tracking-tight text-foreground"
            >
               All work,
               <br />
               <span className="italic text-muted-foreground">in one place.</span>
            </motion.h1>
         </div>
         <ProjectShowcase header={false} />
      </main>
   );
}
