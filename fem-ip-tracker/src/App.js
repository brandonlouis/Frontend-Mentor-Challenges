import './App.css';
import React, { useEffect, useState, useRef } from 'react'
import axios from 'axios';
import { useMediaQuery } from 'react-responsive'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { Box, Stack, TextField, Button, createTheme, ThemeProvider, CircularProgress } from '@mui/material'
import { ReactComponent as IconArrow } from './img/icon-arrow.svg'

function App() {
    const theme = createTheme({
        components: {
            MuiTextField: {
                styleOverrides: {
                    root: ({ ownerState }) => ({
                        ...(ownerState.variant === 'outlined' && {
                            backgroundColor: '#FFF',
                            borderRadius: '15px 0 0 15px',
                            '& .Mui-focused ': {
                                borderRadius: '15px',
                            },
                            '& .MuiOutlinedInput-root': {
                                paddingRight: 0,
                                borderRadius: '15px 0 0 15px',
                            },
                            input: {
                                fontFamily: 'Rubik',
                                fontSize: '18px',
                            }
                        }),
                    }),
                },
            },
            MuiButton: {
                styleOverrides: {
                    root: ({ ownerState }) => ({
                        ...(ownerState.variant === 'filled' && {
                            backgroundColor: 'black',
                            borderRadius: '0 15px 15px 0',
                            '&:hover': {
                                backgroundColor: '#444',
                            },
                        }),
                    }),
                },
            },
        },
        palette: {
            common: {
                main: '#FFF',
            }
        },
    });

    const isMobile = useMediaQuery({ query: '(max-width: 850px)' })

    const mapRef = useRef(null);
    const [loading, setLoading] = useState(false)
    const [isError, setIsError] = useState(false)
    const [ipAddress, setIpAddress] = useState('')
    const [addressData, setAddressData] = useState('')
    const [coords, setCoords] = useState([0, 0])
    const [errorCode, setErrorCode] = useState('')
    const errorCodes = {
        1: 'Please disable browser extensions if the page is not functioning properly.',
        403: 'API credit limit reached',
        422: 'Invalid IP address. Please try again.'
    }

    const URL = 'https://geo.ipify.org/api/v2/country,city,vpn?apiKey=at_PTT02duq568yvroOy4kGIKShZbbpR&ipAddress='

    const getDataOnLoad = async () => {
        const res = await axios.get("https://api.ipify.org/?format=json");
        setIpAddress(res.data.ip);
    };

    useEffect(() => {
        getDataOnLoad()
        trackAddress()

        setTimeout(() => {
            if (addressData === '') {
                setErrorCode('1')
            }
        }, 2000)
    }, []);
    
    const trackAddress = async () => {
        try {
            setLoading(true)
            const response = await fetch(URL + ipAddress)
            const data = await response.json()

            if (data.code === undefined) {
                setAddressData(data)
                setCoords([data.location.lat, data.location.lng])
                mapRef.current.flyTo([data.location.lat, data.location.lng], 15, {duration: 1,})
            } else {
                setIsError(true)
                setErrorCode(data.code)
            }

            setLoading(false)

        } catch (error) {
            setIsError(true)
            setLoading(false)
        }
    }

    const handleTrack = (e) => {
        e.preventDefault()
        trackAddress()
    }

    if (!isMobile) {
        return (
            <ThemeProvider theme={theme}>
                <Stack height='100vh' position='relative'>
                    <Stack className='SearchHeader' width='100%' height='400px'>
                        <Stack alignItems='center' justifyContent='center' marginTop='12px' gap='12px'>
                            <h1>IP Address Tracker</h1>
                            <Stack>
                                <form className='ipAddressForm' onSubmit={handleTrack}>
                                    <TextField
                                        required
                                        fullWidth
                                        error={isError}
                                        id="searchText" variant="outlined" placeholder="Search for any IP address or domain"
                                        onChange={(e) => setIpAddress(e.target.value)}
                                        inputProps={{ pattern: "^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$" }}
                                    />
                                    <Button variant='filled' type='submit'>{loading ? <CircularProgress color='common' size='1.7rem' sx={{display:'flex'}}/> : <IconArrow />}</Button>
                                </form>
                                { isError && <p>{errorCodes[errorCode]}</p> }
                            </Stack>
                        </Stack>
                    </Stack>
                    
                    <Box className='AddressResultBox'>
                        <Box width='25%' paddingRight='5px'>
                            <Stack justifyContent='center' gap='10px'>
                                <h5>IP ADDRESS</h5>
                                <h2>{addressData ? addressData.ip : ''}</h2>
                            </Stack>
                        </Box>
                        <Box className='AddressInformation' display='flex' alignItems='flex-start' width='25%' paddingRight='10px'>
                            <Stack justifyContent='center' width='100%'>
                                <h5>LOCATION</h5>
                                <h2>
                                    {addressData && addressData.location.city}
                                    {addressData && (addressData.location.region || addressData.location.postalCode) ? `, ${addressData.location.region || ''} ${addressData.location.postalCode || ''}` : ''}
                                </h2>
                            </Stack>
                        </Box>
                        <Box className='AddressInformation' display='flex' alignItems='flex-start' width='25%' paddingRight='10px'>
                            <Stack display='flex' justifyContent='center' width='100%'>
                                <h5>TIMEZONE</h5>
                                <h2>{addressData ? `UTC ${addressData.location.timezone}` : ''}</h2>
                            </Stack>
                        </Box>
                        <Box className='AddressInformation' display='flex' alignItems='flex-start' width='25%' paddingRight='10px'>
                            <Stack justifyContent='center'  width='100%'>
                                <h5>ISP</h5>
                                <h2>{addressData ? addressData.isp : ''}</h2>
                            </Stack>
                        </Box>
                    </Box>

                    <MapContainer center={coords} zoom={0} zoomControl={false} ref={mapRef} style={{height:'100%', zIndex:'1'}}>
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}{r}.png"
                        />
                        {coords[0] !== 0 && coords[1] !== 0 && (
                            <Marker position={coords}>
                                <Popup closeButton={false}>{addressData ? addressData.as.name : ''}</Popup>
                            </Marker>
                        )}
                    </MapContainer>
                </Stack>
                <Box sx={{color:'darkgray', fontSize:'10px', width:'100vw', textAlign:'center', position:'absolute', bottom:'10px', zIndex:'3'}}>
                    Challenge by <a style={{color: 'gray', fontSize:'10px', textDecoration:'none'}} href="https://www.frontendmentor.io/challenges/ip-address-tracker-I8-0yYAH0/hub" target="_blank">Frontend Mentor</a>. 
                    Coded by <a style={{color: 'gray', fontSize:'10px', textDecoration:'none'}} href="https://github.com/brandonlouis">Brandon Louis Chia</a>.
                </Box>
            </ThemeProvider>
        );
    } else {
        return (
            <ThemeProvider theme={theme}>
                <Stack height='100vh' position='relative'>
                    <Stack className='SearchHeader' height='700px' width='100%'>
                        <Stack alignItems='center' justifyContent='center' marginTop='12px' gap='12px'>
                            <h2>IP Address Tracker</h2>
                            <Stack className='searchError'>
                                <form className='ipAddressForm' onSubmit={handleTrack}>
                                    <TextField
                                        required
                                        fullWidth
                                        error={isError}
                                        id="searchText" variant="outlined" placeholder="Search for any IP address or domain"
                                        onChange={(e) => setIpAddress(e.target.value)}
                                        inputProps={{ pattern: "^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$" }}
                                    />
                                    <Button variant='filled' type='submit'>{loading ? <CircularProgress color='common' size='1.7rem' sx={{display:'flex'}}/> : <IconArrow />}</Button>
                                </form>
                                { isError && <p>{errorCodes[errorCode]}</p> }
                            </Stack>
                        </Stack>
                    </Stack>
                    
                    <Stack className='AddressResultBox' gap='5px'>
                        <Stack>
                            <h5 style={{marginTop:'0'}}>IP ADDRESS</h5>
                            <h2>{addressData ? addressData.ip : ''}</h2>
                        </Stack>
                        <Stack>
                            <h5>LOCATION</h5>
                            <h2>
                                {addressData && addressData.location.city}
                                {addressData && (addressData.location.region || addressData.location.postalCode) ? `, ${addressData.location.region || ''} ${addressData.location.postalCode || ''}` : ''}
                            </h2>                        
                        </Stack>
                        <Stack>
                            <h5>TIMEZONE</h5>
                            <h2>{addressData ? `UTC ${addressData.location.timezone}` : ''}</h2>
                        </Stack>
                        <Stack>
                            <h5>ISP</h5>
                            <h2>{addressData ? addressData.isp : ''}</h2>
                        </Stack>
                    </Stack>

                    <MapContainer center={coords} zoom={0} zoomControl={false} ref={mapRef} style={{zIndex:'1'}}>
                        <TileLayer
                            url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}{r}.png"
                        />
                        {coords[0] !== 0 && coords[1] !== 0 && (
                            <Marker position={coords}>
                                <Popup closeButton={false}>{addressData ? addressData.as.name : ''}</Popup>
                            </Marker>
                        )}
                    </MapContainer>
                </Stack>
                <Box sx={{color:'darkgray', fontSize:'10px', width:'100vw', textAlign:'center', position:'absolute', bottom:'10px', zIndex:'3'}}>
                    Challenge by <a style={{color: 'gray', fontSize:'10px', textDecoration:'none'}} href="https://www.frontendmentor.io/challenges/ip-address-tracker-I8-0yYAH0/hub" target="_blank">Frontend Mentor</a>. 
                    Coded by <a style={{color: 'gray', fontSize:'10px', textDecoration:'none'}} href="https://github.com/brandonlouis">Brandon Louis Chia</a>.
                </Box>
            </ThemeProvider>
        );
    }
    
}

export default App;