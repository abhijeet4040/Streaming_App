import React, { useState } from 'react'
import '/home/abhijeet/Desktop/Streaming_App/src/utils/FontStyles.css'


export const ComponentBigHeart = () => {

  const [isClicked, setIsClicked] = useState(true)

  const Svg = isClicked ? (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M20.84 4.60999C20.3292 4.099 19.7228 3.69364 19.0554 3.41708C18.3879 3.14052 17.6725 2.99817 16.95 2.99817C16.2275 2.99817 15.5121 3.14052 14.8446 3.41708C14.1772 3.69364 13.5708 4.099 13.06 4.60999L12 5.66999L10.94 4.60999C9.9083 3.5783 8.50903 2.9987 7.05 2.9987C5.59096 2.9987 4.19169 3.5783 3.16 4.60999C2.1283 5.64169 1.54871 7.04096 1.54871 8.49999C1.54871 9.95903 2.1283 11.3583 3.16 12.39L4.22 13.45L12 21.23L19.78 13.45L20.84 12.39C21.351 11.8792 21.7563 11.2728 22.0329 10.6053C22.3095 9.93789 22.4518 9.22248 22.4518 8.49999C22.4518 7.77751 22.3095 7.0621 22.0329 6.39464C21.7563 5.72718 21.351 5.12075 20.84 4.60999V4.60999Z" stroke="#6100C2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  ) : (
    <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200">
    
    <path d="M100,180 C40,120 0,80 0,40 C0,18 18,0 40,0 C58,0 77,14 100,40 C123,14 142,0 160,0 C182,0 200,18 200,40 C200,80 160,120 100,180Z" fill="red"/>
    
    
    <text x="50" y="120" font-family="Arial" font-size="24" fill="white">Prashant</text>
  </svg>
  

  )
    const handleClick = () => {
      setIsClicked(!isClicked)
    }

  return (
    <div className='p-[16px] ButtonColor w-[60px] ' onClick={handleClick} >

      {Svg}
    </div>
  )
}
