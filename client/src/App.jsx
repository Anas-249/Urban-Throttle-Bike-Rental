import React, { useState } from 'react'
import Navbar from './components/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/HomeTemp'
import CarDetails from './pages/CarDetails'
import Bikes from './pages/Bikes'
import MyBookings from './pages/MyBookings'
import Fotter from './components/Fotter'
import Login from './components/Login'

const App = () => {

  const[showLogin,setShowLogin]=useState(false)
  const isOwnerPath = useLocation().pathname.startsWith('/owner')
  console.log('App is rendering, current path:', useLocation().pathname)
  return (
    <>
      {showLogin && <Login setShowLogin={setShowLogin} />}
      {!isOwnerPath && <Navbar setShowLogin={setShowLogin} />}



      <Routes>
        <Route path ='/' element={<Home/>}/>
        <Route path ='/bike-details/:id' element={<CarDetails/>}/>
        <Route path ='/bikes' element={<Bikes/>}/>
        <Route path ='/my-bookings' element={<MyBookings/>}/>
      </Routes>
      {!isOwnerPath && <Fotter /> }
    </>
  )
}

export default App