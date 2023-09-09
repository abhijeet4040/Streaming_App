import React from 'react'
import { SearchIcon } from '../../../assets/Icons/HorizontalNavbar/SearchIcon'
import { BellIcon } from '../../../assets/Icons/HorizontalNavbar/BellIcon'
import { UserImgIcon } from '../../../assets'
import { MenuButton } from '../components/MenuButton'

export const ComponentSearchNotifyUser = () => {
  return (
    <>
      <div>
      {<SearchIcon/>}
        {<BellIcon/>}
      </div>
      <div>
        {<UserImgIcon/>}
        <MenuButton buttonText='Strawberry'/>
      </div>
        
    </>
  )
}
