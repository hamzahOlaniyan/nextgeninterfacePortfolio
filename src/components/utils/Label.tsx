import React from 'react'

export const Label = ({text}:{text:string}) => {
  return (
    <h1 className='w-full text-3xl font-mitr uppercase font-black text-label italic'>* {text}!</h1>
  )
}
