import React,{useState} from 'react'
import {AiOutlinePlusCircle} from 'react-icons/ai'
import {AiOutlineMinusCircle} from 'react-icons/ai'
const Questions = ({question ,solution}) => {
    const [showsolution,setshowsolution]=useState(false);
  return (
    <div>
        <div className='question1' onClick={(()=>{
          setshowsolution(!showsolution)
        })}>
            <h3>{question}</h3>
            <ps>
                {showsolution ?  <AiOutlineMinusCircle /> : <AiOutlinePlusCircle/> }
            </ps>
        </div>
        {showsolution && <p className='question1 solution'>{solution}</p>}
    </div>
  )
}

export default Questions