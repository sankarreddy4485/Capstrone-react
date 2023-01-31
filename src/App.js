import logo from './logo.svg';
import React ,{useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Capstronehome from './Component/Home/Capstronehome';
import SharedLayout from './Component/Shared/SharedLayout';
import CoachLogin from './Component/Coachlogin/CoachLogin';
import UserLogin from './Component/Userlogin/UserLogin';
import UserHome from './Component/UserHome/UserHome';
import CoachHome from './Component/CoachHome/CoachHome';
import CoachSignup from './Component/CoachSignup/CoachSignup';
import UserSignup from './Component/UserSignup/UserSignup';

function App() {
 const [coachId, setCoachId] = useState(null);
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<SharedLayout/>}>
      <Route path='/home' index element={<Capstronehome />}/>
      <Route path='/coachLogin' element={<CoachLogin setCoachId={setCoachId} />}/>
      <Route path='/userLogin' element={<UserLogin/>}/>
      <Route path='/userHome' element={<UserHome/>}/>
      <Route path='/coachHome' element={<CoachHome coachId={coachId}/>}/>
      <Route path='/coachSignup' element={<CoachSignup />}/>
      <Route path='/userSignup' element={<UserSignup/>}/>
      </Route>
         </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
