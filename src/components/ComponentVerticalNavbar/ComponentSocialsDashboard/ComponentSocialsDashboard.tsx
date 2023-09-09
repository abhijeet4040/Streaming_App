import React from 'react'
import { NavButton } from '..'
import { CloudIcon, UsersIcon } from '../../../assets'

export const ComponentSocialsDashboard = () => {
  return (
    <div className='flex flex-col gap-[20px]'>
      <NavButton NavLogo={<UsersIcon/>} NavText='Community' NavRoute='/community'></NavButton>
      <NavButton NavLogo={<CloudIcon/>} NavText='Social' NavRoute='/social'></NavButton>
    </div>
  )
}
