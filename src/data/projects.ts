export type ProjectCategory = "development" | "design";

export interface CaseStudy {
   duration: string;
   year: string;
   client: string;
   overview: string;
   challenge: string;
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
   gallery?: string[];
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
         duration: "4 Months",
         year: "2023",
         client: "RealEstate Plus",
         overview:
            "A comprehensive real estate platform designed to simplify the property search process for users and agents alike.",
         challenge:
            "Users were struggling with disjointed search experiences and lack of visual context when browsing properties remotely.",
         solution:
            "We implemented an integrated map search with real-time updates and seamless 3D virtual tour embeds.",
         results: [
            "50% increase in user engagement",
            "30% more leads generated",
            "Reduced average time-to-view by 40%",
         ],
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
      description: "Property listing platform with interactive maps and virtual tour integration.",
      caseStudy: {
         duration: "6 Months",
         year: "2023",
         client: "MMT Analytics",
         overview: "A high-performance SaaS dashboard for tracking multi-channel marketing campaigns.",
         challenge: "Aggregating data from multiple APIs into a single, cohesive, and performant interface.",
         solution: "A custom data ingestion layer and a reactive dashboard with real-time visualization capabilities.",
         results: ["Real-time data synchronization", "Unified reporting interface", "Improved decision-making speed"],
      },
   },
   {
      slug: "linuty",
      title: "linuty",
      image: "/project-2.jpg",
      subcategory: "Web Application",
      category: "design",
      tech: ["figma", "framer", "brand identity"],
      description: "Property listing platform with interactive maps and virtual tour integration.",
      caseStudy: {
         duration: "3 Months",
         year: "2024",
         client: "Linuty Ltd",
         overview: "A complete brand redesign and digital experience for a modern wellness startup.",
         challenge: "The brand lacked a cohesive identity and failed to resonate with a younger, tech-savvy audience.",
         solution: "A vibrant new visual identity paired with a clean, intuitive mobile-first web experience.",
         results: [
            "New brand guidelines established",
            "100% positive feedback on beta launch",
            "Successfully secured seed funding",
         ],
      },
   },
];

export const getProjectBySlug = (slug: string): Project | undefined => {
   return projects.find((project) => project.slug === slug);
};
