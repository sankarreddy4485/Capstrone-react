import React from 'react'
import './Header.css'
import { useNavigate } from 'react-router'
export default function CaochHeader() {
  const navigate = useNavigate();
    const logoutHandler = () => {
        navigate('/coachLogin');
      }
      const schdulerHandler = () => {
        navigate('/coachSchedule');
      }
      const profileHandler = () => {
        navigate('/coachHome');
      }
      
  return (
    <div className="header-container">
        <div className="header-logo">
            WeCare
        </div>
        <div className="header-details">
        <span><a className='coachheader' href='' onClick={profileHandler}>View Profile</a></span>
        <span><a className='coachheader' href ='' onClick={schdulerHandler}>My Schedules</a></span>
        <span className='coachheader'>Call Us : 080 2233447</span>
        <span><a href='' onClick={logoutHandler} className='coachheader'>Logout</a></span>
        </div>
    </div>
  )
}