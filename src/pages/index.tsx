import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProjectShowcase from "@/components/ProjectShowcase";
import Footer from "@/components/Footer";

const Index = () => {
   return (
      <div className="min-h-screen bg-background">
         <Navbar />
         <Hero />
         <ProjectShowcase />
         <Footer />
      </div>
   );
};

export default Index;
