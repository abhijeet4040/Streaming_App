import React, { useState } from 'react'
import { ComponentNavigationDashboard, ComponentWatchLogo, ComponentProfileControlDashboard, ComponentSocialsDashboard } from '.'
import { CollapsibleNavbar } from './components/NavButton/CollapsableNavbar'


export const ComponentVerticalNavbar = () => {

  const [isNavbarCollapsed, setIsNavbarCollapsed] = useState(false)

  const toggleNavbar = () => {
    setIsNavbarCollapsed(!isNavbarCollapsed)
  }

  return (
   <>
   <div onClick={toggleNavbar}>
   <CollapsibleNavbar/>
   </div>
    <div className={`flex flex-col bg-black p-[50px] justify-between h-[100%] gap-[10px] ${isNavbarCollapsed ? 'hidden' : ''}`} >
        
        <ComponentWatchLogo/>
        <ComponentNavigationDashboard/>
        <ComponentSocialsDashboard/>
        <ComponentProfileControlDashboard/>
    </div>
    </>
  )
}

