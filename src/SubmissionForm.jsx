import React,{useRef, useState} from 'react'

const SubmissionForm = () => {
    const inputRef1=useRef(null)
    const inputRef2=useRef(null)
    const [error,setError]=useState("")
    function handleSubmit(e){
        e.preventDefault()

        const FormData={
            field1:inputRef1.current.value,
            field2:inputRef2.current.value,
        }
        console.log(FormData)
        if(FormData.field1==""){
            setError("Field 1  cannot be empty ")
            return;
        }
        if(FormData.field2==""){
            setError("Field 2  cannot be empty ")
            return;
        }
    }
  return (
    <form onSubmit={handleSubmit}>
        <input ref={inputRef1} type="text" placeholder='field1'/> 
        <input  ref={inputRef2}type="text" placeholder='field2'/>
        {error && <p style={{color:"red"}}>{error}</p>}
        <button type='submit'>Submit</button> 
    </form>
  )
}

export default SubmissionForm