import React from 'react'
import { Header } from './components/header'
import LatestPhoto from './components/latestPhoto'
import Footer from './components/footer'
// import { RouterProvider } from 'react-router-dom'
// import route from './components/browserrouter'
import Home from './Home/Home'
import Rovers from './rovers/Rovers'
import Gallery from './gallery/Gallery'
import About from './about/About'
import { Routes,Route } from 'react-router-dom'

export const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/rovers' element={<Rovers/>}/>
      <Route path='/gallery' element={<Gallery/>}/>
      <Route path='/about' element={<About/>}/>
      
    </Routes>
    
      
    </>
  )
}
