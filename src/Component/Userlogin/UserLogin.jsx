import React from 'react'
import { useState } from 'react';
import Axios from 'axios'
import coachimg from '../../Images/Userimage.jpg'
import './UserLogin.css'
import { useNavigate } from 'react-router'
const UserLogin=() => {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
    }
    const addPostHandler =()=>{
    
        Axios.get(`http://localhost:9005/capstronelogin-service/api/login/userLogin/${id}/${password}`).then((response)=>{
    
          console.log(response);
    
          setId("");
    
          setPassword("");
    if(response.status==200){
      navigate('/userHome');
    }
         
        }
        
        )
      }
  return (
    
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
            placeholder='User Id'
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
  )
}
export default UserLogin;