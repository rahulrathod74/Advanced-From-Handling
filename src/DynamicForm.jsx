import { useRef, useState } from "react"
import React from 'react'

const DynamicForm = () => {
    const inputRef1=useRef(null)
    const inputRef2=useRef(null)
    const inputRef3=useRef(null)
    const[data,setData]=useState("")
    function handleTab(e,ref){
       if(e.key=="Tab"){
        e.preventDefault()
        ref.current.focus()
       }
    }
  return (
    <div>
        <input ref={inputRef1} onKeyDown={(e)=>handleTab(e,inputRef2)} type="text" placeholder="field 1"/>
        <input ref={inputRef2} onKeyDown={(e)=>handleTab(e,inputRef3)} type="text" placeholder="field 2"/>
        <input ref={inputRef3} onKeyDown={(e)=>handleTab(e,inputRef1)}type="text" placeholder="field 3"/>
    </div>
  )
}

export default DynamicForm