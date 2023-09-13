import React, { useState } from 'react'
import '/home/abhijeet/Desktop/Streaming_App/src/utils/FontStyles.css'


export const ComponentBigHeart = () => {

  const [isClicked, setIsClicked] = useState(true)

  const Svg = isClicked ? (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M20.84 4.60999C20.3292 4.099 19.7228 3.69364 19.0554 3.41708C18.3879 3.14052 17.6725 2.99817 16.95 2.99817C16.2275 2.99817 15.5121 3.14052 14.8446 3.41708C14.1772 3.69364 13.5708 4.099 13.06 4.60999L12 5.66999L10.94 4.60999C9.9083 3.5783 8.50903 2.9987 7.05 2.9987C5.59096 2.9987 4.19169 3.5783 3.16 4.60999C2.1283 5.64169 1.54871 7.04096 1.54871 8.49999C1.54871 9.95903 2.1283 11.3583 3.16 12.39L4.22 13.45L12 21.23L19.78 13.45L20.84 12.39C21.351 11.8792 21.7563 11.2728 22.0329 10.6053C22.3095 9.93789 22.4518 9.22248 22.4518 8.49999C22.4518 7.77751 22.3095 7.0621 22.0329 6.39464C21.7563 5.72718 21.351 5.12075 20.84 4.60999V4.60999Z" stroke="#6100C2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  ) : (
    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">
  <path d="M50 90C76.84 90 98 68.84 98 42.93C98 32.76 93.59 23.43 85.54 15.47C77.49 7.42 68.16 3 58 3C52.52 3 47.38 5.45 44.6 9.61C43.69 11.23 41.31 11.23 40.4 9.61C37.62 5.45 32.48 3 27 3C16.84 3 7.51 13.69 2.46 24.85C-2.58 36.01 -0.36 49.12 7.54 58.61L50 97.83L92.46 58.61C100.36 49.12 102.58 36.01 97.54 24.85C92.49 13.69 83.16 3 73 3C67.52 3 62.38 5.45 59.6 9.61C58.69 11.23 56.31 11.23 55.4 9.61C52.62 5.45 47.48 3 42 3C31.84 3 22.51 13.69 17.46 24.85C12.42 36.01 -0.8 49.12 4.54 58.61L47 97.83L47 63L53 63L53 97.83L95.46 58.61C100.8 49.12 87.58 36.01 82.54 24.85C77.49 13.69 68.16 3 58 3C52.52 3 47.38 5.45 44.6 9.61C43.69 11.23 41.31 11.23 40.4 9.61C37.62 5.45 32.48 3 27 3C16.84 3 7.51 13.69 2.46 24.85C-2.58 36.01 -0.36 49.12 4.54 58.61L47 97.83L47 63L50 63L50 90Z" fill="#FF0000"/>
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
