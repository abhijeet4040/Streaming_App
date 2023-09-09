import React from 'react'
import { NavButton } from '..'
import { CalenderLogo, FavoriteLogo, FilmLogo, TrendingLogo } from '../../../assets'

export const ComponentNavigationDashboard = () => {
  return (
    <div>
      <NavButton NavLogo={<FilmLogo/>} NavText='Home' NavRoute='/'/>
      <NavButton NavLogo={<FavoriteLogo/>} NavText='Favorites' NavRoute='/favorites'/>
      <NavButton NavLogo={<TrendingLogo/>} NavText='Trending' NavRoute='/trending'/>
      <NavButton NavLogo={<CalenderLogo/>} NavText='Coming Soon' NavRoute='/comingsoon'/>
    </div>
  )
}

