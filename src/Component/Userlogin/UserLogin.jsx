import React from 'react'
import { useState } from 'react';
import Axios from 'axios'
import coachimg from '../../Images/Userimage.jpg'
import './UserLogin.css'
import { useNavigate } from 'react-router'
import Header from '../Header/Header';
const UserLogin=(props) => {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
    }
    const addPostHandler =()=>{
    
        Axios.get(`http://localhost:9005/capstronelogin-service/api/login/userLogin/${id}/${password}`).then((response)=>{
    
          console.log(response);
          props.setUserId(id);
          setId("");
    
          setPassword("");
    if(response.status==200){
      navigate('/userHome');
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
        <h2>Login as a User</h2>
        <div className='form-row'>
         
          <input
            type='text'
            className='form-input'
            id='id'
            value={id}
            placeholder='User Id'
            required
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
            required
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
export default UserLogin;