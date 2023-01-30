import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './CoachSignup.css'
import coachimg from '../../Images/coachimg.jpg'

export default function CoachSignup() {
  const initialState = { name:"", password:"", dob:"", gender:"", mobilenumber:0, speciality:"" }; 
  const [coach, setCoach] = useState(initialState);  
  const { name, password, dob, gender, mobilenumber, speciality } = coach;  
  const [homePage,setHomePage] = useState(true)
  const [response,setResponse] = useState(null)

  const onChangeInput = (event) => {
    setCoach({...coach, [event.target.name] : event.target.value})
  }
  const coachSignupSubmitHandler = async (event) => {
    event.preventDefault();
    await axios.post("http://localhost:9005/coachregistration-service/api/coachProfile/addCoach", coach);
    console.log(response);
    setResponse(response)
    setHomePage(false);
  }  

  if (homePage) {
  return (
    <div className="coach-signup-container">
        <div className="coach-signup-form">
            <h2>
                <img className="coach-signup-img" src={coachimg} alt="coach-signup-img"/>
                <span>Life coach profile</span>
            </h2>
            <form onSubmit={(event) => {coachSignupSubmitHandler(event)}}>
                
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
                        type="password"
                        minLength="5"
                        maxLength="10"
                        name="password"
                        value={password}
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
                    <label className="element-label">Speciality</label>
                    <input 
                        className="element-input"
                        type="text"
                        minLength="3"
                        maxLength="50"
                        name="speciality"
                        value={speciality}
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
              <h2>You are a coach now !!</h2>
              <h4>Your coach id is {response?.data}</h4>
              <button className="login-btn">Login now</button>
          </div>
      )
  }
}