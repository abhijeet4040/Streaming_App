import React from 'react'

interface MenuButtonProps{
    buttonText: string
}

export const MenuButton:React.FC<MenuButtonProps> = ({buttonText}) => {
  return (
    <div>{buttonText}</div>
  )
}
