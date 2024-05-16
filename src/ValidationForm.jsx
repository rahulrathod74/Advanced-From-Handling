import { useRef ,useState} from "react"
import React from 'react'

const ValidationForm = () => {
    const inputRef=useRef(null)
    const [isVaild,setIsValid]=useState(false)
    const handleValidation=()=>{
        setIsValid(inputRef.current.value.length >= 5)
        
    }
  return (
    <div>
        <input ref={inputRef} onChange={handleValidation} type="text" placeholder="Enter at least 5 characters"
        style={{borderColor: isVaild ? "green":"red"}}
        />
        {isVaild ? (<p>valid Input</p>):<p>Input must contain at least 5 characters</p>}
    </div>
  )
}

export default ValidationForm