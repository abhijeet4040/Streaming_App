import React from 'react'
import { NavButton } from '..'
import { LogOutIcon, SlidersIcon } from '../../../assets'

export const ComponentProfileControlDashboard = () => {
  return (
    <div>
      <NavButton NavLogo={<SlidersIcon/>} NavText='Settings' NavRoute='/settings'></NavButton>
      <NavButton NavLogo={<LogOutIcon/>} NavText='logout' NavRoute='/logout'></NavButton>
    </div>
  )
}

