import { Box, Divider, Typography } from '@mui/material'
import React from 'react'
import { createTheme, ThemeProvider } from '@mui/material'
import Scene from '../components/imageforaboutpage'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
//mport Typography from '@mui/material/Typography';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { color } from 'three/webgpu';
import aboutmars from '../assets/aboutmars.png'

const theme = createTheme({
    typography: {
        h2: {
            color: '#FFFFFF',
            fontSize: 45
        },
        h6: {
            color: '#9E9E9E'
        }
    }
})
const style={
    background:'#000000',
    color:'#FFFFFF',
    
    
}

const Aboutpage = () => {
    return (
        <>
            <div className="main" style={{ background: '#000000' }}>
                <ThemeProvider theme={theme}>
                    <Box>
                        <Typography variant='h2' component="div" sx={{ flexGrow: 1, textAlign: 'center', paddingTop: 5 }}>
                            Our Mission Section
                        </Typography>
                        <div className="div" style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                            <div className="left" style={{ width: '50%' }}>
                                <Typography variant='h6' component="div" sx={{ flexGrow: 1, marginTop: 5, marginLeft: 5, letterSpacing: 2 }}>
                                    NASA's Mars missions aim to explore the Red Planet
                                    with unparalleled precision and innovation. Our rovers,
                                    equipped with state-of-the-art technology,
                                    travel across the Martian surface,
                                    conducting experiments and sending back valuable data.
                                    This data helps scientists understand Mars' geology, climate,
                                    and potential for supporting life.
                                    We strive to make this wealth of information accessible to everyone.
                                    Whether it's capturing stunning high-resolution images, analyzing soil samples,
                                    or navigating the Martian terrain, every aspect of the rover's
                                    journey is shared with you in real-time. Our goal is to spark curiosity, inspire
                                    future scientists, and bring the distant world of Mars right to your fingertips.
                                </Typography>
                            </div>
                            <div className="right" style={{ width: '50%' }}>
                                <Scene />
                            </div>
                        </div>
                        <Divider />
                        <Typography variant='h2' component="div" sx={{ flexGrow: 1, textAlign: 'center', paddingTop: 5,paddingBottom:5       }}>
                            Technology behind Rovers
                        </Typography>
                        <div className="div" style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>

                            <div className="right" style={{ width: '50%' }}>
                                <img src={aboutmars} alt="mars_rover" style={{width:'100%',background:'#000000'}}/>
                            </div>
                            <div className="left" style={{ width: '50%' }}>
                                <Typography variant='h6' component="div" sx={{ flexGrow: 1, marginTop: 5, marginLeft: 5, letterSpacing: 2 }}>
                                    NASA’s Mars rovers represent a pinnacle of engineering and innovation. Each rover is equipped with a suite of advanced technologies designed to explore the harsh environment of Mars, conduct scientific research, and send invaluable data back to Earth.
                                    Here’s a closer look at the groundbreaking technologies that make these missions possible.
                                </Typography>
                                <div className="accordion" style={{display:'flex',justifyContent:'center',flexDirection:'column',marginTop:10}}>
                                    <Accordion sx={style}>
                                        <AccordionSummary
                                            expandIcon={<ArrowDropDownIcon sx={style} />}
                                            aria-controls="panel2-content"
                                            id="panel2-header"
                                        >
                                            <Typography sx={{fontSize:25,marginLeft:3}} >High-Resolution Cameras</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography variant='h6' sx={{ marginLeft: 5, letterSpacing: 1 }}>
                                            Equipped with high-resolution cameras like the MastCam and NavCam, the rovers can take panoramic views, close-up shots, and even 3D images to analyze geological features and monitor changes over time.
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion sx={style}>
                                        <AccordionSummary
                                            expandIcon={<ArrowDropDownIcon sx={style} />}
                                            aria-controls="panel2-content"
                                            id="panel2-header"
                                        >
                                            <Typography sx={{fontSize:25,marginLeft:3}} >Scientific Instruments</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography variant='h6' sx={{ marginLeft: 5, letterSpacing: 1 }}>
                                            Instruments like the ChemCam and the Mars Hand Lens Imager (MAHLI) are used to perform chemical analyses and capture high-resolution images of rocks and soil. These tools help determine the mineralogy and potential habitability of the environment.
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion sx={style}>
                                        <AccordionSummary
                                            expandIcon={<ArrowDropDownIcon sx={style} />}
                                            aria-controls="panel2-content"
                                            id="panel2-header"
                                        >
                                            <Typography sx={{fontSize:25,marginLeft:3}} >Robotic Arms</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography variant='h6' sx={{ marginLeft: 5, letterSpacing: 1 }}>
                                            The rovers are equipped with robotic arms that can drill into rocks, scoop up soil samples, and deliver these samples to onboard laboratories for analysis. The arms also feature tools for conducting various scientific experiments.
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion sx={style}>
                                        <AccordionSummary
                                            expandIcon={<ArrowDropDownIcon sx={style} />}
                                            aria-controls="panel2-content"
                                            id="panel2-header"
                                        >
                                            <Typography sx={{fontSize:25,marginLeft:3}} >Laser Spectrometers</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography variant='h6' sx={{ marginLeft: 5, letterSpacing: 1 }}>
                                            The Laser-Induced Breakdown Spectroscopy (LIBS) instrument fires a laser at rocks and soil, creating a plasma that reveals the chemical elements present. This non-contact method allows for rapid analysis of Mars’ surface materials.                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                    <Accordion sx={style}>
                                        <AccordionSummary
                                            expandIcon={<ArrowDropDownIcon sx={style} />}
                                            aria-controls="panel2-content"
                                            id="panel2-header"
                                        >
                                            <Typography sx={{fontSize:25,marginLeft:3}} >Autonomous Navigation</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography variant='h6' sx={{ marginLeft: 5, letterSpacing: 1 }}>
                                            Using advanced algorithms and onboard cameras, the rovers can navigate autonomously across the Martian terrain. This technology allows them to avoid obstacles, select interesting targets, and plan efficient travel routes.                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                </div>
                            </div>
                        </div>


                    </Box>
                </ThemeProvider>
            </div>
        </>
    )
}

export default Aboutpage