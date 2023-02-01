import React ,{useEffect, useState } from 'react'
import CoachHeader from '../Header/CoachHeader'
import coachimg from '../../Images/Userimage.jpg'
import './UserProfile.css'
import axios from 'axios'
import UserHeader from '../Header/UserHeader'

const UserProfile = (props) => {
  console.log(props.userId)
  const id = props.userId;
  let [user, setUser] = useState([]);
  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:9003/api/userProfile/getUserProfile/${id}`);
      console.log(response);
      user = response.data;
      setUser(user);
     
      
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    fetchData();

  }, []);

  return (
    <div> <div>
     <UserHeader ></UserHeader>
      <div className="coach-home-card">
      <img src={coachimg} alt="coach-img"/>
      <div>
        
       <p>Name : {user.name}</p>
       <p>Email :{user.email}</p>
       <p>Mobile number:{user.mobilenumber}</p>
       <p>Address:{user.city} , {user.state} ,{user.country}</p>
       </div>
        </div>
      </div>
      </div>
  )
};

export default UserProfile