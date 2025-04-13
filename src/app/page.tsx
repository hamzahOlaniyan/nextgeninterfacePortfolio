import Hero from "../components/hero/Hero";
import Panel from "@/components/panel/Panel";
import { Solution } from "@/components/solution/Solution";
import { LandingGallery } from "@/components/landingGallery/LandingGallery";
import { Banner } from "@/components/banner/Banner";

export default function Home() {
  return (
      <div className="">
        <div className="bg-primary pb-6">
          <Hero />
          <Solution />
          <LandingGallery/>
        </div>
          <Panel />
          <Banner/>
        </div>
  );
}
