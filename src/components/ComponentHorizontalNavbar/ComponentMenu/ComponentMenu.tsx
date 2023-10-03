import React from 'react'
import { MenuButton } from '../components/MenuButton'

export const ComponentMenu = () => {
  return (
    <div className='flex gap-[32px]'>
        <MenuButton buttonText='Movies'/>
        <MenuButton buttonText='Series'/>
        <MenuButton buttonText='Documentaries'/>
    </div>
  )
}
