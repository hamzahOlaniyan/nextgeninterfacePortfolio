import React from "react";
import projectData from "../../../portfolioData.json";
import Image from "next/image";
import { ProjectHeader } from "@/components/ProjectHeader";
import MediaQuery from "@/components/utils/MediaQuery";

export function generateStaticParams() {
   return projectData?.portfolio?.map((item: any) => {
      const renameUrl = item.name.split(" ").join("");
      return { name: renameUrl };
   });
}
const page = ({ params }: { params: { name: string } }) => {
   const project = projectData.portfolio?.find((item: any) => {
      const renameUrl = item.name.split(" ").join("");
      return renameUrl === params.name;
   });

   return (
      <div className="relative mt-[76px]">
         <ProjectHeader project={project} />
         <MediaQuery>
            <div className="w-full flex flex-col items-center gap-2 relative lg:gap-y-8 mt-12">
               {project?.image?.map((pics: any, i: number) => (
                  <div key={i} className="w-full h-[35vh] sm:h-[90vh] relative">
                     <Image
                        src={pics}
                        alt="project"
                        fill={true}
                        className="object-cover sm:object-contain object-center w-full h-full rounded-md"
                     />
                  </div>
               ))}
               <p className="text-md my-12 font-light">{project?.description}</p>
            </div>
         </MediaQuery>
      </div>
   );
};

export default page;
