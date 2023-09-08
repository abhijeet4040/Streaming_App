import React from 'react'
import { NavLink } from 'react-router-dom'

interface NavButtonProps {
    NavLogo: JSX.Element
    NavText: Array<string>
}



export const NavButton:React.FC <NavButtonProps> = ( { NavLogo, NavText } ) => {
  return (
    <div>
        {NavLogo}
        <NavLink to={'/'}>{NavText}</NavLink>
    </div>
  )
}

