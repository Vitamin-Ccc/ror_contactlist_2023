import React from 'react'
import { Route, Routes } from 'react-router'
import Lists from './components/lists/Lists'
import About from './components/shared/About'
import Home from './components/shared/Home'
import MainNavbar from './components/shared/MainNavbar'
import Nomatch from './components/shared/Nomatch'

const App = () => (
  <>
  <MainNavbar />
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/about' element={<About />} />
    <Route path='/lists' element={<Lists />} />
    <Route path='/*' element={<Nomatch />} />
  </Routes>
  </>
)

export default App