import React from 'react'
import { NavButton } from '..'
import { CloudLogo, UsersLogo } from '../../../assets'

export const ComponentSocialsDashboard = () => {
  return (
    <div>
      <NavButton NavLogo={<UsersLogo/>} NavText='Community' NavRoute='/community'></NavButton>
      <NavButton NavLogo={<CloudLogo/>} NavText='Social' NavRoute='/social'></NavButton>
    </div>
  )
}
