import React from 'react'
import "../banner/Banner.css"
import { Link } from 'react-router-dom'
const Banner = () => {
  return (
    <div className='banner'>
        <p className='text'>we're open and available for takeaway & delivery.<bold><Link className='blinks' to="/order">Order Now</Link></bold> </p>
      
    </div>
  )
}

export default Banner