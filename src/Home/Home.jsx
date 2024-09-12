import React from 'react'
import { Header } from '../components/header'
import Footer from '../components/footer'
import Homeone from '../components/Homeone'
import Hometworover from '../components/hometworover'
import Earthenhanceimg from '../components/Earthenhanceimg'


const Home = () => {
  return (
    <>
            <div className="main" style={{background:'#000000'}}>
            {/* <Header/> */}
            <Homeone/>
            <Hometworover/>
            <Earthenhanceimg/>
            <Footer/>
            </div>
    </>
  )
}

export default Home;