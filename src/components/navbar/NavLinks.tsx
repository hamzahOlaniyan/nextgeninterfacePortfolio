"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { NavMenu } from "./NavMenu";
import { SideMenuType } from "./sideMenu/SideMenu";
import { useRouter } from "next/navigation";

export const NavLinks = ({ sideMenu, setSideMenu }: SideMenuType) => {
   const [title, setTitle] = useState("");
   const pathname = usePathname();
   const router = useRouter();

   function formatUrl(str: string) {
      return str.toLowerCase().replace(/[\s&]+/g, "-");
   }

   return (
      <div className="h-full flex flex-col md:flex-row">
         {NavMenu.map((link: any, idx: number) => (
            <div key={idx} className="group">
               <div className="">
                  <button
                     type="button"
                     className={`${
                        pathname === link?.url || pathname.startsWith(link.url + "/")
                           ? "pointer-events-none text-secondary font-extrabold"
                           : "text-white hover:text-secondary"
                     } h-full gap-1 uppercase text-lg md:text-[13px] relative flex items-center px-3 py-6 transition-all`}
                     onClick={() => {
                        if (link.dropdown) {
                           setTitle(title !== link.title ? link.title : "");
                        } else {
                           router.push(`${link?.url}`);
                           setSideMenu(false);
                        }
                     }}
                  >
                     <p className="flex items-center">
                        {link.title}
                        {link.dropdown && <BiChevronDown className="text-lg" />}
                     </p>
                  </button>
               </div>

               {link.dropdown && (
                  <div className="absolute top-[68px] hidden md:group-hover:block md:hover:block z-30">
                     <div className="relative">
                        <div className="absolute -left-5 ">
                           <div className="py-1 ">
                              <div className="w-3 h-3 left-16 absolute bg-white rotate-45"></div>
                           </div>
                           <div className="w-full bg-white rounded-b-2xl overflow-hidden shadow-md shadow-black/20 ">
                              {link.dropdown?.map((sublink: any, idx: number) => (
                                 <Link
                                    key={idx}
                                    href={`/services/${formatUrl(sublink.title)}`}
                                    onClick={() => setSideMenu(false)}
                                    className={`${
                                       pathname === sublink?.url ||
                                       pathname.startsWith(sublink.url + "/")
                                          ? "pointer-events-none text-blue"
                                          : "text-blue hover:text-blue hover:bg-secondary"
                                    } w-full border-t border-secondary first:border-0 h-full flex items-center gap-1 uppercase text-md md:text-[13px] font-semibold relative duration-200 transition-all`}
                                 >
                                    <p className="p-3 text-nowrap">{sublink.title}</p>
                                 </Link>
                              ))}
                           </div>
                        </div>
                     </div>
                  </div>
               )}
               {/* mobile menu */}
               <div className={`${title === link.title ? "md:hidden" : "hidden"}`}>
                  {link.dropdown?.map((sublink: any, idx: number) => (
                     <Link
                        key={idx}
                        href={sublink?.url_mobile ? sublink?.url_mobile : sublink?.url}
                        onClick={() => sideMenu(false)}
                        className={`${
                           pathname === sublink?.url || pathname.startsWith(sublink.url + "/")
                              ? "pointer-events-none text-white"
                              : "text-white"
                        }  h-full w-full flex items-center gap-1 uppercase text-md md:text-[13px] font-semibold relative duration-300 transition-all`}
                     >
                        <p className="p-3 h-full w-full">{sublink.title}</p>
                     </Link>
                  ))}
               </div>
            </div>
         ))}
      </div>
   );
};
