import React from 'react'
import { Link } from 'react-router-dom'
import './App.css'

const Home = () => {
  return (
    <div>
     <center>
     <h2> tis is Home page</h2>
      <Link to='/about' className='Link'>About</Link> {''}
      <Link to='/dashboard' className='Link'>Dashboard</Link> <br/> <br/>

      <img src='https://img.freepik.com/free-photo/blue-house-with-blue-roof-sky-background_1340-25953.jpg' className='img'/>
   
     </center>
      </div>
  )
}

export default Home
