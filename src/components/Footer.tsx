import { motion } from "framer-motion";
import { Mail, ArrowUpRight } from "lucide-react";

const Footer = () => {
   return (
      <footer id="contact" className="border-t border-border bg-card">
         {/* CTA Section */}
         <div className="container mx-auto px-6 py-24 lg:py-32 text-center">
            <motion.div
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.7 }}
            >
               <p className="text-sm font-medium uppercase tracking-[0.3em] text-primary mb-4">Ready to start?</p>
               <h2 className="font-display text-4xl font-bold text-foreground sm:text-5xl lg:text-6xl mb-6">
                  Let's build something
                  <br />
                  <span className="gradient-text">extraordinary</span>
               </h2>
               <p className="mx-auto max-w-md text-muted-foreground mb-10">
                  Whether it's a new product, a redesign, or a complex web app — we're ready to bring your vision to
                  life.
               </p>
               <a
                  href="mailto:hello@nextgeninterface.com"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:shadow-[0_0_30px_hsl(33_85%_44%/0.5)] hover:scale-105"
               >
                  <Mail size={18} />
                  hello@nextgeninterface.com
                  <ArrowUpRight size={16} />
               </a>
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
