import React from 'react'
import Myimage from '../media/profilePic.png'


export const Profile = ({name,carrer}) => {
  return (
    <>
        <img className='rounded-t-2xl rounded-b-2xl mx-auto size-36 mt-4 md:w-34 h-auto' src={Myimage} alt="" />
        <h1 className='font-serif text-xl font-extrabold tracking-widest mt-4 md:text-lg'>{name}</h1>
        <h2 className='font-serif text-xl border-b-4 border-current'>{carrer}</h2>
    </>
    
  )
}
