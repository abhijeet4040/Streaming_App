import React from 'react'
import HomePage from './pages/HomePage/HomePage'
import { Route, Routes } from 'react-router-dom'
import { FavoritesPage } from './pages/FavoritesPage/FavoritesPage'
import { ComponentVerticalNavbar } from './components/ComponentVerticalNavbar/ComponentVerticalNavbar'
import { Trendingpage } from './pages/TrendingPage/Trendingpage'
import { ComponentHorizontalNavbar } from './components/ComponentHorizontalNavbar/ComponentHorizontalNavbar'


export const App = () => {
  return (
  <>
  <div className='flex'>
    <ComponentVerticalNavbar/>
    <ComponentHorizontalNavbar/>
   <Routes>
    <Route path='/' element={<HomePage/>}></Route>
    <Route path='favorites' element={<FavoritesPage/>}></Route>
    <Route path='trending' element={<Trendingpage/>}></Route>
   </Routes>
   </div>
  </>
  )
}

