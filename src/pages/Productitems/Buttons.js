import React from 'react'
import '../../component/order/Order.css'
const Buttons = ({ categories, handleCategoryChange }) => {
  return (
    <div className='o-btn'>
        {categories.map((category) => (
        <button  key={category} onClick={() => handleCategoryChange(category)}>
          {category}
        </button>
      ))}
    </div>
  )
}

export default Buttons