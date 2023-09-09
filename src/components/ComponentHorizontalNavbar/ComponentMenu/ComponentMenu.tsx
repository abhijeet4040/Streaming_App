import React from 'react'
import { MenuButton } from '../components/MenuButton'

export const ComponentMenu = () => {
  return (
    <div className='flex'>
        <MenuButton buttonText='Movies'/>
        <MenuButton buttonText='Series'/>
        <MenuButton buttonText='Documentaries'/>
    </div>
  )
}
