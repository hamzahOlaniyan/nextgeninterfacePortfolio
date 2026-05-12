import { motion } from "framer-motion";
import { Mail, ArrowUpRight } from "lucide-react";

export const email = "nextgeninterface@gmail.com";
const Footer = () => {
   return (
      <footer id="contact" className="border-t border-border bg-card ">
         {/* CTA Section */}
         <div className="mx-auto py-24 lg:py-16 text-center max-w-6xl">
            <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground text-left">Get in touch</div>
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6 }}
               className=""
            >
               <div className="">
                  <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl tracking-tight text-foreground leading-[1]">
                     Have a project
                     <br />
                     in mind? <span className="italic text-muted-foreground gradient-text">Let's talk.</span>
                  </h2>

                  <p className="mx-auto max-w-md text-muted-foreground mt-8">
                     Whether it's a new product, a redesign, or a complex web app — we're ready to bring your vision to
                     life.
                  </p>

                  <div className="mt-12 grid sm:grid-cols-2 gap-8  mx-auto">
                     <a
                        href={"23r2323er23"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group block border-t border-border pt-4"
                     >
                        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">WhatsApp</p>
                        <p className="font-display text-2xl text-foreground group-hover:italic transition-all">
                           Message us ↗
                        </p>
                     </a>
                     <a href={`mailto:${email}`} className="group block border-t border-border pt-4">
                        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">Email</p>
                        <p className="font-display text-2xl text-foreground group-hover:italic transition-all break-all">
                           {email} ↗
                        </p>
                     </a>
                  </div>
               </div>
            </motion.div>
         </div>

         {/* Bottom bar */}
         <div className="border-t border-border">
            <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 px-6 py-6">
               <p className="text-sm text-muted-foreground">© 2026 NextGen Interface. All rights reserved.</p>
               <div className="flex gap-6">
                  {["Twitter", "LinkedIn", "GitHub"].map((s) => (
                     <a key={s} href="#" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                        {s}
                     </a>
                  ))}
               </div>
            </div>
         </div>
      </footer>
   );
};

export default Footer;
