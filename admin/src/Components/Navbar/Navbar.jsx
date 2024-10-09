// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Navbar.css'
import navlogo from '../../assets/logo.jpg'
import navProfile from '../../assets/nav-Profile.png'

function Navbar() {
  return (
    <div className='navbar'>
      <img src={navlogo} alt='/' className='nav-logo'/>
      <img src={navProfile} alt='' className='nav-profile'/>
    </div>
  )
}

export default Navbar
