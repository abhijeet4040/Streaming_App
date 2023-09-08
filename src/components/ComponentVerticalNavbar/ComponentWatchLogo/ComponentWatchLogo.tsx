import React from 'react'
import { NavButton } from '../components/NavButton/NavButton'
import { CoffeeLogo } from '../../../assets/Icons/VerticalNavbar'
import { WatchLogoData } from '../Utils/DummyData'




export const ComponentWatchLogo = () => {
    const LogoText = WatchLogoData.map((data) => data);
  return (
    <div>
        <NavButton NavLogo={<CoffeeLogo/>} NavText={LogoText}/>
    </div>
  )
}

