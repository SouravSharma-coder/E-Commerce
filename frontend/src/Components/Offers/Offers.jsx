import React from 'react'
import './Offers.css'
import exclusive_offer from '../Assets/exclusive_offer.jpg'


function Offers() {
  return (
    <div className='offers'>
    <div className='offers-left'>
      <h1>Exclusive</h1>
      <h1>Offers For You</h1>
      <p>ONLY ON BEST SELLERS PRODUCTS</p>
      <button>Check Now</button>
    </div>
    <div className='offers-right'>
   <img src={exclusive_offer} alt=''/>

    </div>

      
    </div>
  )
}

export default Offers
