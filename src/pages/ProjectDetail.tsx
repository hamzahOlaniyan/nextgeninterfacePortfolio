import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Clock, Calendar, Building2, ChevronLeft, ChevronRight } from "lucide-react";
import { getProjectBySlug } from "@/data/projects";
import Footer from "@/components/Footer";
import { Separator } from "@/components/ui/separator";

const ProjectDetail = () => {
   const { slug } = useParams<{ slug: string }>();
   const navigate = useNavigate();
   const project = getProjectBySlug(slug || "");
   const [currentImage, setCurrentImage] = useState(0);

   useEffect(() => {
      window.scrollTo(0, 0);
      setCurrentImage(0);
   }, [slug]);

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

   const { caseStudy, gallery } = project;

   const nextImage = () => setCurrentImage((prev) => (prev + 1) % gallery.length);
   const prevImage = () => setCurrentImage((prev) => (prev - 1 + gallery.length) % gallery.length);

   return (
      <div className="min-h-screen bg-background">
         {/* Hero */}
         <section className="relative pt-20">
            <div className="container mx-auto px-6 py-12">
               <motion.button
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4 }}
                  onClick={() => navigate("/")}
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
                     className="space-y-12"
                  >
                     <div className="">
                        <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary mb-3">
                           {project.subcategory}
                        </p>
                        <h1 className="font-display text-4xl font-bold text-foreground sm:text-5xl lg:text-6xl mb-6">
                           {project.title}
                        </h1>
                        <p className="text-lg text-secondary-foreground leading-relaxed mb-8">{project.description}</p>
                        <div className="space-y-6">
                           <div className="space-y-2">
                              <p className="text-xs uppercase text-muted-foreground">overview</p>
                              <p>{caseStudy.overview}</p>
                           </div>
                        </div>
                     </div>

                     {/* Meta info */}
                     <div className="flex items-center gap-6">
                        <div className="rounded-lg">
                           <div className="flex items-center gap-2 text-muted-foreground mb-1">
                              <Clock size={12} />
                              <span className="text-xs uppercase tracking-wider">Duration</span>
                           </div>
                           <p className=" font-medium text-foreground">{caseStudy.duration}</p>
                        </div>
                        <div className="rounded-lg">
                           <div className="flex items-center gap-2 text-muted-foreground mb-1">
                              <Calendar size={12} />
                              <span className="text-xs uppercase tracking-wider">Year</span>
                           </div>
                           <p className=" font-medium text-foreground">{caseStudy.year}</p>
                        </div>
                        <div className="rounded-lg">
                           <div className="flex items-center gap-2 text-muted-foreground mb-1">
                              <Building2 size={12} />
                              <span className="text-xs uppercase tracking-wider">Client</span>
                           </div>
                           <p className=" font-medium text-foreground">{caseStudy.client}</p>
                        </div>
                     </div>
                  </motion.div>

                  {/* Image Gallery */}
                  <motion.div
                     initial={{ opacity: 0, scale: 0.95 }}
                     animate={{ opacity: 1, scale: 1 }}
                     transition={{ duration: 0.7, delay: 0.2 }}
                     className="relative group"
                  >
                     <div className="overflow-hidden rounded-2xl border border-border relative aspect-[4/3]">
                        <AnimatePresence mode="wait">
                           <motion.img
                              key={currentImage}
                              src={gallery[currentImage]}
                              alt={`${project.title} - Image ${currentImage + 1}`}
                              initial={{ opacity: 0, x: 30 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: -30 }}
                              transition={{ duration: 0.3 }}
                              className="h-full w-full object-cover absolute inset-0"
                              loading={currentImage === 0 ? undefined : "lazy"}
                              width={1280}
                              height={960}
                           />
                        </AnimatePresence>

                        {/* Nav arrows */}
                        {gallery.length > 1 && (
                           <>
                              <button
                                 onClick={prevImage}
                                 className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-background/80 backdrop-blur-sm p-2 text-foreground opacity-0 group-hover:opacity-100 transition-opacity hover:bg-background"
                                 aria-label="Previous image"
                              >
                                 <ChevronLeft size={20} />
                              </button>
                              <button
                                 onClick={nextImage}
                                 className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-background/80 backdrop-blur-sm p-2 text-foreground opacity-0 group-hover:opacity-100 transition-opacity hover:bg-background"
                                 aria-label="Next image"
                              >
                                 <ChevronRight size={20} />
                              </button>
                           </>
                        )}
                     </div>

                     {/* Thumbnails */}
                     {gallery.length > 1 && (
                        <div className="flex gap-3 mt-4 justify-center">
                           {gallery.map((img, i) => (
                              <button
                                 key={i}
                                 onClick={() => setCurrentImage(i)}
                                 className={`w-20 h-14 rounded-lg overflow-hidden border-2 transition-all ${
                                    i === currentImage
                                       ? "border-primary ring-2 ring-primary/30"
                                       : "border-border opacity-60 hover:opacity-100"
                                 }`}
                              >
                                 <img
                                    src={img}
                                    alt={`Thumbnail ${i + 1}`}
                                    className="w-full h-full object-cover"
                                    loading="lazy"
                                    width={80}
                                    height={56}
                                 />
                              </button>
                           ))}
                        </div>
                     )}
                  </motion.div>
               </div>
            </div>
         </section>

         {/* Case Study */}
         <section className="pb-32">
            <div className="container mx-auto px-6 max-w-5xl space-y-6">
               <div className="space-y-12">
                  <div className="space-y-6">
                     <div className="space-y-2">
                        <p className="text-xs uppercase text-muted-foreground">PROCESS HIGHLIGHTS</p>
                        <h1 className="text-3xl font-medium">{caseStudy.highlight}</h1>
                     </div>
                     <Separator />
                     <div className="grid lg:grid-cols-2 gap-4">
                        <div className="space-y-4">
                           <h1 className="text-lg ">Challenge</h1>
                           <p className="text-muted-foreground">{caseStudy.challenge}</p>
                        </div>
                        <div className="space-y-4">
                           <h1 className="text-lg">Opportunity</h1>
                           <p className="text-muted-foreground">{caseStudy.opportunity}</p>
                        </div>
                     </div>
                  </div>
                  <Separator />
                  <div className="grid grid-cols-4 gap-4">
                     <div className="space-y-4">
                        <h1 className="text-lg ">Disciplines</h1>
                        <p className="text-muted-foreground">{project.subcategory}</p>
                     </div>
                     <div className="space-y-4">
                        <h1 className="text-lg ">Responsibilities</h1>
                        <p className="text-muted-foreground">{project.category}</p>
                     </div>
                     <div className="space-y-4">
                        <h1 className="text-lg ">Stack</h1>
                        <ul className="flex flex-wrap gap-x-2">
                           {project.tech.map((t, idx) => (
                              <li key={t} className="text-muted-foreground capitalize">
                                 {t}{idx < project.tech.length - 1 ? "," : ""}
                              </li>
                           ))}
                        </ul>
                     </div>
                     <div className="space-y-4">
                        <h1 className="text-lg ">Tools</h1>
                        <p className="text-muted-foreground">Figma, VS Code</p>
                     </div>
                  </div>
                  <div className="space-y-6 pt-24">
                     <div className="space-y-2">
                        <p className="text-xs uppercase text-muted-foreground">background</p>
                        <h1 className="text-3xl font-medium">{caseStudy.background}</h1>
                     </div>
                     <Separator />
                     <p className="text-muted-foreground">{caseStudy.background_text}</p>
                  </div>
               </div>
            </div>
         </section>

         <Footer />
      </div>
   );
};

export default ProjectDetail;
