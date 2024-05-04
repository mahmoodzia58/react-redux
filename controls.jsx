import React, { useRef } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {useDispatch} from 'react-redux'

const Controls = () => {
 const dispatch = useDispatch()
 const inputElement = useRef()

 const  handleIncrement =()=>{
  dispatch({type:"Increment"})
 }
 const  handleDecrement =()=>{
  dispatch({type:"Decrement"})
 }
 const  handleAdd =()=>{
  dispatch({type:"Add" , payload:{num:inputElement.current.value}})
  inputElement.current.value ="";
 }
 const  handleSubtract =()=>{
  dispatch({type:"Subtract" , payload:{num:inputElement.current.value}})
  inputElement.current.value ="";
 }
 const  handePrivacytoggle =()=>{
  dispatch({type:"privacy_toggle" })
  
 }
  return (
   <>
    <div className='gap-2 d-flex justify-content-center'>
          <button type="button" class="btn btn-primary" onClick={ handleIncrement}>+1</button>
<button type="button" class="btn btn-secondary" onClick={handleDecrement}>-1</button>
<button type="button" class="btn btn-warning" onClick={handePrivacytoggle} >Privacy toggle</button>
    </div>
  

    <div className='gap-2 d-flex justify-content-center control-row'>
          <input type="text" placeholder='enter number' className='number-input' ref={inputElement} />
<button type="button" class="btn btn-info" onClick={handleAdd} >Add</button>
<button type="button" class="btn btn-danger" onClick={handleSubtract}>subtract</button>
    </div>
   </>
  )
}

export default Controls