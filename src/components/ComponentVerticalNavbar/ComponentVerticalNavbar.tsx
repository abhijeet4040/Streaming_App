import React from 'react'
import { ComponentNavigationDashboard, ComponentWatchLogo, ComponentProfileControlDashboard, ComponentSocialsDashboard } from '.'


export const ComponentVerticalNavbar = () => {
  return (
    <div className=' flex-col bg-black'>
        <ComponentWatchLogo/>
        <ComponentNavigationDashboard/>
        <ComponentSocialsDashboard/>
        <ComponentProfileControlDashboard/>
    </div>
  )
}

