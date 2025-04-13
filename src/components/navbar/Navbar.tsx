"use client";
import React, { useState } from "react";
import { MdOutlineMenu } from "react-icons/md";
import SideMenu from "./sideMenu/SideMenu";
import { IoMdClose } from "react-icons/io";
import { NavLinks } from "./NavLinks";
import logo from '../../../public/nextgen_logo_color.svg'
import Image from 'next/image'
import Link from "next/link";
import MediaQuery from "../utils/MediaQuery";


const Navbar = () => {
  const [sideMenu, setSideMenu] = useState(false);
  console.log(sideMenu);
  

  return (
    <nav className={`fixed py-5 w-full top-0 lg:py-0 z-50 bg-themeColor shadow-md shadow-black/10`}>
      <MediaQuery>
      <div className="w-full flex justify-between items-center h-full relative">
        <Link href='/' className="flex gap-2 items-center ">
          <Image src={logo} alt='logo' priority className="w-6" />
          <h1 className=" font-black text-white  text-xl">Nextgen Interface</h1>
        </Link>
        <div className="hidden md:block"> <NavLinks /></div>
        <div className="md:hidden">
          {sideMenu ? <IoMdClose
            onClick={() => setSideMenu(false)}
            className="text-4xl text-white relative top-1 z-10"
          /> : <MdOutlineMenu
            onClick={() => setSideMenu(true)}
            className=" text-white text-4xl z-10"
          />}
        </div>
      </div >
      <SideMenu
        sideMenu={sideMenu}
        setSideMenu={setSideMenu}
      />
      </MediaQuery>
    </nav>
  );
};

export default Navbar;
