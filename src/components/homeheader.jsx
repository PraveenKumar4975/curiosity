import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import logo from '../assets/logo.mp4'
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import { NavLink } from 'react-router-dom';


const theme = createTheme({
    typography: {
        fontFamily: 'Orbitron, sans-serif',
        
    },
    NavLink:{
        color:'#FFFFFF'
    }
})

export const Homeheader = () => {
    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ flexGrow: 1, width: "100%", margin: 0, padding: 0,color:'transparent' }}>
                <AppBar position="static" sx={{ background: '#11ffee00' }}>
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
    );
}
