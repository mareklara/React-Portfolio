import React from 'react'
import PermContactCalendarOutlinedIcon from '@mui/icons-material/PermContactCalendarOutlined';
import ForwardToInboxOutlinedIcon from '@mui/icons-material/ForwardToInboxOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

export const ContactInfoIcons = () => {
  return (
    <div className='flex flex-col md:py-4'>
        <i className='mt-4'><PermContactCalendarOutlinedIcon/></i>
        <i className='mt-6'><ForwardToInboxOutlinedIcon/></i>
        <i className='mt-7'><LocationOnOutlinedIcon/></i>
    </div>
  )
}
