import { motion } from "framer-motion";

const Hero = () => {
   return (
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
         {/* Background image */}
         <div className="absolute inset-0">
            <img src="/hero.jpg" alt="" width={1920} height={1080} className="h-full w-full object-cover opacity-40" />
            <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
         </div>

         <div className="relative z-10 container mx-auto px-6 text-center">
            <motion.p
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6, delay: 0.2 }}
               className="mb-6 text-sm font-medium uppercase tracking-[0.3em] text-primary"
            >
               Design · Develop · Deliver
            </motion.p>

            <motion.h1
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, delay: 0.4 }}
               className="font-display text-5xl font-bold leading-tight tracking-tight text-foreground sm:text-6xl lg:text-8xl"
            >
               We build digital
               <br />
               <span className="gradient-text text-glow">experiences</span>
            </motion.h1>

            <motion.p
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6, delay: 0.7 }}
               className="mx-auto mt-8 max-w-xl text-lg text-muted-foreground"
            >
               A team of three full-stack developers and a designer crafting high-performance web applications that make
               an impact.
            </motion.p>

            <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6, delay: 0.9 }}
               className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
            >
               <a
                  href="#work"
                  className="rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:shadow-[0_0_30px_hsl(33_85%_50%/0.5)] hover:scale-105"
               >
                  View Our Work
               </a>
               <a
                  href="#contact"
                  className="rounded-full border border-border px-8 py-3.5 text-sm font-semibold text-foreground transition-all duration-300 hover:border-primary hover:text-primary"
               >
                  Get In Touch
               </a>
            </motion.div>
         </div>

         {/* Scroll indicator */}
         <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
         >
            <motion.div
               animate={{ y: [0, 8, 0] }}
               transition={{ duration: 2, repeat: Infinity }}
               className="h-10 w-6 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-1.5"
            >
               <div className="h-2 w-1 rounded-full bg-primary" />
            </motion.div>
         </motion.div>
      </section>
   );
};

export default Hero;
