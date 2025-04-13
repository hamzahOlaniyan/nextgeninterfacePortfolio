import React from 'react'
import Button from '@/components/utils/Button'
import MediaQuery from '@/components/utils/MediaQuery'
import { FaCircleDot } from "react-icons/fa6";
import { ThemeBackground } from '@/components/utils/ThemeBackground';
import { services_provided } from '@/components/panel/servicesProvided';
import image from '../../../public/hand.png'

const page = () => {
    return (
        <div className="">
            <ThemeBackground heading='Our Services' image={image}>
                <div className="flex flex-col items-center space-y-4">
                    <p className='font-medium'>Discover how our services can make your local business stand out from the crowd. We provide tailored solutions to boost your brands visibility, drive growth, and enhance your online presence.</p>
                    <Button link='/portfolio' title='see our work' varient='white' />
                </div>
            </ThemeBackground>
                <MediaQuery>
                 <div className="my-12">
                    <h1 className='text-5xl font-black py-2 font-mitr'>Discover Our Services</h1>
                    <div className="grid md:grid-cols-2 gap-6 my-16">
                        {services_provided?.map((item: any,idx:number) => (
                            <article key={idx} className='space-y-4 font-medium  text-blue bg-panel1 first:bg-panel2 first:text-white last:text-white last:bg-panel2  p-7 rounded-2xl'>
                                <h2 className='font-bold text-5xl'>{item.title}</h2>
                                <p>{item.description_2}</p>
                                <ul className='my-16'>
                                    {item.list.map((l: string, i: number) => (
                                        <li key={i} className='flex w-full gap-2 text-lg items-center font-bold'><FaCircleDot className="text-secondary" />{l}</li>
                                    ))}
                                </ul>
                            </article>
                        ))}
                    </div>
                </div>
            </MediaQuery>
        </div>
    )
}

export default page 