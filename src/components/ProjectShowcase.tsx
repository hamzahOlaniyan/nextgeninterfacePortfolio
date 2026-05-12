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

const ProjectShowcase = ({ header = true }: { header?: boolean }) => {
   const [active, setActive] = useState<Filter>("all");
   const navigate = useNavigate();

   const filtered = active === "all" ? projects : projects.filter((p) => p.category === active);

   return (
      <section id="work" className=" max-w-6xl mx-auto pb-24">
         <div className="mx-auto px-4 md:px-0">
            {header && (
               <div className="py-12 space-y-8 md:space-y-0">
                  <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground text-left">
                     Selected Work
                  </div>
                  <motion.div
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.6 }}
                     className="text-center"
                  >
                     <p className="text-sm font-display uppercase tracking-[0.3em] text-primary mb-4">
                        Selected Projects
                     </p>
                     <h2 className="text-4xl text-foreground sm:text-5xl">
                        A quiet archive of <br /> <span className="text-muted-foreground italic">recent projects.</span>
                     </h2>
                  </motion.div>
               </div>
            )}

            {/* Filter tabs */}
            <div className="flex items-center gap-6 border-y border-border py-4 mb-2">
               {filters.map((f) => (
                  <button
                     key={f.value}
                     onClick={() => setActive(f.value)}
                     className={`text-sm transition-opacity ${
                        active === f.value ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                     }`}
                  >
                     {f.label}
                     <span className="ml-1 text-[10px] tabular-nums text-muted-foreground">
                        ({f.value === "all" ? projects.length : projects.filter((p) => p.category === f.value).length})
                     </span>
                  </button>
               ))}
            </div>

            {/* Grid */}
            <motion.div layout className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-12">
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
