import { useRef } from 'react'

import './App.css'
import DynamicForm from './DynamicForm'
import ValidationForm from './ValidationForm'
import SubmissionForm from './SubmissionForm'

function App() {
  

  return (
    <>
     <h1>Dynamic From with useRef</h1>
     <DynamicForm/>
     <h2>Input validation</h2>
     <ValidationForm/>
     <h2>Custom From Submission handling</h2>
     <SubmissionForm/>
    </>
  )
}

export default App
