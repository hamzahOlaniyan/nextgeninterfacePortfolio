'use client'
import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import Button from "../utils/Button";
import ParticlesComponent from "@/lib/particles/Particles";
import laptop from '../../../public/computer.png'
import logo from '../../../public/nextgen_logo_color.svg'
import rec from '../../../public/9594682.png'
import black from '../../../public/black.png'


import "../../app/globals.css"
import Image from "next/image";
import MediaQuery from "../utils/MediaQuery";
import { FadeUpAnimation } from "@/lib/aos/Animation";



const Hero = () => {
  FadeUpAnimation()
  return (
      <MediaQuery>
    <div className="h-[105vh] w-full relative flex items-center justify-center">
          <div className="relative w-full flex flex-col items-center justify-center pt-32 lg:pt-14">
            <div className="text-[clamp(1rem,11vw,17rem)] text-white font-mitr font-black uppercase w-full leading-[50px] md:leading-[70px] lg:leading-[130px]">
                  <div className="md:hidden text-center text-[3.5rem] sm:text-[5rem] relative sm:leading-[70px]">
                    {/* <Image src={rec} alt='mac' width={50} height={50}  className="h-full w-full object-center object-contain block absolute left-0 top-0"/> */}
                    <h1 className="text-secondary">we craft</h1>
                    <h1>the</h1>
                    <h1 className="text-secondary">digital</h1>
                    <h1>experience</h1>
                    {/* <Image src={black} alt='mac'  width={50} height={50} className="h-full w-full object-center object-contain block absolute right-0 top-0"/> */}
                  </div>

              <div className="hidden md:block">
                <div className="flex gap-4 lg:gap-12 justify-between items-center">
                  <span
                    // data-aos="fade-right" 
                    // data-aos-offset="200"
                    // data-aos-duration="1200"
                    // data-aos-easing="linear"
                    // data-aos-mirror="true"
                    // data-aos-once="false"
                    > we </span>

                  <span
                    // data-aos='fade-down' 
                    // data-aos-offset="500"
                    // data-aos-duration='700'
                    // data-aos-mirror="true"
                    // data-aos-easing="ease-in-sine"
                    className='text-secondary'>Craft</span>

                  <Image src={rec} alt='mac' width={100} height={100}
                    // data-aos='zoom-in-left'
                    // data-aos-offset="600"
                    // data-aos-delay="50"
                    // data-aos-duration="1300"
                    // data-aos-easing="ease-in-quad"
                    // data-aos-mirror="true"
                    // data-aos-once="false"
                    className="w-full h-8 sm:h-12 md:h-16 lg:h-[5.5rem] object-center object-cover block relative bg-teal-200 rounded-full"/>
                </div>
                <div className="flex gap-4 justify-between items-center ">
                  <Image src={laptop} alt='mac' width={100} height={100}
                    // data-aos='zoom-in-right'
                    // data-aos-offset="400"
                    // data-aos-duration='1300'
                    // data-aos-easing="ease-in-sine"
                    //  data-aos-mirror="true"
                    // data-aos-once="false"
                    className="w-[clamp(1rem,10vw,10rem)] h-[clamp(1rem,10vw,10rem)] object-center object-contain block relative"/>
                  <span 
                    // data-aos='zoom-in-right'
                    // data-aos-offset="300" 
                    // data-aos-duration='900'
                    // data-aos-easing="ease-in"
                    // data-aos-mirror="true"
                    // data-aos-once="false"
                    >the</span>

                  <Image src={logo} alt='mac' width={100} height={100}
                    // data-aos='zoom-out'
                    // data-aos-offset="300"
                    // data-aos-duration="1500"
                    // data-aos-easing="ease-out-quart"
                    // data-aos-mirror="true"
                    // data-aos-once="false"
                    className="w-[clamp(1rem,8vw,7rem)] h-[clamp(1rem,8vw,7rem)] object-center object-contain block relative"/>
                  
                  <span
                    // data-aos='zoom-in-left'
                    // data-aos-offset="400"
                    // data-aos-duration='1000'
                    // data-aos-easing="ease-out-quart"
                    className='text-secondary'>Digital</span>
                  </div>

                  <div className="flex gap-4 items-center">
                    <span  
                      // data-aos="fade-up"
                      // data-aos-offset="200"
                      // data-aos-delay="50"
                      // data-aos-duration="900"
                      // data-aos-easing="ease-in-quart"
                      // data-aos-mirror="true"
                      // data-aos-once="false"
                      className='text-secondary'>experience</span>
                    
                    <Image src={black} alt='mac'  width={100} height={100} 
                      // data-aos="zoom-out-up"
                      // data-aos-offset="0"
                      // data-aos-duration='1500'
                      // data-aos-easing="ease-out-quart"
                      className="w-[clamp(1rem,10vw,7rem)] h-[clamp(1rem,10vw,7rem)] object-center object-contain block relative"/>
                  </div>
              </div >
            </div>


            <div className="flex flex-col lg:grid grid-cols-[.5fr_2fr] mt-14 gap-12 lg:items-center">
                <div 
                  // data-aos='fade-right'
                  // data-aos-offset='180'
                  // data-aos-duration="500"
                  // data-aos-easing="ease-in-out"
                  >
                  <Button
                    title="start project"
                    link="/contact"
                    icon={<IoIosArrowRoundForward className="text-xl" />}
                    varient="white"
                  />
                </div>
                          
                <div className="space-y-1">
                    <h1 className="text-white text-3xl font-semibold tracking-tight font-mitr">
                      Transforming Ideas into Digital Masterpieces
                    </h1>
                  <p className="text-white font-light w-6/7">
                    Web & Mobile Developer and Designer dedicated to bringing your ideas
                    to life. With a keen eye for design and a knack for coding, creating
                    stunning websites and graphics that not only look good but also
                    perform exceptionally.
                  </p>
                </div>
            </div>
          </div>
          {/* <ParticlesComponent id="particles" className='particles' />    */}
        </div>
          </MediaQuery>

  );
};

export default Hero;
