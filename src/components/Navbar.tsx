import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
   { label: "Work", href: "#work" },
   { label: "About", href: "#about" },
   { label: "Contact", href: "#contact" },
];

const Navbar = () => {
   const [isOpen, setIsOpen] = useState(false);

   return (
      <motion.nav
         initial={{ y: -20, opacity: 0 }}
         animate={{ y: 0, opacity: 1 }}
         transition={{ duration: 0.6, ease: "easeOut" }}
         className="fixed top-0 left-0 right-0 z-50 glass-card"
      >
         <div className="container mx-auto flex items-center justify-between px-6 py-4">
            <div className="flex items-center gap-2">
               <img src="/logo.webp" alt="logo" className="w-5 object-contain" />

               <a href="#" className="font-display text-xl font-bold tracking-tight text-foreground">
                  nextgen<span className="gradient-text"> interface</span>
               </a>
            </div>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-8">
               {navItems.map((item) => (
                  <a
                     key={item.label}
                     href={item.href}
                     className="text-sm font-medium text-muted-foreground transition-colors duration-300 hover:text-foreground"
                  >
                     {item.label}
                  </a>
               ))}
               {/* <a
                  href="#contact"
                  className="rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:shadow-[0_0_20px_hsl(175_85%_50%/0.4)]"
               >
                  Let's Talk
               </a> */}
            </div>

            {/* Mobile toggle */}
            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-foreground" aria-label="Toggle menu">
               {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
         </div>

         {/* Mobile menu */}
         <AnimatePresence>
            {isOpen && (
               <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="md:hidden overflow-hidden border-t border-border"
               >
                  <div className="flex flex-col gap-4 px-6 py-6">
                     {navItems.map((item) => (
                        <a
                           key={item.label}
                           href={item.href}
                           onClick={() => setIsOpen(false)}
                           className="text-lg font-medium text-muted-foreground transition-colors hover:text-primary"
                        >
                           {item.label}
                        </a>
                     ))}
                     <a
                        href="#contact"
                        onClick={() => setIsOpen(false)}
                        className="mt-2 rounded-full bg-primary px-5 py-2.5 text-center text-sm font-semibold text-primary-foreground"
                     >
                        Let's Talk
                     </a>
                  </div>
               </motion.div>
            )}
         </AnimatePresence>
      </motion.nav>
   );
};

export default Navbar;
