import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, Calendar, Building2, CheckCircle2 } from "lucide-react";
import { getProjectBySlug } from "@/data/projects";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ProjectDetail = () => {
   const { slug } = useParams<{ slug: string }>();
   const navigate = useNavigate();
   const project = getProjectBySlug(slug || "");

   if (!project) {
      return (
         <div className="flex min-h-screen items-center justify-center bg-background">
            <div className="text-center">
               <h1 className="font-display text-4xl font-bold text-foreground mb-4">Project Not Found</h1>
               <button onClick={() => navigate("/")} className="text-primary hover:underline">
                  Go back home
               </button>
            </div>
         </div>
      );
   }

   const { caseStudy } = project;

   return (
      <div className="min-h-screen bg-background">
         <Navbar />

         {/* Hero */}
         <section className="relative pt-24">
            <div className="container mx-auto px-6 py-12">
               <motion.button
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4 }}
                  onClick={() => navigate("/#work")}
                  className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
               >
                  <ArrowLeft size={16} />
                  Back to Projects
               </motion.button>

               <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
                  <motion.div
                     initial={{ opacity: 0, y: 30 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.6, delay: 0.1 }}
                  >
                     <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary mb-3">
                        {project.subcategory}
                     </p>
                     <h1 className="font-display text-4xl font-bold text-foreground sm:text-5xl lg:text-6xl mb-6">
                        {project.title}
                     </h1>
                     <p className="text-lg text-muted-foreground leading-relaxed mb-8">{project.description}</p>

                     {/* Meta info */}
                     <div className="grid grid-cols-3 gap-4">
                        <div className="rounded-lg bg-secondary p-4">
                           <div className="flex items-center gap-2 text-primary mb-1">
                              <Clock size={14} />
                              <span className="text-xs font-medium uppercase tracking-wider">Duration</span>
                           </div>
                           <p className="text-sm font-semibold text-foreground">{caseStudy.duration}</p>
                        </div>
                        <div className="rounded-lg bg-secondary p-4">
                           <div className="flex items-center gap-2 text-primary mb-1">
                              <Calendar size={14} />
                              <span className="text-xs font-medium uppercase tracking-wider">Year</span>
                           </div>
                           <p className="text-sm font-semibold text-foreground">{caseStudy.year}</p>
                        </div>
                        <div className="rounded-lg bg-secondary p-4">
                           <div className="flex items-center gap-2 text-primary mb-1">
                              <Building2 size={14} />
                              <span className="text-xs font-medium uppercase tracking-wider">Client</span>
                           </div>
                           <p className="text-sm font-semibold text-foreground">{caseStudy.client}</p>
                        </div>
                     </div>
                  </motion.div>

                  <motion.div
                     initial={{ opacity: 0, scale: 0.95 }}
                     animate={{ opacity: 1, scale: 1 }}
                     transition={{ duration: 0.7, delay: 0.2 }}
                     className="overflow-hidden rounded-2xl border border-border"
                  >
                     <img
                        src={project.image}
                        alt={project.title}
                        width={1280}
                        height={960}
                        className="h-full w-full object-cover"
                     />
                  </motion.div>
               </div>
            </div>
         </section>

         {/* Case Study */}
         <section className="py-20">
            <div className="container mx-auto px-6 max-w-4xl">
               {/* Tech stack */}
               <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="mb-16 flex flex-wrap gap-3 justify-center"
               >
                  {project.tech.map((t) => (
                     <span
                        key={t}
                        className="rounded-full border border-primary/30 px-5 py-2 text-sm font-medium text-primary"
                     >
                        {t}
                     </span>
                  ))}
               </motion.div>

               {/* Overview */}
               <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="mb-16"
               >
                  <h2 className="font-display text-2xl font-bold text-foreground mb-4">Overview</h2>
                  <p className="text-muted-foreground leading-relaxed text-lg">{caseStudy.overview}</p>
               </motion.div>

               {/* Challenge */}
               <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="mb-16"
               >
                  <h2 className="font-display text-2xl font-bold text-foreground mb-4">The Challenge</h2>
                  <p className="text-muted-foreground leading-relaxed text-lg">{caseStudy.challenge}</p>
               </motion.div>

               {/* Solution */}
               <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="mb-16"
               >
                  <h2 className="font-display text-2xl font-bold text-foreground mb-4">Our Solution</h2>
                  <p className="text-muted-foreground leading-relaxed text-lg">{caseStudy.solution}</p>
               </motion.div>

               {/* Results */}
               <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
               >
                  <h2 className="font-display text-2xl font-bold text-foreground mb-6">Key Results</h2>
                  <div className="grid gap-4 sm:grid-cols-2">
                     {caseStudy.results.map((result, i) => (
                        <motion.div
                           key={i}
                           initial={{ opacity: 0, x: -20 }}
                           whileInView={{ opacity: 1, x: 0 }}
                           viewport={{ once: true }}
                           transition={{ duration: 0.4, delay: i * 0.1 }}
                           className="flex items-start gap-3 rounded-xl bg-secondary p-5"
                        >
                           <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-primary" />
                           <span className="text-foreground font-medium">{result}</span>
                        </motion.div>
                     ))}
                  </div>
               </motion.div>
            </div>
         </section>

         <Footer />
      </div>
   );
};

export default ProjectDetail;
