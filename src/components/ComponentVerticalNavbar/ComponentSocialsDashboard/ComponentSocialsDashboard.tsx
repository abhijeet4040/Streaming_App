import React from 'react'
import { NavButton } from '..'
import { CloudIcon, UsersIcon } from '../../../assets'

export const ComponentSocialsDashboard = () => {
  return (
    <div>
      <NavButton NavLogo={<UsersIcon/>} NavText='Community' NavRoute='/community'></NavButton>
      <NavButton NavLogo={<CloudIcon/>} NavText='Social' NavRoute='/social'></NavButton>
    </div>
  )
}
