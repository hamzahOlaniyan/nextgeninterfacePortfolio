import Link from "next/link";
import React from "react";
import { IoMdArrowUp } from "react-icons/io";


const Button = ({
  title,
  icon,
  link,
  varient
}: {
  title: string;
  icon?: React.ReactNode;
  link: string;
  varient?: 'default' | 'outline-white' | 'outline-theme' | 'white'
}) => {
  return (
      <Link
        href={link}
        className={`${''} w-fit flex gap-2 items-center bg-white rounded-full py-2 px-3 pl-6 cursor-pointer`}>
        <p className="text-lg text-themeColor capitalize font-semibold">{title}</p>
        <i className="w-9 h-9 rounded-full bg-themeColor flex items-center justify-center"><IoMdArrowUp className="rotate-45 text-white text-2xl"/> </i> 
      </Link>
  );
}; 

export default Button;      