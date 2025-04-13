'use client'
import React from "react";
import { NavMenu } from "../navbar/NavMenu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MediaQuery from "../utils/MediaQuery";
import Image from 'next/image'
import logo from '../../../public/nextgen_logo_color.svg'



const Footer = () => {

  const pathname = usePathname()

  return (
    <div className="w-full text-xs relative bottom bg-neutral-200">
      <MediaQuery>
          <div className="md:grid grid-cols-3 md:grid-cols-3 gap-4 py-12">
            <div className="flex gap-2 mb-6 mb:mb-0">
              <Image src={logo} alt='logo' className="w-8 h-8"/>
              <h1 className="font-black text-2xl">Nextgen Interface</h1>
            </div>
            <div className="">
              <h1 className='uppercase text-lg font-medium'>quick links</h1>
              <div className="flex flex-col gap-3 my-3">
                {NavMenu.map((item, idx: number) => (
                  <Link
                    key={item.title}
                    href={item.url}
                    className={`${pathname === item.url || pathname.startsWith(item.url + "/") ? "font-bold" : ""
                      } active:scale-95 uppercase text-sm hover:underline`}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>
            <div className="">
              <h1 className='uppercase text-lg font-medium'>Design And Development</h1>
              <div className="flex flex-col gap-3 my-3">
                {NavMenu[1].dropdown?.map((item: any, idx: number) => (
                  <Link
                    key={item.title}
                    href={item.url}
                    className={`${pathname === item.url || pathname.startsWith(item.url + "/") ? "font-bold" : ""
                      } active:scale-95 uppercase text-sm hover:underline`}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
            <div className="grid grid-cols-2 md:flex justify-between items-center border-t  border-blue">
              <div className="py-4 text-md">
                &copy; 2024 Next Gen Interface LTD. <strong className="font-bold">All Rights Reserved</strong>
              </div>
              <div className="flex gap-2 text-md font-semibold justify-end">
                <Link href={'/terms'} className="hover:underline transition-all duration-300">Terms</Link>
                |
                <Link href={'/privacy'} className="hover:underline transition-all duration-300">Privacy</Link>
              </div>
          </div>
      </MediaQuery>
    </div>
  );
};

export default Footer;
