import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { type ProjectCategory, projects } from "@/data/projects";

type Filter = "all" | ProjectCategory;

const filters: { label: string; value: Filter }[] = [
   { label: "All Projects", value: "all" },
   { label: "Development", value: "development" },
   { label: "Design", value: "design" },
];

const ProjectShowcase = () => {
   const [active, setActive] = useState<Filter>("all");
   const navigate = useNavigate();

   const filtered = active === "all" ? projects : projects.filter((p) => p.category === active);

   return (
      <section id="work" className="py-24 lg:py-32">
         <div className="container mx-auto px-6">
            {/* Header */}
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6 }}
               className="mb-12 text-center"
            >
               <p className="text-sm font-medium uppercase tracking-[0.3em] text-primary mb-4">Selected Projects</p>
               <h2 className="font-display text-4xl font-bold text-foreground sm:text-5xl">Our Latest Work</h2>
            </motion.div>

            {/* Filter tabs */}
            <motion.div
               initial={{ opacity: 0, y: 10 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.4, delay: 0.2 }}
               className="mb-12 flex justify-center gap-2"
            >
               {filters.map((f) => (
                  <button
                     key={f.value}
                     onClick={() => setActive(f.value)}
                     className={`rounded-full px-6 py-2.5 text-sm font-medium transition-all duration-300 ${
                        active === f.value
                           ? "bg-primary text-primary-foreground shadow-[0_0_20px_hsl(33_93%_44%/0.3)]"
                           : "border-border text-secondary-foreground hover:bg-secondary/80"
                     }`}
                  >
                     {f.label}
                  </button>
               ))}
            </motion.div>

            {/* Grid */}
            <motion.div layout className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
               {filtered.map((project, i) => (
                  <motion.div
                     key={project.slug}
                     layout
                     initial={{ opacity: 0, y: 40 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true, margin: "-50px" }}
                     transition={{ duration: 0.5, delay: i * 0.08 }}
                     onClick={() => navigate(`/project/${project.slug}`)}
                     className="group relative cursor-pointer overflow-hidden rounded-xl border border-border bg-card transition-all duration-500 hover:border-primary/40 hover:shadow-[0_0_40px_-10px_hsl(33_93%_44%/0.2)]"
                  >
                     <div className="relative aspect-[4/3] overflow-hidden">
                        <img
                           src={project.image}
                           alt={project.title}
                           loading="lazy"
                           width={1280}
                           height={960}
                           className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-80" />

                        <div className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/0 text-primary opacity-0 transition-all duration-500 group-hover:bg-primary group-hover:text-primary-foreground group-hover:opacity-100">
                           <ArrowUpRight size={18} />
                        </div>

                        <div className="absolute inset-0 flex items-end p-6 translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                           <p className="text-sm text-foreground/80 leading-relaxed">{project.description}</p>
                        </div>
                     </div>

                     <div className="p-6">
                        <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary mb-2">
                           {project.subcategory}
                        </p>
                        <h3 className="font-display text-xl font-semibold text-foreground mb-4">{project.title}</h3>
                        <div className="flex flex-wrap gap-2">
                           {project.tech.map((t) => (
                              <span
                                 key={t}
                                 className="rounded-full bg-secondary/50 px-3 py-1 text-xs text-secondary-foreground"
                              >
                                 {t}
                              </span>
                           ))}
                        </div>
                     </div>
                  </motion.div>
               ))}
            </motion.div>
         </div>
      </section>
   );
};

export default ProjectShowcase;
