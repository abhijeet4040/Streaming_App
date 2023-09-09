import React from 'react'
import { NavLink } from 'react-router-dom'

interface NavButtonProps {
    NavLogo: JSX.Element
    NavText: string
    NavRoute: string
}

export const NavButton:React.FC <NavButtonProps> = ( { NavLogo, NavText,NavRoute } ) => {
  return (
    <div className='text-white flex gap-[10px]'>
        {NavLogo}
        <NavLink to={NavRoute}>{NavText}</NavLink>
    </div>
  )
}

