import React ,{useEffect, useState } from 'react'
import CaochHeader from '../Header/CoachHeader'
import coachimg from '../../Images/coachimg.jpg'
import './CoachHome.css'
import axios from 'axios'

const CoachHome = (props) => {
  console.log(props.coachId)
  const id = props.coachId;
  let [coach, setCoach] = useState([]);
  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:9001/api/coachProfile/getCoachProfile/${id}`);
      console.log(response);
      coach = response.data;
      setCoach(coach);
      console.log(coach);
      
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    fetchData();

  }, []);

  return (
    <div> <div>
      <CaochHeader></CaochHeader>
      <div className="coach-home-card">
      <img src={coachimg} alt="coach-img"/>
      <div>
        
       <p>Coach id : {coach.id}</p>
       <p>Date of birth :{coach.dob}</p>
       <p>Mobile number:{coach.mobilenumber}</p>
       <p>Speciality:{coach.speciality}</p>
       </div>
        </div>
      </div>
      </div>
  )
};

export default CoachHome