import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { whatsapp } from "./Footer";

const navItems = [
   { label: "index", href: "/" },
   { label: "Projects", href: "/projects" },
   { label: "Studio", href: "/studio" },
   { label: "Contact", href: "#contact" },
];

const Navbar = () => {
   const [isOpen, setIsOpen] = useState(false);
   const navigate = useNavigate();
   const location = useLocation();

   const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      if (href.startsWith("/#")) {
         e.preventDefault();
         const targetId = href.split("#")[1];
         if (location.pathname !== "/") {
            navigate("/");
            setTimeout(() => {
               const element = document.getElementById(targetId);
               if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
               }
            }, 100);
         } else {
            const element = document.getElementById(targetId);
            if (element) {
               element.scrollIntoView({ behavior: "smooth" });
            }
         }
         setIsOpen(false);
      }
   };

   return (
      <motion.nav
         initial={{ y: -20, opacity: 0 }}
         animate={{ y: 0, opacity: 1 }}
         transition={{ duration: 0.6, ease: "easeOut" }}
         className="sticky top-0 left-0 right-0 z-50 glass-card"
      >
         <div className="mx-auto flex items-center justify-between max-w-6xl px-4 md:px-0 py-4">
            <div className="flex items-center gap-2">
               <img src="/logo.webp" alt="logo" className="w-5 object-contain" />
               <Link to="/" className="font-display text-xl font-bold tracking-tight text-foreground">
                  nextgen<span className="gradient-text"> interface</span>
               </Link>
            </div>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-10">
               {navItems.map((item, i) => (
                  <a
                     key={item.label}
                     href={item.href}
                     className="group flex items-center gap-2 text-sm text-foreground transition-opacity hover:opacity-60 capitalize"
                  >
                     <span className="text-[10px] tabular-nums text-muted-foreground">0{i + 1}</span>
                     {item.label}
                  </a>
               ))}
               <a
                  href={whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-foreground border-b !border-emerald-600 pb-0.5 hover:opacity-60 transition-opacity !text-emerald-600"
               >
                  WhatsApp ↗
               </a>
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
                     {navItems.map((item, i) => (
                        <a
                           key={item.label}
                           href={item.href}
                           onClick={(e) => handleNavClick(e, item.href)}
                           className="text-3xl transition-colors hover:text-primary flex items-start gap-2 capitalize "
                        >
                           <span className="text-sm tabular-nums text-muted-foreground">0{i + 1}</span>
                           {item.label}
                        </a>
                     ))}
                     <a
                        href={whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-2xl text-foreground pb-0.5 hover:opacity-60 transition-opacity !text-emerald-600"
                     >
                        WhatsApp ↗
                     </a>
                  </div>
               </motion.div>
            )}
         </AnimatePresence>
      </motion.nav>
   );
};

export default Navbar;
