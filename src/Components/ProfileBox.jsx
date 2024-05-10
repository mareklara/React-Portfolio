import React from 'react'
import { Profile } from './Profile'
import { SocialLinks } from './SocialLinks'
import { ContactInfo } from './ContactInfo'
import { ContactInfoIcons } from './ContactInfoIcons'
import { CvButton } from './CvButton'
import { ClockTime } from './Clock/ClockTime'




export const ProfileBox = () => {
  return (
    <div className='border-r-4 border-neutral-400 rounded-tr-2xl'>

      <div className='flex truncate  h-64 bg-slate-200 md:flex-col md:h-screen md:w-80 rounded-tr-2xl md:flex md:align-content'>
        <div className='bg-slate-200 border-2 rounded-l-2xl flex flex-col items-center justify-evenly md:rounded-tr-2xl rounded-tl-none rounded-bl-none w-80'>
          <Profile
          name={'Marco Lara'}
          carrer={'Front-End Developer'}/>
        </div>

        <div>
          <ClockTime/>
        </div>
        

        <div className='flex flex-col justify-evenly w-full bg-stone-300 md:w-80  md:h-screen md:bg-slate-200 md:items-center'>
          <div>
            <SocialLinks/>
          </div>
          <div className='flex justify-center justify-evenly bg-stone-300 md:rounded-t-2xl md:rounded-b-2xl md:w-72'>
            <ContactInfoIcons/>
            <ContactInfo/>
          </div>

          <div className='flex justify-center rounded-br-2x'>
            <CvButton/>
          </div>
        </div>
      </div>

    </div>
  )
}
