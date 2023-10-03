import React from 'react'
import { ComponentCards } from '../../HomePage/ComponentTitle/ComponentCards/ComponentCards'
import { useAppSelector } from '../../../utils/hooks';

export const ComponentFavorites = () => {

  const  trendingCards = useAppSelector((state) => state.favorites.trendingCards.filter(c=>c.fav));
  
  return (
    <div className='bg-gradient-to-r from-violet-950 to-black h-[100vh] p-[50px]'>
      <div className='CardHeadingFont'>Favorites</div>
      <div>
      <ComponentCards Cards={trendingCards} CardWidth='275px'/>
      </div>
    </div>
  )
}
 