import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {useSelector} from "react-redux"

const Displaycounter = () => {
  const counter = useSelector((store)=>store.counter)
  return (
    <div> 
         <p className="lead mb-4">Counter current value:{counter}</p>
    </div>
  )
}

export default Displaycounter