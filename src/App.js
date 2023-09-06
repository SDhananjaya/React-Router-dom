import React from 'react';
import {BroserRouter,Routes,Route, BrowserRouter} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Dashboard from './Dashboard';
const App = () => {
  return (
    <div>
    
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/dashboard' element={<Dashboard/>} />
        </Routes>
        </BrowserRouter>
      
    </div>
  )
}

export default App
