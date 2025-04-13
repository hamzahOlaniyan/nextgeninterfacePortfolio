'use client'
import React from 'react'
import Button from '../utils/Button'
import { Label } from '../utils/Label'
import MediaQuery from '../utils/MediaQuery'
import { FadeUpAnimation } from '@/lib/aos/Animation'

export const Solution = () => {
    FadeUpAnimation()
    return (
        <div className="bg-secondary/10 py-14">
            <MediaQuery>
            <div className="w-full flex flex-col md:flex-row items-start justify-between gap-4 lg:gap-0">
                <div className="w-full space-y-4 lg:w-2/3">
                    <Label text='let us show you'/>
                    <h1 className='text-[clamp(1rem,10vw,3rem)] leading-[2.2rem] font-mitr uppercase font-black text-white'>how <span className='text-secondary'> we drive</span> your brand <span className='text-secondary'>to new height</span></h1>
                </div>
                <div className="h-full lg:w-1/2 space-y-2 flex flex-col  justify-end items-start relative">
                    <p className='text-white text-right mb-2'>We transform innovative ideas into capitivating and memoriable digital experience that engage and inspire</p>
                    {/* <div className='absolute -bottom-20 right-0'
                         data-aos='fade-left'
                          data-aos-offset='300'
                          data-aos-duration="500"
                          data-aos-easing="ease-in-out"
                         > 
                    </div> */}
                    <div className="mx-auto md:mx-0">
                        <Button link='/services' title='explore services' />
                    </div>
                </div> 
            </div>
            </MediaQuery>
        </div>
)
}
