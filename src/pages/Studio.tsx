import { motion } from "framer-motion";
import React from "react";

export default function Studio() {
   const howWeWork = [
      {
         id: 1,
         title: "Considered craft",
         decription:
            "We sweat the small details — typography, spacing, motion — because they compound into something that feels right.",
      },
      {
         id: 2,
         title: "Honest collaboration",
         decription:
            "No account managers, no hand-offs. You work directly with the people designing and building your product.",
      },
      {
         id: 3,
         title: "Built to last",
         decription:
            "Clean code, thoughtful systems, documentation. Things you can hand to the next team without an apology.",
      },
   ];

   const team = [
      { id: 1, title: "Founder & Designer", list: ["Brand · Product · Direction"] },
      { id: 2, title: "Lead Developer", list: ["Web platforms · Performance"] },
      { id: 3, title: "Full-stack Developer", list: ["Interfaces · Integrations"] },
      { id: 4, title: "Full-stack Developer", list: ["Systems · Infrastructure"] },
   ];
   return (
      <section className="pt-12 pb-10 max-w-6xl mx-auto px-4 md:px-0 font-display">
         <div className="mx-auto">
            <motion.div
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ duration: 0.6 }}
               className="flex flex-col md:flex-row md:items-center justify-between text-xs uppercase tracking-[0.25em] text-muted-foreground mb-12"
            >
               <span>Index — About</span>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
               <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  className="lg:col-span-9 font-display text-[15vw] sm:text-[12vw] lg:text-[5rem] leading-[0.95] tracking-tight text-foreground"
               >
                  A small studio with a <span className="italic text-muted-foreground">long </span>
                  <span>attention span.</span>
               </motion.h1>
            </div>
         </div>

         <div className="mt-20 ">
            <motion.div
               initial={{ opacity: 0, y: 10 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6, delay: 0.5 }}
               className="grid grid-cols-1 md:grid-cols-[0.5fr_2fr] gap-8 border-t border-border pt-8"
            >
               <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">About the studio</div>
               <p className="text-base text-foreground leading-relaxed ">
                  Nextgen Interface is an independent design and development studio. We help ambitious teams shape
                  brands, websites and digital products that feel considered from the first glance to the last detail.
                  <br />
                  <br />
                  <p className="text-muted-foreground">
                     Founded by a designer and joined by three full-stack developers, we keep the team intentionally
                     small so the people you meet are the people doing the work.
                  </p>
               </p>
            </motion.div>
         </div>

         <div className="mt-20 ">
            <motion.div
               initial={{ opacity: 0, y: 10 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6, delay: 0.5 }}
               className="grid grid-cols-1 md:grid-cols-[0.5fr_2fr] gap-8 border-t border-border pt-8"
            >
               <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">How we work</div>

               <div className="">
                  <h1 className="text-6xl">
                     Three things
                     <br /> we <span className="text-muted-foreground italic">care about.</span>
                  </h1>

                  <div className="mt-12">
                     {howWeWork.map((points) => (
                        <div className="grid grid-cols-[.3fr_1fr_1fr] border-t border-border py-8">
                           <p className="text-muted-foreground text-sm">0{points.id}</p>
                           <h1 className="text-2xl">{points.title}</h1>
                           <p className="text-muted-foreground">{points.decription}</p>
                        </div>
                     ))}
                  </div>
               </div>
            </motion.div>
         </div>

         <div className="mt-20 ">
            <motion.div
               initial={{ opacity: 0, y: 10 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6, delay: 0.5 }}
               className="grid grid-cols-1 md:grid-cols-[0.5fr_2fr] gap-8 border-t border-border pt-8"
            >
               <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Team</div>

               <div className="">
                  <h1 className="text-6xl">
                     Four people.
                     <br />
                     <span className="text-muted-foreground italic">No middle layer.</span>
                  </h1>

                  <div className="mt-12">
                     {team.map((points) => (
                        <div className="grid grid-cols-[.3fr_1fr_1fr] border-t border-border py-6">
                           <p className="text-muted-foreground text-sm">0{points.id}</p>
                           <h1 className="text-2xl">{points.title}</h1>
                           <p className="text-muted-foreground text-right">{points.list}</p>
                        </div>
                     ))}
                  </div>
               </div>
            </motion.div>
         </div>
      </section>
   );
}
