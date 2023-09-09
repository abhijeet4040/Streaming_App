import React from 'react'
import { ComponentWatchNow } from '../../../components/Buttons/ComponentWatchNow'
import { ComponentSmallHeart } from '../../../components/Buttons/ComponentSmallHeart'
import '/home/abhijeet/Desktop/Streaming_App/src/utils/FontStyles.css'


export const ComponentHeader = () => {
  return (
    <>
      <div>
        <div className='TitleFont'>Insider</div>
        <div className='SubTitleFont'>2022 | Comedy horror | 1 Season</div>
        <div>
          <ComponentWatchNow />
          <ComponentSmallHeart />
        </div>
      </div>
    </>
  )
}
