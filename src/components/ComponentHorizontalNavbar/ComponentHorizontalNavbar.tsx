import React from 'react'
import { ComponentMenu } from './ComponentMenu/ComponentMenu'
import { ComponentSearchNotifyUser } from './ComponentSearchNotifyUser/ComponentSearchNotifyUser'
import '/home/abhijeet/Desktop/Streaming_App/src/utils/FontStyles.css'


export const ComponentHorizontalNavbar = () => {
  return (
    <div className='bg-black text-white flex p-[50px] justify-between VerticalNavFont'>
      <ComponentMenu/>
      <ComponentSearchNotifyUser/>
    </div>
  )
}
