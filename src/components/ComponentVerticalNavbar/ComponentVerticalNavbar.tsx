import React from 'react'
import { ComponentNavigationDashboard, ComponentWatchLogo, ComponentProfileControlDashboard, ComponentSocialsDashboard } from '.'
import { CollapsibleNavbar } from './components/NavButton/CollapsableNavbar'


export const ComponentVerticalNavbar = () => {
  return (
   
    <div className='flex flex-col bg-black p-[50px] justify-between h-[100%] gap-[10px]'>
        <CollapsibleNavbar/>
        <ComponentWatchLogo/>
        <ComponentNavigationDashboard/>
        <ComponentSocialsDashboard/>
        <ComponentProfileControlDashboard/>
    </div>
  )
}

