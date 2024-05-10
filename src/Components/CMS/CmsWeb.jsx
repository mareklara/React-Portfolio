import React from 'react'
import Myleather from '/src/media/leathercms.png'
import Mygodoy from '/src/media/godoy.png'

export const CmsWeb = () => {
  return (
    <div>
        <div>
            <h2 className='text-black font-bold text-4xl py-4'>CMS</h2>
            <div className='flex justify-evenly flex-wrap gap-4'>
            <div className='bg-neutral-300 w-80 h-60 rounded-2xl py-4 px-3.5'>
                <p className='font-bold text-lg'>Leather Website</p>
                <a className='inline-block' href="https://www.marekleather.online/" target='_blank'> <img className='rounded-2xl w-50 h-auto' src={Myleather} alt="" /></a>
            </div>

            <div className='bg-neutral-300 w-80 h-60 rounded-2xl py-4 px-3.5'>
                <p className='font-bold text-lg'>Lotion Website</p>
                <a className='inline-block' href="https://god-oy.online/" target='_blank'> <img className='rounded-2xl w-50 h-auto' src={Mygodoy} alt="" /></a>
            </div>
            </div>
        </div>
    </div>
  )
}
