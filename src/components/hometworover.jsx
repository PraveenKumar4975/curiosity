import React, { useEffect } from 'react'
import './hometworovercss.css'
import NASA_Mars_Rover from '../assets/NASA_Mars_Rover.jpg'
import { createTheme, Typography } from '@mui/material'
import { ThemeProvider } from '@emotion/react'
import AOS from 'aos'
import "aos/dist/aos.css";


const theme = createTheme({
  typography: {
    h3: {
      color: '#FFFFFF'
    },
    h6: {
      color: '#9E9E9E'
    },
    h4:{
      color:'#FFFFFF'
    }
  }
})
const Hometworover = () => {
  useEffect(()=>{
    AOS.init({
      duration:2500,
      once:true,
  });
  AOS.refresh();

  },[])
  const text = `
    Launched  :  November 26, 2011

    Landed    :  August 6, 2012

    Mission   :  To explore Gale Crater and determine if Mars ever had the environmental conditions to support microbial life.
            
  `;
  return (
    <>
      <div className="rover" style={{ background: '#000000', margin: 0, padding: 0, display: 'flex', flexDirection: 'row' }} >
        <div className="rover_image">
          <img data-aos='zoom-in-up' src={NASA_Mars_Rover} alt="rover_img" />

        </div>
        <ThemeProvider theme={theme}>
          <div className="rover_content" data-aos='zoom-in-up'>
            <Typography variant='h3' component="div" sx={{ flexGrow: 1, textAlign: 'center', marginTop: 5 }}>
              About the Mars Rovers
            </Typography>
            <div className="div" style={{marginLeft:5}}>
              <Typography variant='h6' component="div" sx={{ flexGrow: 1, textAlign: 'justify', margin: 5 }}>
                NASA’s Mars Rovers are robotic explorers designed to study the surface of Mars. Each rover has a unique set of instruments to gather data and capture images of the Martian landscape,
                helping scientists understand the planet’s history, geology, and potential for life.
              </Typography>
              <Typography variant='h4' component="div" sx={{ flexGrow: 1, textAlign: 'left', marginLeft:5 }}>
                Curiosity Rover
              </Typography>
              <Typography variant='h6' component="pre" sx={{ flexGrow: 1, whiteSpace: 'pre-wrap',marginLeft:10 }}>
              
                   {text}
              </Typography>
            </div>
          </div>
        </ThemeProvider>
      </div>
    </>
  )
}

export default Hometworover;