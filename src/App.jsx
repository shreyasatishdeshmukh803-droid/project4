import React from 'react'
import Home from './Home'
import About from './About '
import Skills from './Skills'
import Contacts from './Contacts'
import  Nav from './Nav'
import  './App.css'
const App = () => {
  return (
    <div className='back'>
      <Nav></Nav>
      <div id='Home'>
     <Home></Home>
     </div>
     <div id='About'>
     <About></About>
     </div>
     <div id='Skills'>
     <Skills></Skills>
     </div>
     <div id='Contacts'>
     <Contacts></Contacts>
     </div>
      </div>
  )
}

export default App