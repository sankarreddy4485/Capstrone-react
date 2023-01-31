import React from 'react'
import Coach from '../Coach/Coach'
import User from '../User/User'
import '../Home/Capstronehome.css'
import Header from '../Header/Header'

function Capstronehome() {
  return (
    <div className="home-container">
      <Header></Header>
        <h1>We are at the heart of appropriate care</h1>
        <div className="card-container">
          <Coach/>
          <User/>
        </div>
    </div>
  )
}

export default Capstronehome