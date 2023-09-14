import React from 'react'
import { CollapsibleIcon } from '../../../../assets/Images'

export const CollapsibleNavbar = () => {
  return (
    <div className='max-w-[20px] self-end absolute sm:hidden'>
        <img src={CollapsibleIcon} alt="#" />
    </div>
  )
}
