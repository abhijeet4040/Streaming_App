import React from 'react'
import { NavButton } from '..'
import { LogOutIcon, SlidersIcon } from '../../../assets'

export const ComponentProfileControlDashboard = () => {
  return (
    <div className='flex flex-col gap-[20px] VerticalNavFont'>
      <NavButton NavLogo={<SlidersIcon/>} NavText='Settings' NavRoute='/settings'></NavButton>
      <NavButton NavLogo={<LogOutIcon/>} NavText='logout' NavRoute='/logout'></NavButton>
    </div>
  )
}

