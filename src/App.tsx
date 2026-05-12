import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import ProjectDetail from "./pages/ProjectDetail.tsx";
import NotFound from "./pages/NotFound.tsx";
import Index from "./pages/index.tsx";
import Navbar from "./components/Navbar.tsx";
import Studio from "./pages/Studio.tsx";
import Footer from "./components/Footer.tsx";
import Projects from "./pages/Projects.tsx";

const queryClient = new QueryClient();

const App = () => (
   <QueryClientProvider client={queryClient}>
      <TooltipProvider>
         <Sonner />
         <BrowserRouter>
            <Navbar />
            <Routes>
               <Route path="/" element={<Index />} />
               <Route path="/project/:slug" element={<ProjectDetail />} />
               <Route path="/projects" element={<Projects />} />
               <Route path="/studio" element={<Studio />} />
               <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
         </BrowserRouter>
      </TooltipProvider>
   </QueryClientProvider>
);

export default App;
