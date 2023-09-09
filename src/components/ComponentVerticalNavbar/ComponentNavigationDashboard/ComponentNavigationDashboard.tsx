import React from 'react'
import { NavButton } from '..'
import { CalenderIcon, FavoriteIcon, FilmIcon, TrendingIcon } from '../../../assets'

export const ComponentNavigationDashboard = () => {
  return (
    <div>
      <NavButton NavLogo={<FilmIcon/>} NavText='Home' NavRoute='/'/>
      <NavButton NavLogo={<FavoriteIcon/>} NavText='Favorites' NavRoute='/favorites'/>
      <NavButton NavLogo={<TrendingIcon/>} NavText='Trending' NavRoute='/trending'/>
      <NavButton NavLogo={<CalenderIcon/>} NavText='Coming Soon' NavRoute='/comingsoon'/>
    </div>
  )
}

