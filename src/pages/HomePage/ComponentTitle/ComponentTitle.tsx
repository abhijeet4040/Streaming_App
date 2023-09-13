import React from 'react'
import '/home/abhijeet/Desktop/Streaming_App/src/utils/FontStyles.css'
import { ComponentCards } from './ComponentTitle/ComponentCards'
import { ComingSoonCards, TrendingCards } from '../../../utils/DummyData'


export const ComponentTitle = () => {
  return (
    <div className='bg-gradient-to-r from-violet-950 to-black p-[50px] flex flex-col gap-[32px] overflow-scroll'>
      <div className='CardHeadingFont'>Trending</div>
      <ComponentCards Cards={TrendingCards} CardWidth='275px'/>
      <div className='CardHeadingFont'>Coming Soon</div>
      <ComponentCards Cards={ComingSoonCards} CardWidth='400px'/>
    </div>
  )
}
