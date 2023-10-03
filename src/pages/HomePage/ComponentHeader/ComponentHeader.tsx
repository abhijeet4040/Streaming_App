import React from 'react'
import { ComponentWatchNow } from '../../../components/Buttons/ComponentWatchNow'
import '/home/abhijeet/Desktop/Streaming_App/src/utils/FontStyles.css'
import { ComponentBigHeart } from '../../../components/Buttons/ComponentBigHeart'


export const ComponentHeader = () => {
  return (
    <>
      <div className='headerBg bg-cover p-[50px] flex flex-col gap-[30px]'>
        <div className='TitleFont mt-[100px]'>Insider</div>
        <div className='SubTitleFont'>2022 | Comedy horror | 1 Season</div>
        <div className='flex gap-[10px]'>
          <ComponentWatchNow />
          <ComponentBigHeart/>
        </div>
      </div>
    </>
  )
}
