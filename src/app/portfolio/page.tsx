'use client'
import React, { useState } from "react";
import porfolioData from '../../portfolioData.json'
import ProjectCard from "@/components/projectCard/ProjectCard";
import MediaQuery from "@/components/utils/MediaQuery";
import { ThemeBackground } from "@/components/utils/ThemeBackground";

const Page = () => {

  const [tab, setTab] = useState<number>(0);

  const list = porfolioData.portfolio?.map((list) => list)

  const [portfolio, setPortfolio] = useState(list);

  const tabTitle = porfolioData?.portfolio?.map((items: any) => items.type).flat().reduce((accumulator: any, currentValue: any) => {
    if (!accumulator.includes(currentValue)) {
      accumulator.push(currentValue);
    }
    return accumulator;
  }, []);

  const cat = ['all', ...tabTitle]


  const filter = (value: string) => {
    if (value === 'all') setPortfolio(list)
    else {
      const filteredList = list.filter((l) => l.type === value)
      setPortfolio(filteredList)
    }
  }

  return (
    <div className="bg-themeColor pb-28">
      <ThemeBackground heading='our portfolio'>
        <p >Explore our portfolio to see how we’ve helped clients enhance their online presence. From striking designs to effective strategies, our work showcases the results we can achieve for your business.</p>
      </ThemeBackground>

      <MediaQuery>
          <div className="w-full mt-6 sm:mt-0 bg-dirtyOrange overflow-hidden overflow-x-scroll rounded-full mb-12">
              <div className="flex items-center justify-between p-2 px-6">
                  {cat.map((title: string, idx: number) => (
                    <button
                      key={title}
                      onClick={() => {
                        setTab(idx);
                        filter(title);
                      }}
                      className={`uppercase h-12 font-bold text-themeColor p-2 rounded-lg transition-all text-nowrap ${tab === idx && 'bg-label text-md font-black border-2 border-themeColor'}`}>
                      {title}
                    </button>
                  ))}
            </div>
          </div>
         <div className="flex  flex-col sm:grid grid-cols-2 md:grid-cols-4 gap-6">
            {portfolio?.map((project: any, idx: number) => (
              <ProjectCard project={project} key={idx} />
            ))}
          </div>
      </MediaQuery> 
    </div>
  );
};

export default Page;
