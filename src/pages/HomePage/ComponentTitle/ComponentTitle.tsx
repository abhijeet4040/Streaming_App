import React from 'react'
import '/home/abhijeet/Desktop/Streaming_App/src/utils/FontStyles.css'
import { ComponentCards } from './ComponentCards/ComponentCards'
import { ComingSoonCards } from '../../../utils/DummyData'
import { useAppSelector } from '../../../utils/hooks';




export const ComponentTitle = () => {
  const { trendingCards } = useAppSelector((state) => state.favorites);
  return (
    <div className='bg-gradient-to-r from-violet-950 to-black p-[50px] flex flex-col gap-[32px] overflow-scroll'>
      <div className='CardHeadingFont'>Trending</div>
      <ComponentCards Cards={trendingCards} CardWidth='275px'/>
      <div className='CardHeadingFont'>Coming Soon</div>
      <ComponentCards Cards={ComingSoonCards} CardWidth='350px'/>
    </div>
  )
}
