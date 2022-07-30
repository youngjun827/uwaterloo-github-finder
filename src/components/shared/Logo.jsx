import React from 'react'

import logo from '../assets/University-of-Waterloo.png'

function Logo() {
  return (   
    <>
        <img src={logo} alt="Logo" className='h-[50px] cursor-pointer'/>
    </>  
  )
}

export default Logo