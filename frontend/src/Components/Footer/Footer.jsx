import React from 'react'
import './Footer.css'
import instagram_icon from '../Assets/instagram_icon.png'
import facebook_icon from '../Assets/facebook_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'
import shooping_bag from '../Assets/shooping_bag.jpg'


function Footer() {
  return (
    <div className='footer'>
    <div className='footer-logo'>
        <img className='footer-shooper' src={shooping_bag} alt=''/>
        <p>Top Collections</p>
    </div>
    <ul className='footer-links'>
        <li>Company</li>
        <li>Product</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
    </ul>
    <div className='footer-social-icon'>
    <div className='footer-icons-container'>
        <img className='footer-img' src={instagram_icon} alt=''/>
    </div>
    <div className='footer-icons-container'>
        <img className='footer-img' src={facebook_icon} alt=''/>
    </div>
    <div className='footer-icons-container'>
        <img className='footer-img' src={whatsapp_icon} alt=''/>
    </div>
    </div>
    <div className='footer-copyright'>
    <hr/>
    <p>&copy; Copyright@2023 - All Right Reserved.</p>

    </div>
      
    </div>
  )
}

export default Footer
