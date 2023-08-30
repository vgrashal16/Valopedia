import React from 'react'
import  logo  from '../assets/logo.svg'
function Navbar() {
  return (
    <div className='navbar'>
      <img src={logo}></img>
      <span>Valopedia</span>
    </div>
  )
}

export default Navbar
