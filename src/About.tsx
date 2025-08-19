import React from 'react'
import { useNavigate } from 'react-router-dom'


const About:React.FC = () => {

  // Retrieving the navigate function from a hook
  // useNavigate is a React Router hook that returns a function for navigation.
  // General statement about hooks: Some hooks (like useState, useReducer) return arrays/objects containing multiple values. 
  // But useNavigate specifically returns just a single function.
  const navigate = useNavigate();

  const goToUser = (userId:string) => {
    // eg scenario: after API called, after order purchase, after payment, redirect to success or to failure page
   navigate(`/user/${userId}`)
  }

  return (
    <div>
        <h1>About Page</h1>
        <p>This is About Page</p>
        <h2>User information</h2>
        {/* ()=> onClick , execute the function with argument */}
        <button onClick={()=> goToUser("1")}>Navigate to User 1</button>
        <button onClick={()=> goToUser("2")}>Navigate to User 2</button>
        </div>
  )
}

export default About