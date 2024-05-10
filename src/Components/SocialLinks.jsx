import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';

import React from 'react'


export const SocialLinks = () => {
  return (
   <div className='border-b-4 border-current flex justify-center justify-evenly bg-slate-200 rounded-tr-2 bg-stone-300 md:w-64 md:rounded-t-lg md:rounded-b-lg md:border-0'>
        <div className=' rounded-xl w-7 h-7 cursor-pointer'>
            <a href='https://www.linkedin.com/in/marcotrejolara/' target='_blank'><LinkedInIcon/></a>
        </div>

        <div className='bg rounded-xl w-7 h-7 cursor-pointer'>
            <a href='https://github.com/mareklara' target='_blank'><GitHubIcon/></a>
        </div>

        <div className='rounded-xl w-7 h-7 cursor-pointer'>
            <a href="mailto:marek_lara@hotmail.com" target='_blank'><AlternateEmailIcon/></a>
        </div>
   </div>
  )
}
