import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Login from './Login'
import Help from './Help'
import Signup from './Signup'

const Allroutes = () => {
  return (
     <Routes>
        <Route path='/' element={<Login/>}/> 
        <Route path='/help' element={<Help/>}/> 
        <Route path='/signup' element={<Signup/>}/> 
     </Routes>
  )
}

export default Allroutes