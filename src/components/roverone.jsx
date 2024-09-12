import React from 'react'
import mars from '../assets/mars.jpg'
import { Typography } from '@mui/material'

const Roverone = () => {
  const marscontentstyle = {
    color: '#E0FFFF',
    position: 'absolute',
    top: 200,
    textShadow: '2px 2px 4px rgba(135, 206, 235, 3)',
    
    

  }
  return (
    <>
      <div className="mars">
        <div className="mars_img">
          <img src={mars} alt="mars" style={{ width: '100%', height: '100vh' }} />
        </div>
        <div className="mars_content">
          <Typography variant='h1' component="div" style={marscontentstyle} sx={{ flexGrow: 1, textAlign: 'center', }}>
                Explore Mars with NASA's rovers, geology and mysteries.
          </Typography>
          {/* <h1 style={marscontentstyle}>Explore Mars with NASA's rovers, discovering life, geology, and mysteries.
                  </h1> */}
        </div>
      </div>
    </>
  )
}

export default Roverone;