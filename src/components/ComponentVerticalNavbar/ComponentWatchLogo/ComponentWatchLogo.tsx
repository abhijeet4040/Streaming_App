import React from 'react'
import { NavButton } from '../components/NavButton/NavButton'
import { CoffeeLogo } from '../../../assets'

export const ComponentWatchLogo = () => {
  
  return (
    <div>
        <NavButton NavLogo={<CoffeeLogo/>} NavText={'Watch'} NavRoute='/'/>
    </div>
  )
}

