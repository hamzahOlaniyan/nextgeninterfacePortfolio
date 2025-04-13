import React from 'react'
import MediaQuery from './MediaQuery'
import Image from 'next/image'

export const ThemeBackground = ({ children, heading, image }: { children?: React.ReactNode, heading: string | React.ReactNode, subheading?: string ,image?:any} ) => {
    return (
        <div className="h-[45vh] relative bg-themeColor flex items-center justify-center overflow-hidden">
            <MediaQuery>
            {image && <Image src={image} width={500} height={500} alt='img' priority className='absolute right-0 top-16 md:top-0 w-[20rem] h-[20rem] md:w-[30rem] md:h-[30rem] opacity-50 object-cover object-center rotate-[30deg]'/>}
                <div className="flex flex-col items-center justify-center text-center text-white space-y-3 relative top-10">
                    <div className="flex items-center gap-2 relative">
                        <h1 className='text-5xl lg:text-6xl font-bold  font-mitr uppercase'>{heading}</h1>
                    </div>
                    <div className='w-full md:w-3/4'>
                        {children && children}
                    </div>
                </div>
            </MediaQuery>
        </div>
    )
}