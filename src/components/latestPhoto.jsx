import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { createTheme, Typography } from '@mui/material'
import { ThemeProvider } from '@emotion/react'
import nasaheadquaterss from '../assets/nasa_headquaterss.png'
import AOS  from 'aos'
import "aos/dist/aos.css";
import Gobackbutton from '../components/Gobackbutton'

const theme = createTheme({
    typography: {
        fontFamily: 'Orbitron, sans-serif',
        color: '#FFFFFF',
        
    }
})
const bold = createTheme({
    typography: {
        color: '#FFFFFF',
        fontFamily: 'Times New Roman',
        background: '	#002244',
        
    }
})
const style={
    position:'absolute',
    top:120,
    left:40,
    zIndex:1000,
}

const LatestPhoto = () => {

    const DEMO_KEY = '5UJe63yycdoMpBAoCilW9T4yZGQwHbdkGJHVkFKf'
    const [background, setbackground] = React.useState({})
    useEffect(() => {
        AOS.init({
            duration:3000,
            once:true,
        });
        AOS.refresh();

        async function fetchthelatestimage() {
            try {
                const response = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${DEMO_KEY}`);
                console.log(response.data);
                setbackground(response.data)
            } catch (error) {
                console.log(error);


            }
        }
        fetchthelatestimage();
    }, [])
    return (
        <>
            <div className="main" style={{ background: '#000000' }}>
                <ThemeProvider theme={bold}>
                    <div className="latest_text" style={{ background: '	#000000' }}>
                        <Typography variant='h1' component="div" sx={{color:'#FFFFFF',padding:10,zIndex:99,}} data-aos="slide-left">Today Image from <p >NASA</p></Typography>
                        <div className="nasa_headquaterss" style={{position:'absolute',top:80,right:10}}>
                            <img data-aos="slide-right" src={nasaheadquaterss} alt="headquater_NASA" style={{width:1000,height:500}} />
                        </div>
                    </div>
                    <div className="goback" style={style}>
                        <Gobackbutton/>
                    </div>
                </ThemeProvider>
                <ThemeProvider theme={theme}>
                    <div className="latest-image">
                        <div className="image">
                            <img src={background.url} alt="latest_photo_from_NASA" style={{ width: '100%', height: '100vh' }} />

                        </div>
                        <div className="title" style={{ position: 'absolute',top:700,padding:30 }}>
                            <Typography variant="h2" component="div" sx={{ flexGrow: 1,color:'white',letterSpacing:2,textShadow: '2px 2px 4px rgba(255, 255, 255, 5)' }}>
                                {background.title}
                            </Typography>
                            <Typography variant="h4" component="div" sx={{ flexGrow: 1,color:'white',letterSpacing:2,paddingTop:4 }}>
                                {background.date}
                            </Typography>
                            <div className="para" style={{width:600}}>
                            <Typography variant="h8" component="div" sx={{ flexGrow: 1,color:'white',paddingTop:4,letterSpacing:2, }}>
                                {background.explanation}
                            </Typography>
                            </div>
                        </div>

                    </div>
                </ThemeProvider>
            </div>
        </>
    )
}

export default LatestPhoto;