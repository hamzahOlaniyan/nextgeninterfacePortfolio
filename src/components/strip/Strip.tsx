import React from 'react'
import { IoMdArrowUp } from 'react-icons/io'

export const Strip = () => {
  return (
    <div className='bg-secondary rounded-3xl p-6 mx-36 flex gap-8 justify-between items-center mb-6'>
        <div className="w-12 h-12 bg-slate-500 rounded-full flex-grow-1"></div>
        <div className="text-3xl font-black uppercase text-primary leading-6 font-mitr w-1/2">digital & strategy</div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa assumenda aperiam non, quae itaque magnam explicabo porro necessitatibus! Error, fugiat!</p>
        <i className="w-20 h-20 rounded-full bg-primary flex items-center justify-center flex-grow-1"><IoMdArrowUp className="rotate-45 text-5xl text-secondary"/> </i> 
    </div>
  )
}
