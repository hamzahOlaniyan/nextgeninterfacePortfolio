"use client";
import React, { Suspense } from "react";
import { FadeUpAnimation } from "../../lib/aos/Animation";
import Link from "next/link";
import { LoadingPlaceholder } from "../utils/LoadingPlaceholder";

const ProjectCard = ({ project }: { project: any }) => {
  FadeUpAnimation();

  const { name, image, type } = project

  const renameUrl = name?.split(" ").join("");

  const ImageWithSuspense = React.lazy(() =>
    import("next/image").then((module) => ({ default: module.default }))
  );

  return (
    <Link
      href={`/portfolio/${renameUrl}`}
      data-aos="zoom-in-up"
      data-aos-duration="400"
      className="group w-full relative cursor-pointer"
    >
      <div className="w-full h-96 relative">
        <Suspense fallback={<LoadingPlaceholder />}>
          <div className="w-full h-full absolute top-0 left-0 z-10 rounded-lg hover:bg-secondary/60 hover:opacity-40 duration-400"></div>
          <ImageWithSuspense
            src={image[0]}
            alt={`Image ${name}`}
            fill={true}
            className="w-full h-full object-cover object-center bg-white rounded-t-lg shadow-sm shadow-black/20"
          />
        </Suspense>
      </div>
        <div className="bg-secondary/15 rounded-b-lg p-2">
          <h1 className="text-xl text-white font-bold uppercase text-center">{name}</h1>
        </div>
    </Link>
  );
};

export default ProjectCard;
