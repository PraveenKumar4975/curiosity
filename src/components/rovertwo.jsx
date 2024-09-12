import React, { useEffect } from 'react'
import { Box, Tabs } from '@mui/material'
import { Tab } from '@mui/material';
import axios from 'axios'
import Grid from '@mui/material/Grid2';
import CircularProgress from '@mui/material/CircularProgress';
const Rovertwo = () => {
    const key = '5UJe63yycdoMpBAoCilW9T4yZGQwHbdkGJHVkFKf'
    const [selected, setSelected] = React.useState('curiosity')
    const [value, setValue] = React.useState('curiosity')
    const [loading, setloading] = React.useState(false)
    const [data, setdata] = React.useState([])
    const handleChange = (e, newval) => {
        setSelected(newval);
        setValue(newval);
    }
    useEffect(() => {
        async function fetchdata() {
            try {
                setloading(true)
                const response = await axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/${selected}/latest_photos?api_key=${key}`);
                console.log(response.data.latest_photos);
                setloading(false);
                setdata(response.data.latest_photos);

            } catch (error) {
                setloading(false)
                console.log(error);

            }
        }
        if (selected) {
            fetchdata();
        }

    }, [selected])
    return (
        <>
            <div className="main" style={{ background: '#DDDDDD' }}>
                <div className="likeheader" style={{ marginBottom: 35, display: 'block', justifyContent: 'space-between', width: '100%' }}>
                    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', paddingTop: 3 }}>
                        <Tabs

                            value={value}
                            onChange={handleChange}
                            textColor="Info"
                            indicatorColor="primary"
                            aria-label="secondary tabs example"
                        >
                            <Tab sx={{ fontSize: 20 }} value="curiosity" label="curiosity" />
                            <Tab sx={{ fontSize: 20 }} value="Opportunity" label="Opportunity" />
                            <Tab sx={{ fontSize: 20 }} value="Spirit" label="Spirit" />
                        </Tabs>
                    </Box>
                </div>
                <div className="loading" style={{ display: 'flex', justifyContent: 'center', marginTop: 20, marginBottom: 20 }}>
                    {loading ? (
                        <Box sx={{ display: 'flex', justifyContent: 'center', height: '100vh' }}>
                                <CircularProgress color='info' size={60} />
                        </Box>) : ''}
                </div>
                <div className="div" >
                    <Grid container rowSpacing={2} columnSpacing={5} justifyContent="center" alignItems="center" sx={{ display: 'flex', alignItems: 'center', }} >
                        {data.map((item, index) => (
                            <Grid item xs={3} sm={4} key={index}>
                                <div style={{ marginTop: 0 }}>
                                    <img
                                        src={item?.img_src}
                                        alt={`Mars rover ${item?.rover?.name}`}
                                        style={{ width: '400px', height: '400px', objectFit: 'cover' }}
                                    />
                                    <p><strong>Rover:</strong> {item?.rover?.name}</p>
                                    <p><strong>Camera:</strong> {item?.camera?.full_name}</p>
                                    <p><strong>Earth Date:</strong> {item?.earth_date}</p>
                                </div>
                            </Grid>
                        ))}
                    </Grid>
                </div>







            </div >
        </>
    )
}

export default Rovertwo;