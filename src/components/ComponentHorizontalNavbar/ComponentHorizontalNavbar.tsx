import React from 'react'
import { ComponentMenu } from './ComponentMenu/ComponentMenu'
import { ComponentSearchNotifyUser } from './ComponentSearchNotifyUser/ComponentSearchNotifyUser'
import '/home/abhijeet/Desktop/Streaming_App/src/utils/FontStyles.css'


export const ComponentHorizontalNavbar = () => {
  return (
    <div className='bg-black text-white  lg:flex p-[50px] lg:justify-between VerticalNavFont hidden '>
      <ComponentMenu/>
      <ComponentSearchNotifyUser/>
    </div>
  )
}
