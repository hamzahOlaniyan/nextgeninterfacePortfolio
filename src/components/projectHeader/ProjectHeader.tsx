import Link from "next/link";
import React from "react";
import MediaQuery from "../utils/MediaQuery";
import { IoChevronBackSharp } from "react-icons/io5";
import { IoMdArrowUp } from "react-icons/io";

export const ProjectHeader = ({ project }: any) => {

  return (
    <div className="bg-neutral-50 border-b border-neutral-200 w-full">
      <MediaQuery>
        <div className="spave-y-3 py-4 flex gap-2">
          <Link href='/portfolio' className="bg-dirtyOrange hover:bg-orange-400 duration-200 rounded-full h-10 w-10 flex items-center justify-center active:scale-95">
            <IoMdArrowUp className="-rotate-45 text-blue text-3xl"/>
          </Link>
          <div className="">
            <h1 className="capitalize text-2xl font-bold">{project?.name}</h1>
            <div className="flex flex-col gap-2 lg:flex justify-between ">
              <div className="flex-wrap md:flex-nowrap flex items-center gap-4">
                <h1 className="text-md font-semibold capitalize text-neutral-500">
                  {project?.type}
                </h1>
                <div className="flex items-start justify-between lg:items-center gap-2 ">
                  {project?.stack &&
                    <>
                      <span className="font-semibold capitalize text-sm text-nowrap">teck stack:</span>
                      <span className="flex flex-wrap gap-1">
                        {project?.stack?.map((item: string, i: number) => (
                          <span key={i} className="text-md font-regular capitalize">
                            {item}
                            {i === project?.stack.length - 1 ? "" : ","}
                          </span>
                        ))}
                      </span>
                    </>}
                </div>
              </div>
            </div>
            <div className="">
              {project?.url && (
                <Link
                  href={project?.url}
                  target="_blank"
                  className="uppercase text-themeColor hover:text-neutral-600 underline font-semibold text-sm"
                >
                  {`go to website   >`}
                </Link>
              )}
            </div>
          </div>
        </div>
      </MediaQuery>
    </div>
  );
};
