import React from 'react'
import { ComponentHeader } from './ComponentHeader/ComponentHeader'
import { ComponentTrendingCards } from './ComponentTrendingContainer/ComponentTrendingContainer'

const HomePage = () => {
  return (
    <div className=''>
      <ComponentHeader/>
      <ComponentTrendingCards/>
    </div>
  )
}

export default HomePage