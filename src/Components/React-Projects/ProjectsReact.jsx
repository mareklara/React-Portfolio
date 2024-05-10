import React from 'react'
import MyImage from '/src//media/API.jpeg'
import { TodoApp } from '../Todo-List/TodoApp'

export const Projects = () => {
  return (
    <div className=''>
            <h2 className='text-black font-bold text-4xl py-4'>React Projects</h2>
            <div className='flex justify-evenly flex-wrap gap-4'>
                <div className='bg-neutral-300 w-80 h-60 rounded-2xl overflow-x-auto py-5'>
                    <TodoApp/>
                </div>
                <div className='bg-neutral-300 w-80 h-60 rounded-2xl overflow-x-auto py-5'>
                    <h2 className='mb-4'>Pokemon API</h2>
                    <a className='inline-block' href="https://github.com/mareklara/Pokemon-API.github.io" target='_blank'> <img className='rounded-2xl w-44 h-auto' src={MyImage} alt="" /></a>
                </div>
                <div className='bg-neutral-300 w-80 h-60 rounded-2xl overflow-x-auto py-5'>
                    <h2 className='mb-4'>React Testimonial Cards</h2>
                    <a className='inline-block' href="https://github.com/mareklara/Testimonial-Cards-React/tree/main/src" target='_blank'><button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">Cards</button></a>
                </div>
            </div>
    </div>
  )
}
