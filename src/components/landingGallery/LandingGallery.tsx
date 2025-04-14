'use client'
import React from 'react'
import pic1 from '../../../public/ek93.png'
import pic2 from '../../../public/tp1.png'
import pic4 from '../../../public/jg2.png'
import Image from 'next/image'
import { HiArrowLongRight } from 'react-icons/hi2'
import { Label } from '../utils/Label'
import Link from 'next/link'
import MediaQuery from '../utils/MediaQuery'
import { FadeUpAnimation } from '@/lib/aos/Animation'


export const LandingGallery = () => {
    FadeUpAnimation()
    const images = [pic1, pic2,pic4]

    return (
        <MediaQuery>
            <div className='relative my-12'>
                <div className="w-full lg:grid grid-cols-2 gap-4 items-end">
                    <div className="w-full space-y-6">
                        <Label text="curious of what we've created?"/>
                            <h1
                            data-aos='fade-up'
                            data-aos-offset='240'
                            data-aos-duration='500'
                            data-aos-easing='ease'
                            className=" text-[3.5rem] leading-[3.5rem] font-mitr uppercase font-black text-dirtyOrange ">
                            explore our projects
                            </h1>
                    </div>
                    <div className="flex gap-6 items-center">
                        <Link href='/portfolio' className="text-white font-semibold text-lg hover:underline animate-pulse">See Portfolio </Link>
                        <HiArrowLongRight className='text-white'/>
                    </div>
                </div>

                <div className="my-12 overflow-hidden">
                    <div className="w-full h-96 flex gap-4 overflow-x-scroll">
                        {
                            images.map((stack: any) => (
                                <Image
                                    src={stack}
                                    alt={stack}
                                    className="object-center rounded-2xl lg:rounded-3xl object-cover h-full w-[80%] relative"
                                    key={stack}
                                    priority
                                />
                            ))}
                    </div>
                </div>
             </div>
        </MediaQuery>
    )
}
