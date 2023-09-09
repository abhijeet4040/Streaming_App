import React from 'react'
import { ComponentMenu } from './ComponentMenu/ComponentMenu'
import { ComponentSearchNotifyUser } from './ComponentSearchNotifyUser/ComponentSearchNotifyUser'

export const ComponentHorizontalNavbar = () => {
  return (
    <div className='bg-black text-white flex p-[50px] justify-between'>
      <ComponentMenu/>
      <ComponentSearchNotifyUser/>
    </div>
  )
}
