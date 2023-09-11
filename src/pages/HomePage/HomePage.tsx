import React from 'react'
import { ComponentHeader } from './ComponentHeader/ComponentHeader'
import { ComponentTrendingContainer } from './ComponentTrendingContainer/ComponentTrendingContainer'

const HomePage = () => {
  return (
    <div className=''>
      <ComponentHeader/>
      <ComponentTrendingContainer/>
    </div>
  )
}

export default HomePage