import React from "react";
import { NavLinks } from "../NavLinks";

export type SideMenuType = {
  sideMenu?: any
  setSideMenu?: any
}

const Menu = ({ sideMenu, setSideMenu }: SideMenuType) => {
  return (
    <div
      className={`md:hidden bg-themeColor absolute w-full top-[76px] h-[100vh] duration-300 z-50 ${sideMenu ? "left-0" : "left-[-100%]"}`}>
      <div className="p-4">
        <NavLinks setSideMenu={setSideMenu} />
      </div>
    </div>
  );
};

export default Menu;
