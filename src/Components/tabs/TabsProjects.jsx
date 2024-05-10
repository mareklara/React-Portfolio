import React, { useState } from 'react'

// import { TodoApp } from '../Todo-List/TodoApp'
import { Projects } from '../React-Projects/ProjectsReact'
import { JestTesting } from '../Jest-testing/JestTesting'
import { Websites } from '../websites/Websites'
import { CmsWeb } from '../CMS/CmsWeb'



export const TabsProjects = () => {

    const [toggleState, setToggleState] = useState(1)

    const toggleTab = (index)=>{
        setToggleState(index)
    }
    
  return (
    <div className='bg-slate-3200 w-full  md:'>
        <div className='flex justify-evenly bg-slate-300 py-4 rounded-t-2xl'>  
            <div className={toggleState === 1 ? 'border-b-8 border-blue-500': 'tabs cursor-pointer bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-4 px-4 border border-blue-500 hover:border-transparent rounded'}
            onClick={() => toggleTab(1)}>React Basic</div>
            <div className={toggleState === 3 ? 'border-b-8 border-blue-500' : 'cursor-pointer bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-4 px-4 border border-blue-500 hover:border-transparent rounded'}
             onClick={() => toggleTab(3)}>Testing Jest</div>
            <div className={toggleState === 2 ? 'border-b-8 border-blue-500' : 'cursor-pointer bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-4 px-4 border border-blue-500 hover:border-transparent rounded'}
             onClick={() => toggleTab(2)}>HTML/CSS/JS</div>
             <div className={toggleState === 4 ? 'border-b-8 border-blue-500' : 'cursor-pointer bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-4 px-4 border border-blue-500 hover:border-transparent rounded'}
             onClick={() => toggleTab(4)}>CMS Websites</div>
        </div>

        <div>
            <div className={toggleState === 1 ? 'block text-center' : 'hidden'}>
                <div>
                    <Projects/>
                </div>
            </div>

            <div className={toggleState === 3 ? 'block text-center' : 'hidden'}>
                <div>
                    <JestTesting/>
                </div>
            </div>

            <div className={toggleState === 2 ? 'block text-center' : 'hidden'}>
                <Websites/>
            </div>

            <div className={toggleState === 4 ? 'block text-center' : 'hidden'}>
                <CmsWeb/>
            </div>

            
        </div>
    </div>
  )
}
