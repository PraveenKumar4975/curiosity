import React from 'react'
import { Header } from '../components/header'
import Footer from '../components/footer'
import Roverone from '../components/roverone'
import Gobackbutton from '../components/Gobackbutton'
import zIndex from '@mui/material/styles/zIndex'
import Rovertwo from '../components/rovertwo'

const Rovers = () => {
  const buttonontopleft={
    position:'absolute',
    top:120,
    left:40,
    zIndex:1000,
  }
  return (
    <>
      <Header />
      <Roverone />
      <div className="button" style={buttonontopleft}>
        <Gobackbutton />
      </div>
      <Rovertwo/>
      <Footer />
    </>
  )
}

export default Rovers