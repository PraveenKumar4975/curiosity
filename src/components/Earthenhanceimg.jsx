import React, { useEffect } from 'react'
import { Box, Tabs } from '@mui/material'
import { Tab } from '@mui/material';
import axios from 'axios'
import Grid from '@mui/material/Grid2';
import CircularProgress from '@mui/material/CircularProgress';

const Earthenhanceimg = () => {
    const key = '5UJe63yycdoMpBAoCilW9T4yZGQwHbdkGJHVkFKf'
    const [selected, setSelected] = React.useState('natural')
    const [value, setValue] = React.useState('natural')
    const [loading, setloading] = React.useState(false)
    const [data, setdata] = React.useState([])

    const handleChange = (e, newval) => {
        setSelected(newval);
        setValue(newval);
    }

    useEffect(() => {
        async function fetchdata() {
            try {
                setloading(true);
                const response = await axios.get(`https://api.nasa.gov/EPIC/api/${selected}?api_key=${key}`);
                console.log(response.data);
                setloading(false);
                setdata(response.data); // Removed `.latest_photos` to match API structure

            } catch (error) {
                setloading(false);
                console.log(error);
            }
        }
        if (selected) {
            fetchdata();
        }

    }, [selected])

    const buildImageUrl = (item) => {
        const date = new Date(item.date);
        const year = date.getFullYear();
        const month = (`0${date.getMonth() + 1}`).slice(-2); // Adding leading zero
        const day = (`0${date.getDate()}`).slice(-2); // Adding leading zero
        const image = item.image;
        return `https://epic.gsfc.nasa.gov/archive/${selected}/${year}/${month}/${day}/png/${image}.png`;
    }

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
                            <Tab sx={{ fontSize: 20 }} value="natural" label="natural" />
                            <Tab sx={{ fontSize: 20 }} value="enhanced" label="enhanced" />
                        </Tabs>
                    </Box>
                </div>
                <div className="loading" style={{ display: 'flex', justifyContent: 'center', marginTop: 20, marginBottom: 20 }}>
                    {loading ? (
                        <Box sx={{ display: 'flex', justifyContent: 'center', height: '100vh' }}>
                            <CircularProgress color='info' size={60} />
                        </Box>) : ''}
                </div>
                <div className="div">
                    <Grid container rowSpacing={2} columnSpacing={5} justifyContent="center" alignItems="center">
                        {data && data.map((item, index) => (
                            <Grid item xs={3} key={index}>
                                <div style={{ marginTop: 0 }}>
                                    <img
                                        src={buildImageUrl(item)}
                                        alt={`EPIC ${item.image}`}
                                        style={{ width: '400px', height: '400px', objectFit: 'cover' }}
                                    />
                                    <p><strong>Caption:</strong> {item.caption}</p>
                                    <p><strong>Date:</strong> {item.date}</p>
                                    <p><strong>Latitude:</strong> {item.centroid_coordinates?.lat}</p>
                                    <p><strong>Longitude:</strong> {item.centroid_coordinates?.lon}</p>
                                </div>
                            </Grid>
                        ))}
                    </Grid>
                </div>
            </div>
        </>
    )
}

export default Earthenhanceimg;
