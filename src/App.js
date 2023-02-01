import logo from './logo.svg';
import React ,{useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Capstronehome from './Component/Home/Capstronehome';
import SharedLayout from './Component/Shared/SharedLayout';
import CoachLogin from './Component/Coachlogin/CoachLogin';
import UserLogin from './Component/Userlogin/UserLogin';
import CoachHome from './Component/CoachHome/CoachHome';
import CoachSignup from './Component/CoachSignup/CoachSignup';
import UserSignup from './Component/UserSignup/UserSignup';
import CoachScheduler from './Component/CoachScheduler/CoachScheduler';
import UserHeader from './Component/Header/UserHeader';
import UserHome from './Component/UserHome/UserHome';
import UserProfile from './Component/UserProfile/UserProfile';
import UserAppointment from './Component/UserAPpoinment/UserAppointment';

function App() {
 const [coachId, setCoachId] = useState(null);
 const [userId, setUserId] = useState(null);
 const [userProfileId, setUserProfileId] = useState(null);
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<SharedLayout/>}>
      <Route path='/' index element={<Capstronehome />}/>
      <Route path='/coachLogin' index element={<CoachLogin setCoachId={setCoachId} />}/>
      <Route path='/userLogin' index element={<UserLogin  setUserId={setUserId}/>}/>
      <Route path='/userHome' index element={<UserHome userId={userId}/>}/>
      <Route path='/userHeader' index element={<UserHeader setUserProfileId={setUserProfileId}/>}/>
      <Route path='/userProfile' index element={<UserProfile userProfileId={userProfileId}/>}/>
      <Route path='/coachHome' index element={<CoachHome coachId={coachId}/>}/>
      <Route path='/coachSignup' index element={<CoachSignup />}/>
      
      <Route path='/coachSchedule' index element={<CoachScheduler  coachId={coachId}/>}/>
      <Route path='/userSignup' index element={<UserSignup/>}/>
      
      <Route path='/appointmentBooked' index element={<UserAppointment/>}/>
      </Route>
         </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
