import * as React from 'react';
import logo from '../assets/logo.mp4'
import Grid from '@mui/material/Grid2'
import { createTheme, ThemeProvider } from '@mui/material'
import { Typography } from '@mui/material'
//import LinkedInIcon from '@mui/icons-material/LinkedIn';
const theme = createTheme({
    typography: {
        body1: {
            color: '#FFFFFF',
        },
        h6: {
            color: '#9E9E9E',
            fontSize: 15,
            letterSpacing: 2,
            padding: 10,
        },

    }
});


const Footer = () => {
    return (
        <>
            <div className="footer" style={{ background: '#000000', }}>

                <ThemeProvider theme={theme}>
                    <Grid container spacing={2} sx={{paddingTop:3}}>
                        <Grid size={3}>
                            <div style={{}}>
                                <Typography variant='body1' component="div" sx={{ flexGrow: 1, textAlign: 'center', fontSize: 25 }}>
                                    Curiosity Vision
                                </Typography>
                                <video autoPlay loop muted style={{ width: 150, height: 150,marginLeft:110,marginTop:20}}>
                                    <source src={logo} type="video/mp4" />
                                </video>
                            </div>
                        </Grid>
                        <Grid size={3}>
                            <div>
                                <Typography variant='body1' component="div" sx={{ flexGrow: 1, textAlign: 'center', fontSize: 25 }}>
                                    API Documentation
                                </Typography>
                                <div className="content">
                                    <Typography variant="h6" sx={{ textAlign: 'center', }}>
                                        The Mars Explorer API provides developers with access to real-time data from NASA’s Mars missions.
                                        Explore images, rover data, and detailed mission logs.
                                        Perfect for scientific research, space exploration projects,
                                        or even just curious minds.
                                    </Typography>
                                </div>
                            </div>
                        </Grid>
                        <Grid size={3}>
                            <div>
                                <Typography variant="body1" component="div" sx={{ flexGrow: 1, textAlign: 'center', fontSize: 25 }}>
                                    Contact Us
                                </Typography>
                                <Typography variant="h6" sx={{ textAlign: 'center', }}>
                                    ppb4975@gmail.com
                                </Typography>
                                <Typography variant="h6" sx={{ textAlign: 'center', }}>
                                    +91 8754661074
                                </Typography>
                                <Typography variant="h6" sx={{ textAlign: 'center', }}>
                                    {/* <LinkedInIcon/> */}
                                </Typography>

                            </div>
                        </Grid>
                        <Grid size={3}>
                            <div>
                                <Typography variant="body1" component="div" sx={{ flexGrow: 1, textAlign: 'center', fontSize: 25 }}>
                                    Legal
                                </Typography>
                                <Typography variant="h6" sx={{ textAlign: 'center', }}>
                                    Welcome to Mars Explorer API!
                                </Typography>
                                <Typography variant="h6" sx={{ textAlign: 'center', }}>
                                    <a href="https://www.nasa.gov/privacy/#privacy-policy" style={{ color: '#00ADEF', textDecoration: 'none' }}>Read the full Terms of Service</a>
                                </Typography>
                            </div>
                        </Grid>
                    </Grid>
                </ThemeProvider>
            </div>
        </>
    )
}

export default Footer;