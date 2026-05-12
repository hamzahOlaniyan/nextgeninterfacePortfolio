import { motion } from "framer-motion";

const Hero = () => {
   return (
      <section className="relative flex flex-col mx-auto">
         {/* Background image */}
         <div className="absolute inset-0">
            <img src="/hero.jpg" alt="" width={1920} height={1080} className="h-full w-full object-cover opacity-50" />
            <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
         </div>

         <div className="relative z-10 mx-auto text-center max-w-6xl mt-20">
            <motion.div
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ duration: 0.6 }}
               className="flex items-center justify-between text-xs uppercase tracking-[0.25em] text-muted-foreground mb-12 px-4 md:px-0"
            >
               <span>2026 — Portfolio</span>
               <span className="hidden sm:inline">Independent studio · Worldwide</span>
               <span>N°01</span>
            </motion.div>

            <div className="space-y-14">
               <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  className="lg:col-span-9 font- text-[12vw] sm:text-[12vw] lg:text-[7rem] leading-[0.95] tracking-tight text-foreground"
               >
                  Design,
                  <br className="md:hidden" />
                  <span className="italic text-muted-foreground">development</span>
                  <br />& everything in <span className="italic">between.</span>
               </motion.h1>

               <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                  className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
               >
                  <a
                     href="/projects"
                     className="bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:shadow-[0_0_30px_hsl(33_85%_50%/0.5)] hover:scale-105"
                  >
                     View Our Work
                  </a>
                  <a
                     href="#contact"
                     className="border border-border px-8 py-3.5 text-sm font-semibold text-foreground transition-all duration-300 hover:border-primary hover:text-primary"
                  >
                     Get In Touch
                  </a>
               </motion.div>
               <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.5 }}
                  className="flex justify-center items-center mt-12"
               >
                  <motion.div
                     animate={{ y: [0, 8, 0] }}
                     transition={{ duration: 2, repeat: Infinity }}
                     className="h-10 w-6 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-1.5"
                  >
                     <div className="h-2 w-1 rounded-full bg-primary" />
                  </motion.div>
               </motion.div>
               <div className="mx-auto px-4 md:px-0">
                  <motion.div
                     initial={{ opacity: 0, y: 10 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.6, delay: 0.5 }}
                     className="grid grid-cols-1 md:grid-cols-[1fr_2fr_1fr] gap-4 border-t border-b border-border py-8 "
                  >
                     <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground text-left">About</div>
                     <div className="space-y-3">
                        <p className="text-left text-base text-foreground leading-relaxed">
                           A small team of three full-stack developers and a designer building considered digital
                           products for ambitious brands.
                        </p>
                        <div className="text-left">
                           <a
                              href="#work"
                              className="text-sm text-foreground border-b border-foreground pb-0.5 hover:opacity-60 transition-opacity"
                           >
                              Selected work ↓
                           </a>
                        </div>
                     </div>
                     <a
                        href="/studio"
                        className="border border-border h-fit px-8 py-3.5 text-sm font-semibold text-foreground transition-all duration-300 hover:border-primary hover:text-primary"
                     >
                        Read more
                     </a>
                  </motion.div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default Hero;
