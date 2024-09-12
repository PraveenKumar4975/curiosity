import React from 'react'
import { Header } from '../components/header'
import Footer from '../components/footer'
import Aboutpage from '../components/Aboutpage'
import Gobackbutton from '../components/Gobackbutton'

const About = () => {
  const buttonontopleft={
    position:'absolute',
    top:120,
    left:40,
    zIndex:1000,
  }
  return (
    <>
      <Header />
      <Aboutpage />
      <div className="button" style={buttonontopleft}>
        <Gobackbutton />
      </div>
      <Footer />
    </>
  )
}

export default About;