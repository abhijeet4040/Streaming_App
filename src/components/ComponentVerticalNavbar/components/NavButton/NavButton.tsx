import React from 'react'
import { NavLink } from 'react-router-dom'
import '/home/abhijeet/Desktop/Streaming_App/src/utils/FontStyles.css'

interface NavButtonProps {
    NavLogo: JSX.Element
    NavText: string
    NavRoute: string
}

export const NavButton:React.FC <NavButtonProps> = ( { NavLogo, NavText,NavRoute } ) => {
  return (
    <div className=' flex gap-[10px] '>
        {NavLogo}
        <NavLink to={NavRoute}>{NavText}</NavLink>
    </div>
  )
}

