import React from 'react'
import { NavButton } from '../components/NavButton/NavButton'
import { CoffeeIcon } from '../../../assets'

export const ComponentWatchLogo = () => {
  
  return (
    <div className='WatchNowFont flex '>
        <NavButton NavLogo={<CoffeeIcon/>} NavText={'Watch'} NavRoute='/'/>
    </div>
  )
}

