import  { useEffect } from 'react'
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
//import Typography from '@mui/material/Typography';
import logo from '../assets/logo.mp4'
//import { createTheme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import { NavLink } from 'react-router-dom';
import home_backgrounds from '../assets/home_backgrounds.jpg'
import { createTheme,Typography } from '@mui/material'
import AOS from 'aos'
import "aos/dist/aos.css";


const Homeone = () => {
    useEffect(()=>{
        AOS.init({
            duration:2000,
            once:true,
        });
        AOS.refresh();

    },[])
    const theme = createTheme({
        typography: {
            fontFamily: 'Orbitron, sans-serif',
            
        },
        NavLink:{
            color:'#FFFFFF'
        }
    })
    return (
        <>
            
            <img src={home_backgrounds} alt="home_Earth"  style={{ width: '100%', height: 800,overflow:'none',overflowX:'none' }}/>
            <div
                        className="content"
                        style={{
                            position: 'absolute',
                            top: 400,
                            right: 80,
                            color: '#FFFFFF',
                            fontSize: '70px',
                            textShadow: '2px 2px 4px rgba(135, 206, 235, 1)',
                            
                        }}
                >                        <p data-aos='zoom-in-up' style={{ margin: 2 }}> Unlock the</p>
                        <p data-aos='zoom-in-up' style={{ margin: 2 }}>mysteries of </p>
                        <p data-aos='zoom-in-up' style={{ marginTop: 0 }}>the universe</p>


            </div>
            <div className="top" style={{top:0}}>
            <ThemeProvider theme={theme}>
            <Box sx={{ flexGrow: 1, width: "100%", margin: 0, padding: 0, }}>
                <AppBar position="absolute" sx={{top:20,background:'transparent',border:'none'}} elevation={0} data-aos='slide-down'>
                    <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', marginLeft: 5 }}>
                        <div className="logo" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                            <video autoPlay loop muted style={{ width: 80, height: 80, }}>
                                <source src={logo} type="video/mp4" />
                            </video>

                        </div>

                        <div className="toolbar_right" style={{ display: 'flex', justifyContent: 'center' }}>
                            <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: '#FFFFFF' }}>
                                <NavLink to='/' style={{color:'#FFFFFF',textDecoration:'none'}}>Home</NavLink>
                            </Typography>
                            <Typography variant="h6" component="div" sx={{ flexGrow: 1, marginLeft: 5 }}>
                                <NavLink to='/rovers' style={{color:'#FFFFFF',textDecoration:'none'}}>Rovers</NavLink>
                            </Typography>
                            <Typography variant="h6" component="div" sx={{ flexGrow: 1, marginLeft: 5 }}>
                                <NavLink to='/gallery' style={{color:'#FFFFFF',textDecoration:'none'}}>Gallery</NavLink>
                            </Typography>
                            <Typography variant="h6" component="div" sx={{ flexGrow: 1, marginLeft: 5 }}>
                                <NavLink to='/about' style={{color:'#FFFFFF',textDecoration:'none'}}>About Us</NavLink>
                            </Typography>
                        </div>
                    </Toolbar>
                </AppBar>
            </Box>
            </ThemeProvider>
            </div>
            {/* <div className="home">
                <div className="image">
                    <img d src={home_backgrounds} alt="Earth_image" style={{ width: '100%', height: 800 }} />
                    <div
                        className="content"
                        style={{
                            position: 'absolute',
                            top: 400,
                            right: 80,
                            color: '#FFFFFF',
                            fontSize: '70px',
                            textShadow: '2px 2px 4px rgba(135, 206, 235, 1)',
                            
                        }}
                    >                        <p data-aos='zoom-in-up' style={{ margin: 2 }}> Unlock the</p>
                        <p data-aos='zoom-in-up' style={{ margin: 2 }}>mysteries of </p>
                        <p data-aos='zoom-in-up' style={{ marginTop: 0 }}>the universe</p>


                    </div>

                </div>
            </div> */}
        </>
    )
}

export default Homeone