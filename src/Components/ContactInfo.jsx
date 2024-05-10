import React from 'react'

export const ContactInfo = () => {
  return (
    <div>
        <div className='flex flex-col items-start text-sm my-5'>
            <p>Phone</p>
            <p>512-773-9070</p>
        </div>

        <div className='flex flex-col items-start text-sm my-3'>
            <p>Email</p>
            <p>marek_lara@hotmail.com</p>
        </div>

        <div className='flex flex-col items-start text-sm md:mb-5'>
            <p>Location</p>
            <p>Jarrell Tx, USA</p>
        </div>
    </div>
  )
}
