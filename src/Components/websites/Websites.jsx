import React from 'react'
import Myastro from '/src/media/astroscale.png'

export const Websites = () => {
  return (
    <div className=''>
        <h2 className='text-black font-bold text-4xl py-4'>Websites</h2>
        <div className='flex justify-evenly flex-wrap gap-4'>
            <div className='bg-neutral-300 w-80 h-60 rounded-2xl py-5'>
                <h2 className='text-black font-bold text-4xl py-1'>AstroScale</h2>
                <a className='inline-block' href="https://github.com/mareklara/AstroScale-Website/tree/main/AstroScale" target='_blank'> <img className='rounded-2xl w-44 h-auto' src={Myastro} alt="" /></a>
            </div>
        </div>
    </div>
  )
}
