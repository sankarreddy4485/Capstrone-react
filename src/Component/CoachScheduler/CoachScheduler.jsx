import React ,{useEffect, useState } from 'react'
import CaochHeader from '../Header/CoachHeader'
import './CoachScheduler.css'
import axios from 'axios'

const CoachScheduler = (props) => {
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
         <div className="main-container">
        <CaochHeader/>
   
      <p className="content">No Planned Schedules Yet.</p>
   
      </div>
 
  )
};

export default CoachScheduler;
