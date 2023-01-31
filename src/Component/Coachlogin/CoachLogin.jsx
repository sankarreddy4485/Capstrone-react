import React from 'react'
import { useState } from 'react';
import Axios from 'axios'
import coachimg from '../../Images/coachimg.jpg'
import './CoachLogin.css'
import { useNavigate } from 'react-router'
import Header from '../Header/Header';
const CoachLogin=(props) => {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
    }
    const addPostHandler =()=>{
    
        Axios.get(`http://localhost:9002/api/login/coachLogin/${id}/${password}`).then((response)=>{
    
          console.log(response);
    
          props.setCoachId(id);
    
          setPassword("");
    if(response.status==200){
        navigate(`/coachHome`);
    }
         
        }
        
        )
      }
  return (
    <>
    <Header></Header>
    <div className="coach-card">
      
        <form className='form' onSubmit={handleSubmit}>
       
        <img src={coachimg} alt="coach-img"/>
        <h2>Login as a Life Coach</h2>
       
        <div className='form-row'>
         
          <input
            type='text'
            className='form-input'
            id='id'
            value={id}
            placeholder='Coach Id'
            onChange={(e) => setId(e.target.value)}
          />
        </div>
        <div className='form-row'>
           <input
            type='password'
            className='form-input'
            id='password'
            value={password}
            placeholder='Password'
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type='submit' className='btn btn-block' onClick={addPostHandler}>
          Login
        </button>
        </form>
    </div>
    </>
  )
}
export default CoachLogin;