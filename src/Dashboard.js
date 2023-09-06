import React from 'react'
import { Link } from 'react-router-dom'
const Dashboard = () => {
  return (
    <div>
     <center>
     <h2>This is a Dashboard page</h2>
      <Link to='/' className='Link'>Back to Home</Link> <br/> <br/>

       <img src="https://miracomosehace.com/wp-content/uploads/mch/logo-discord-personajes-animados_17551.jpg"/>
     </center>
    </div>
  )
}

export default Dashboard
