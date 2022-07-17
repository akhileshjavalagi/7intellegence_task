import React from 'react'
import { Route, Routes } from 'react-router'
import Exam from './Exam'
import Home from './Home'
import NavBar from './NavBar'
import Result from './Result'

export default function AllRoutes() {
  return (
    <div>
      {/* Here I displayed by default navbar */}
      <NavBar/>

      {/* Here I have set all the roots for all pages */}
      <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/exam" element={<Exam/>}/>
         <Route path="/result" element={<Result/>}/>
      </Routes>
    </div>
  )
}
