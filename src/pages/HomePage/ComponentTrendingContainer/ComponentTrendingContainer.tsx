import React from 'react'
import '/home/abhijeet/Desktop/Streaming_App/src/utils/FontStyles.css'
import { ComponentTrendingCard } from './ComponentTrendingCard/ComponentTrendingCard'
import { TrendingCards } from '../../../utils/DummyData'


export const ComponentTrendingContainer = () => {
  return (
    <div className='bg-gradient-to-r from-violet-950 to-black p-[50px] flex flex-col'>
        <div className='CardHeadingFont'>Trending</div>
        
        <ComponentTrendingCard TrendingCards={TrendingCards}/>
        

    </div>
  )
}
