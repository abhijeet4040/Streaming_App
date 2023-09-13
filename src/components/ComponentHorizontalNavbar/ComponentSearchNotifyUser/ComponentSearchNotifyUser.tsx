import React from 'react'
import { SearchIcon } from '../../../assets/Icons/HorizontalNavbar/SearchIcon'
import { BellIcon } from '../../../assets/Icons/HorizontalNavbar/BellIcon'
import { UserImgIcon } from '../../../assets'
import { MenuButton } from '../components/MenuButton'

export const ComponentSearchNotifyUser = () => {
  return (
    <>
    <div className='flex gap-[24px]'>
      <div className='flex gap-[24px]'>
      {<SearchIcon/>}
        {<BellIcon/>}
      </div>
      <div className='flex gap-[10px]'>
        {<UserImgIcon/>}
        <MenuButton buttonText='Strawberry'/>
      </div>
    </div>  
    </>
  )
}
