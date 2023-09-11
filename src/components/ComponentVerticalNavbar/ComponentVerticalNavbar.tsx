import React from 'react'
import { ComponentNavigationDashboard, ComponentWatchLogo, ComponentProfileControlDashboard, ComponentSocialsDashboard } from '.'


export const ComponentVerticalNavbar = () => {
  return (
    <div className='flex flex-col bg-black p-[50px] justify-between h-[100%]'>
        <ComponentWatchLogo/>
        <ComponentNavigationDashboard/>
        <ComponentSocialsDashboard/>
        <ComponentProfileControlDashboard/>
    </div>
  )
}

