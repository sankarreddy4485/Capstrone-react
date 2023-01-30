import React from 'react'
import './User.css'
import userimg from '../../Images/Userimage.jpg'
import { useNavigate } from 'react-router'

function User() {
    const navigate = useNavigate();
    const coachLogin = () => {
        navigate('/userLogin');
      }
    
      const coachSignup = () => {
        navigate('/userSignup');
      }
  return (
    <div className="user-card">
        <img src={userimg} alt="coach-img"/>
        <button onClick={()=>{coachLogin()}}>Login as a User</button>
        <button onClick={()=>{coachSignup()}}>Join as a User</button>
       
    </div>
  )
}

export default User