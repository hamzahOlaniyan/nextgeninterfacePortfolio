import Hero from "../components/Hero";
import Panel from "@/components/panel/Panel";
import { Show } from "@/components/Show";
import { ProjectSection } from "@/components/ProjectSection";
import { Banner } from "@/components/Banner";

export default function Home() {
   return (
      <div className="">
         <div className="bg-themeColor pb-6">
            <Hero />
            <Show />
            <ProjectSection />
         </div>
         <Panel />
         <Banner />
      </div>
   );
}
