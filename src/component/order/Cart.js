import React, { useState } from 'react';
import './Cart.css'
import {RxCross2} from 'react-icons/rx'
const Cart = ({ cartItems })=> {
  const [wrong,setwrong]=useState(true);
  const handlewrong=()=>{
    setwrong(!wrong);
  }
  return (
    <div>
      {wrong && (<div className="cartpage">
      <RxCross2 className='cross' onClick={handlewrong}/>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>{item.title}hii</li>
        ))}
      </ul>
    </div>)}
    </div>
  )
}

export default Cart