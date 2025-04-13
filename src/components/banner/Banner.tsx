import React from 'react'
import Button from '../utils/Button'
import MediaQuery from '../utils/MediaQuery'

export const Banner = () => {
  return (
    <MediaQuery>
      <div className='p-10 lg:p-20 my-12 text-[clamp(1rem,10vw,7rem)] font-extrabold rounded-xl font-mitr uppercase text-center lg:leading-[6.5rem] bg-[url(/kk.png)] bg-contain bg-no-repeat bg-center bg-fixed bg-blue'>
          <h1 className='text-white'>be bold</h1>
          <h1 className='text-panel1'>be brillant </h1>
          <h1 className='text-white'>with nextgen </h1>
          <div className="mt-6 w-full flex justify-center items-center">
              <Button title={'start now!'} link={''}/>
          </div>
      </div>
    </MediaQuery>
  )
}
