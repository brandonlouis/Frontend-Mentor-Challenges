import React, { useState, useRef, useEffect } from 'react'
import { Box, Stack, Typography } from '@mui/material'
import { useMediaQuery } from 'react-responsive'

export default function Destination() {
    const isTablet = useMediaQuery({ query: '(max-width: 1150px)' })
    const isMobile = useMediaQuery({ query: '(max-width: 600px)' })

    const [active, setActive] = useState(0);
    const img = useRef(null);
    const content = useRef(null);

    const destinations = [
        {
            name: 'Moon',
            img: 'image-moon.png',
            body: "See our planet as you've never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you're there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
            distance: '384,400 km',
            time: '3 Days',
        },
        {
            name: 'Mars',
            img: 'image-mars.png',
            body: "Don't forget to pack your hiking boots. You'll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It's two and a half times the size of Everest!",
            distance: '225 Mil. km',
            time: '9 Months',
        },
        {
            name: 'Europa',
            img: 'image-europa.png',
            body: "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover's dream. With an icy surface, it's perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
            distance: '628 Mil. km',
            time: '3 Years',
        },
        {
            name: 'Titan',
            img: 'image-titan.png',
            body: "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
            distance: '1.6 Bil. km',
            time: '7 Years',
        }
    ]

    useEffect(() => {
        document.title = 'Destination | Space Tourism'
    }, [])

    function checkActive(value) {
        if (value === active) return

        if (value > active) {
            content.current.classList.add('SlideOutLeft')
            img.current.classList.add('SlideOutLeft')

            setTimeout(() => {
                setActive(value)
                content.current.classList.remove('SlideOutLeft')
                img.current.classList.remove('SlideOutLeft')

                content.current.classList.add('SlideInRight')
                img.current.classList.add('SlideInRight')
            }, 400)
            
        } else {
            content.current.classList.add('SlideOutRight')
            img.current.classList.add('SlideOutRight')

            setTimeout(() => {
                setActive(value)
                content.current.classList.remove('SlideOutRight')
                img.current.classList.remove('SlideOutRight')

                content.current.classList.add('SlideInLeft')
                img.current.classList.add('SlideInLeft')
            }, 400)
        }

        setTimeout(() => {
            content.current.classList.remove('SlideInRight')
            img.current.classList.remove('SlideInRight')
            content.current.classList.remove('SlideInLeft')
            img.current.classList.remove('SlideInLeft')
        }, 800)
    }

    if (!isMobile && !isTablet) {
        return (
            <Box className='DestinationContent' width='100%' height='100vh' display='flex'>
                <Stack justifyContent='center' width='78%' margin='0 12%' marginTop='120px'>
                    <Typography variant='h5' color='white'><b style={{opacity:'0.3', paddingRight:'28px'}}>01</b> Pick your destination</Typography>
                    <Box width='95%' marginLeft='5%' display='flex' alignItems='center' justifyContent='space-between'>
                        <Box ref={img} paddingTop='75px'>
                            <img src={require(`../img/destination/${destinations[active].img}`)} />
                        </Box>
    
                        <Stack justifyContent='space-between' spacing='30px' width='450px'>
                            <Box display='flex' gap='35px' margin='35px 0 20px'>
                                <a onClick={() => checkActive(0)} className={`DestinationSubLinks ${active===0 ? " active" : ""}`}><Typography variant='nav' style={{color: active === 0 ? 'white' : '#D0D6F9'}}>Moon</Typography></a>
    
                                <a onClick={() => checkActive(1)} className={`DestinationSubLinks ${active===1 ? " active" : ""}`}><Typography variant='nav' style={{color: active === 1 ? 'white' : '#D0D6F9'}}>Mars</Typography></a>
    
                                <a onClick={() => checkActive(2)} className={`DestinationSubLinks ${active===2 ? " active" : ""}`}><Typography variant='nav' style={{color: active === 2 ? 'white' : '#D0D6F9'}}>Europa</Typography></a>
    
                                <a onClick={() => checkActive(3)} className={`DestinationSubLinks ${active===3 ? " active" : ""}`}><Typography variant='nav' style={{color: active === 3 ? 'white' : '#D0D6F9'}}>Titan</Typography></a>
                            </Box>
                            <Stack ref={content} height='100%' gap='20px'>
                                <Box>
                                    <Typography variant='h2'>{destinations[active].name}</Typography>
                                    <Typography variant='body'>{destinations[active].body}</Typography>
                                </Box>
                                <hr style={{width:'100%', opacity:'0.2', margin:'25px 0 5px'}}/>
                                <Box width='100%' display='flex'>
                                    <Stack width='50%'>
                                        <Typography variant='subtitle2'>Avg. Distance</Typography>
                                        <Typography variant='subtitle1'>{destinations[active].distance}</Typography>
                                    </Stack>
                                    <Box width='50%'>
                                        <Typography variant='subtitle2'>Est. Travel Time</Typography>
                                        <Typography variant='subtitle1'>{destinations[active].time}</Typography>
                                    </Box>
                                </Box>
                            </Stack>
                        </Stack>
                    </Box>
                </Stack>
            </Box>
        )
        
    } else if (isMobile) {
        return (
            <Stack className='DestinationContent' alignItems='center' textAlign='center' width='100%' height='100vh'>                
                    <Typography variant='h5Mobile' color='white' letterSpacing='2.7px' paddingTop='100px'><b style={{opacity:'0.3', paddingRight:'12px'}}>01</b> Pick your destination</Typography>

                    <Box ref={img} padding='15px 0 25px'>
                        <img width='180px' src={require(`../img/destination/${destinations[active].img}`)} />
                    </Box>
                    <Stack alignItems='center' justifyContent='space-between' spacing='20px'>
                        <Box display='flex' gap='26px' margin='35px 0 20px'>
                            <a onClick={() => checkActive(0)} className={`DestinationSubLinks ${active===0 ? " active" : ""}`}><Typography variant='navTablet' style={{color: active === 0 ? 'white' : '#D0D6F9'}}>Moon</Typography></a>

                            <a onClick={() => checkActive(1)} className={`DestinationSubLinks ${active===1 ? " active" : ""}`}><Typography variant='navTablet' style={{color: active === 1 ? 'white' : '#D0D6F9'}}>Mars</Typography></a>

                            <a onClick={() => checkActive(2)} className={`DestinationSubLinks ${active===2 ? " active" : ""}`}><Typography variant='navTablet' style={{color: active === 2 ? 'white' : '#D0D6F9'}}>Europa</Typography></a>

                            <a onClick={() => checkActive(3)} className={`DestinationSubLinks ${active===3 ? " active" : ""}`}><Typography variant='navTablet' style={{color: active === 3 ? 'white' : '#D0D6F9'}}>Titan</Typography></a>
                        </Box>
                        <Stack ref={content} height='100%' gap='20px'>
                            <Stack>
                                <Typography variant='h2Mobile'>{destinations[active].name}</Typography>
                                <Typography variant='bodyMobile'>{destinations[active].body}</Typography>
                            </Stack>
                            <hr style={{width:'100%', opacity:'0.2'}}/>
                            <Stack>
                                <Typography variant='subtitle2'>Avg. Distance</Typography>
                                <Typography variant='subtitle1'>{destinations[active].distance}</Typography>

                                <Typography variant='subtitle2' marginTop='20px'>Est. Travel Time</Typography>
                                <Typography variant='subtitle1'>{destinations[active].time}</Typography>
                            </Stack>
                        </Stack>
                    </Stack>
            </Stack>
        )

    } else if (isTablet) {
        return (
            <Stack className='DestinationContent' justifyContent='center' width='100%' height='100vh' paddingTop='50px'>
                <Typography variant='h5Tablet' color='white' paddingLeft='40px'><b style={{opacity:'0.3', paddingRight:'16px'}}>01</b> Pick your destination</Typography>
                
                <Stack justifyContent='center' alignItems='center' textAlign='center'>
                    <Box ref={img} padding='50px 0'>
                        <img width='300px' src={require(`../img/destination/${destinations[active].img}`)} />
                    </Box>
                    <Stack alignItems='center' justifyContent='space-between' spacing='30px' width='450px'>
                        <Box display='flex' gap='35px' margin='35px 0 20px'>
                            <a onClick={() => checkActive(0)} className={`DestinationSubLinks ${active===0 ? " active" : ""}`}><Typography variant='nav' style={{color: active === 0 ? 'white' : '#D0D6F9'}}>Moon</Typography></a>

                            <a onClick={() => checkActive(1)} className={`DestinationSubLinks ${active===1 ? " active" : ""}`}><Typography variant='nav' style={{color: active === 1 ? 'white' : '#D0D6F9'}}>Mars</Typography></a>

                            <a onClick={() => checkActive(2)} className={`DestinationSubLinks ${active===2 ? " active" : ""}`}><Typography variant='nav' style={{color: active === 2 ? 'white' : '#D0D6F9'}}>Europa</Typography></a>

                            <a onClick={() => checkActive(3)} className={`DestinationSubLinks ${active===3 ? " active" : ""}`}><Typography variant='nav' style={{color: active === 3 ? 'white' : '#D0D6F9'}}>Titan</Typography></a>
                        </Box>
                        <Stack ref={content} height='100%' gap='20px'>
                            <Stack>
                                <Typography variant='h2Tablet'>{destinations[active].name}</Typography>
                                <Typography variant='bodyTablet' width='573px'>{destinations[active].body}</Typography>
                            </Stack>
                            <hr style={{width:'100%', opacity:'0.2', margin:'25px 0 5px'}}/>
                            <Box width='100%' display='flex' justifyContent='space-evenly'>
                                <Stack width='30%'>
                                    <Typography variant='subtitle2'>Avg. Distance</Typography>
                                    <Typography variant='subtitle1'>{destinations[active].distance}</Typography>
                                </Stack>
                                <Box width='30%'>
                                    <Typography variant='subtitle2'>Est. Travel Time</Typography>
                                    <Typography variant='subtitle1'>{destinations[active].time}</Typography>
                                </Box>
                            </Box>
                        </Stack>
                    </Stack>
                </Stack>
            </Stack>
        )
    }
}
