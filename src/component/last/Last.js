import React from 'react'
import logo1 from './img1.png'
import logo2 from './img2.png'
import logo3 from './img3.jpeg'
import { useNavigate } from 'react-router-dom'
import './Last.css'
const Last = () => {
    const Navigate=useNavigate();

    const textToCopy = "+91 94915 94874";
    const copyToClipboard = () => {
        const textarea = document.createElement('textarea');
        textarea.value = textToCopy;
        document.body.appendChild(textarea);
    
        textarea.select();
        textarea.setSelectionRange(0, 99999); 
    
        document.execCommand('copy');

        document.body.removeChild(textarea);

        alert('Text copied to clipboard');
      };
  return (
    <div className='main'>
        <div className='part1'>
            <div className='sub1'>
                <img src={logo1} alt='img' />
            </div>
            <div className='online-content'>
                <h1>Order online with<br />our simple <br /> checkout.</h1>
                <p>Lorem Ipsum is simply dummy text of the printing <br /> and typesetting industry. Lorem Ipsum has been the <br /> industry's standard dummy text ever since the 1500.</p>
                <button onClick={()=>Navigate('/faqpages')}>See our FAQ</button>
            </div>
        </div>
        <div className='part2'>
            <div  className='online-content'>
                <h1>Call our store and <br /> takeaway when it <br /> suits you best.</h1>
                <p>Lorem Ipsum is simply dummy text of the printing <br /> and typesetting industry. Lorem Ipsum has been the <br /> industry's standard dummy text ever since the 1500.</p>
                <button onClick={copyToClipboard}>ph. +91 94915 94874</button>
                
            </div>
            <div className='sub1'>
               <img src={logo2} alt='img' />
            </div>
        </div>
        <div className='part3'>
            <div className='sub1'>
                <img src={logo3} alt='img' />
            </div>
            <div className='part32'>
                <h1><span>Support </span>good food and local business.</h1>
            </div>
        </div> 
    </div>
  )
}

export default Last