import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router'
import './UserSignup.css'
import coachimg from '../../Images/Userimage.jpg'

export default function UserSignup() {
  const initialState = { name:"", passsword:"", dob:"", gender:"", mobilenumber:0, email:"",pincode:"" ,city:"", state:"", country:""}; 
  const [user, setUser] = useState(initialState);  
  const { name, passsword, dob, gender, mobilenumber, email, pincode, city, state,country } = user;  
  const navigate = useNavigate();
  const [homePage,setHomePage] = useState(true)
  const [response,setResponse] = useState(null)

  const onChangeInput = (event) => {
    setUser({...user, [event.target.name] : event.target.value})
  }
  const userSignupSubmitHandler = async (event) => {
    event.preventDefault();
    await axios.post("http://localhost:9003/api/userProfile/addUserProfile", user);
    console.log(response);
    setResponse(response)
    setHomePage(false);
  }  
  const loginHandleClick =()=>{
   
    navigate('/userLogin');

  }
  if (homePage) {
  return (
    <div className="coach-signup-container">
        <div className="coach-signup-form">
            <h2>
                <img className="coach-signup-img" src={coachimg} alt="coach-signup-img"/>
                <span>Life user profile</span>
            </h2>
            <form onSubmit={(event) => {userSignupSubmitHandler(event)}}>
                
                <div className="element">
                    <label className="element-label">Name</label>
                    <input 
                        className="element-input"
                        type="text"
                        minLength="3"
                        maxLength="50"
                        name="name"
                        value={name}
                        onChange={(event)=>{onChangeInput(event)}}
                    />
                </div>
                <div className="element">
                    <label className="element-label">Password</label>
                    <input 
                        className="element-input"
                        type="passsword"
                        minLength="5"
                        maxLength="10"
                        name="passsword"
                        value={passsword}
                        onChange={(event)=>{onChangeInput(event)}}
                    />
                </div>
                <div className="element">
                    <label className="element-label">Date of birth</label>
                    <input 
                        className="element-input"
                        type="calender"
                        /* minLength="20"
                        maxLength="100" */
                        name="dob"
                        value={dob}
                        onChange={(event)=>{onChangeInput(event)}}
                    />
                </div>
                <div className="element">
                    <label className="element-label">Gender</label>
                    <div className="element-radio">
                        <input type="radio" name="gender" value="Male" onChange={(event)=>{onChangeInput(event)}}/>
                        <label >Male</label>
                        <input type="radio" name="gender" value="Female" onChange={(event)=>{onChangeInput(event)}}/>
                        <label >Female</label>
                    </div>
                </div> 
                <div className="element">
                    <label className="element-label">Mobile number</label>
                    <input 
                        className="element-input"
                        type="number"
                        name="mobilenumber"
                        value={mobilenumber}
                        onChange={(event)=>{onChangeInput(event)}}
                    />
                </div>
                <div className="element">
                    <label className="element-label">Email</label>
                    <input 
                        className="element-input"
                        type="text"
                        minLength="3"
                        maxLength="50"
                        name="email"
                        value={email}
                        onChange={(event)=>{onChangeInput(event)}}
                    />
                </div> 
                <div className="element">
                    <label className="element-label">Pincode</label>
                    <input 
                        className="element-input"
                        type="text"
                        minLength="6"
                        maxLength="6"
                        name="pincode"
                        value={pincode}
                        onChange={(event)=>{onChangeInput(event)}}
                    />
                </div>  
                <div className="element">
                    <label className="element-label">City</label>
                    <input 
                        className="element-input"
                        type="text"
                        minLength="0"
                        maxLength="20"
                        name="city"
                        value={city}
                        onChange={(event)=>{onChangeInput(event)}}
                    />
                </div>
                <div className="element">
                    <label className="element-label">State</label>
                    <input 
                        className="element-input"
                        type="text"
                        maxLength="20"
                        name="state"
                        value={state}
                        onChange={(event)=>{onChangeInput(event)}}
                    />
                </div>
                <div className="element">
                    <label className="element-label">Country</label>
                    <input 
                        className="element-input"
                        type="text"
                        minLength="0"
                        maxLength="20"
                        name="country"
                        value={country}
                        onChange={(event)=>{onChangeInput(event)}}
                    />
                </div>          
                <div className="element-btn">
                    <button>Register</button>
                </div>  
            </form>
        </div>
    </div>
  )
  } else {
      return (
          <div className="coach-signup-container sign-up-success-container">
              <img className="coach-signup-img" src={coachimg} alt="coach-signup-img"/>
              <h2>You are a user now !!</h2>
              <h4>Your user id is {response?.data}</h4>
              <button className="login-btn" onClick={loginHandleClick}>Login now</button>
          </div>
      )
  }
}