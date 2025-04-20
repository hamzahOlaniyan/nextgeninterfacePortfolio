import React from "react";
import portfoliotData from "../portfolioData.json";
import ProjectCard from "./ProjectCard";

const arrayLength = portfoliotData?.portfolio?.length;

const ListContainer = async ({
   toShow = arrayLength,
   direction = "grid",
}: {
   toShow?: number;
   direction?: "col" | "grid";
}) => {
   return (
      <div
         className={`${
            direction === "col"
               ? "flex flex-col"
               : direction === "grid"
               ? "grid grid-cols-1 sm:grid-cols-3 gap-y-12"
               : "block"
         } gap-8 items-start h-full relative`}
      >
         {portfoliotData?.portfolio?.slice(0, toShow).map((item: any) => (
            <ProjectCard key={item.name} {...item} />
         ))}
      </div>
   );
};

export default ListContainer;
