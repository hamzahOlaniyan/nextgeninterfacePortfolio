export type ProjectCategory = "development" | "design";

export interface CaseStudy {
   highlight?: string;
   duration: string;
   year: string;
   client: string;
   overview: string;
   challenge: string;
   background?: string;
   background_text?: string;
   opportunity?: string;
   solution: string;
   results: string[];
}

export interface Project {
   slug: string;
   title: string;
   image: string;
   subcategory: string;
   category: ProjectCategory;
   tech: string[];
   description: string;
   caseStudy: CaseStudy;
   gallery: string[];
}

export const projects: Project[] = [
   {
      slug: "property-listing-platform",
      title: "Property Listing Platform",
      image: "/project-1.jpg",
      subcategory: "Web Application",
      category: "development",
      tech: ["react", "nextjs", "typescript", "tailwind"],
      description: "Property listing platform with interactive maps and virtual tour integration.",
      caseStudy: {
         highlight: "Revolutionizing Real Estate Search",
         duration: "4 Months",
         year: "2023",
         client: "RealEstate Plus",
         overview: "A comprehensive real estate platform designed to simplify the property search process for users and agents alike.",
         challenge: "Users were struggling with disjointed search experiences and lack of visual context when browsing properties remotely.",
         opportunity: "Create an immersive experience that bridges the gap between digital listings and physical property visits.",
         background: "The real estate market is increasingly moving towards remote-first interactions.",
         background_text: "In the post-COVID era, many property seekers prefer to do their initial scouting online. However, traditional static images often fail to give a true sense of space and flow. We saw an opportunity to integrate modern web technologies to solve this core frustration.",
         solution: "We implemented an integrated map search with real-time updates and seamless 3D virtual tour embeds.",
         results: ["50% increase in user engagement", "30% more leads generated", "Reduced average time-to-view by 40%"],
      },
      gallery: ["/project-1.jpg", "/project-2.jpg", "/project-3.jpg"],
   },
   {
      slug: "mmt",
      title: "mmt",
      image: "/project-3.jpg",
      subcategory: "saas ᐧ dashboard",
      category: "development",
      tech: ["react", "nextjs", "chart.js", "supabase"],
      description: "High-performance analytics dashboard for multi-channel marketing tracking.",
      caseStudy: {
         highlight: "Data-Driven Marketing Insights",
         duration: "6 Months",
         year: "2023",
         client: "MMT Analytics",
         overview: "A high-performance SaaS dashboard for tracking multi-channel marketing campaigns.",
         challenge: "Aggregating data from multiple APIs into a single, cohesive, and performant interface was the primary technical hurdle.",
         opportunity: "Provide marketers with a single source of truth for their campaign performance across all platforms.",
         background: "Marketing teams often jump between 5-10 different dashboards daily.",
         background_text: "The fragmentation of marketing data leads to missed opportunities and inefficient spend. MMT Analytics aimed to centralize this data into a responsive, real-time interface that empowers teams to make decisions in seconds rather than hours.",
         solution: "A custom data ingestion layer and a reactive dashboard with real-time visualization capabilities using Chart.js and Supabase.",
         results: ["Real-time data synchronization", "Unified reporting interface", "Improved decision-making speed by 60%"],
      },
      gallery: ["/project-3.jpg", "/project-4.jpg", "/project-5.jpg"],
   },
   {
      slug: "linuty",
      title: "linuty",
      image: "/project-2.jpg",
      subcategory: "Web Application",
      category: "design",
      tech: ["figma", "framer", "brand identity"],
      description: "Complete brand redesign and digital experience for a modern wellness startup.",
      caseStudy: {
         highlight: "Wellness Reimagined for Gen Z",
         duration: "3 Months",
         year: "2024",
         client: "Linuty Ltd",
         overview: "A complete brand redesign and digital experience for a modern wellness startup.",
         challenge: "The brand lacked a cohesive identity and failed to resonate with a younger, tech-savvy audience.",
         opportunity: "Define a new visual language for the wellness industry that feels fresh, digital-native, and inclusive.",
         background: "Wellness apps are often cluttered and use outdated aesthetic tropes.",
         background_text: "Linuty wanted to break away from the 'minimalist white' look of traditional wellness and embrace a more vibrant, energetic, and accessible brand identity that reflects the diversity of its user base.",
         solution: "A vibrant new visual identity paired with a clean, intuitive mobile-first web experience built in Framer.",
         results: ["New brand guidelines established", "100% positive feedback on beta launch", "Successfully secured seed funding"],
      },
      gallery: ["/project-2.jpg", "/project-6.jpg", "/project-branding.jpg"],
   },
];

export const getProjectBySlug = (slug: string): Project | undefined => {
   return projects.find((project) => project.slug === slug);
};
