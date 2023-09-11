import React from 'react'
import { ComponentHeader } from './ComponentHeader/ComponentHeader'
import { ComponentTitle } from './ComponentTrending/ComponentTitle'

const HomePage = () => {
  return (
    <div className='flex flex-col'>
      <ComponentHeader/>
      
      <ComponentTitle />
      <ComponentTitle/>
      
      
      
    </div>
  )
}

export default HomePage