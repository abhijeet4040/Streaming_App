import React from 'react'
import HomePage from './pages/HomePage/HomePage'
import { Route, Routes } from 'react-router-dom'
import { FavoritesPage } from './pages/FavoritesPage/FavoritesPage'
import { ComponentVerticalNavbar } from './components/ComponentVerticalNavbar/ComponentVerticalNavbar'
import { ComponentHorizontalNavbar } from './components/ComponentHorizontalNavbar/ComponentHorizontalNavbar'
import { TrendingPage } from './pages/TrendingPage/TrendingPage'


export const App = () => {
  return (
    <>
    <div className=' h-[100vh] flex flex-col sm:flex-row'>
      <ComponentVerticalNavbar />
      
      <div className='flex-col flex-1 overflow-x-hidden'>
        <ComponentHorizontalNavbar />
        <Routes>
          <Route path='/' element={<HomePage />}></Route> 
          <Route path='favorites' element={<FavoritesPage />}></Route>
          <Route path='trending' element={<TrendingPage />}></Route>
        </Routes>
      </div>
    </div>
    </>
  )
}

