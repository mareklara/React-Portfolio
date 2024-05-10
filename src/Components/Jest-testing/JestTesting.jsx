import React from 'react'
import Myjest from '/src/media/jest.png'

export const JestTesting = () => {
  return (
    <div>
        <h2 className='text-black font-bold text-4xl py-4'>Testing Jest</h2>
        <div className='flex justify-evenly flex-wrap gap-4'>
           <div className='bg-neutral-300 w-80 h-60 rounded-2xl  py-5'>
                <p className='font-bold text-lg'>Jest JS</p>
                <a className='inline-block' href="https://github.com/mareklara/Jest-js/tree/main/src/tests/base-pruebas" target='_blank'> <img className='rounded-2xl w-44 h-auto' src={Myjest} alt="" /></a>
           </div>
        </div>
    </div>
  )
}
