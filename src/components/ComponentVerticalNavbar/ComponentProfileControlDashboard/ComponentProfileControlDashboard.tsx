import React from 'react'
import { NavButton } from '..'
import { LogOutLogo, SlidersLogo } from '../../../assets'

export const ComponentProfileControlDashboard = () => {
  return (
    <div>
      <NavButton NavLogo={<SlidersLogo/>} NavText='Settings' NavRoute='/settings'></NavButton>
      <NavButton NavLogo={<LogOutLogo/>} NavText='logout' NavRoute='/logout'></NavButton>
    </div>
  )
}

