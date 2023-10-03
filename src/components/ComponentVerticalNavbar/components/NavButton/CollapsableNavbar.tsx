import React from 'react'
import { CollapsibleIcon } from '../../../../assets/Images'

export const CollapsibleNavbar = () => {
  return (
    <div className='max-w-[20px] self-end fixed sm:hidden right-[50px] top-[50px]'>
        <img src={CollapsibleIcon} alt="#" />
    </div>
  )
}
