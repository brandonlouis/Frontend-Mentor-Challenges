import React, { useState, useRef, useEffect } from 'react'
import { Box, Stack, Typography } from '@mui/material'
import { useMediaQuery } from 'react-responsive'

export default function Crew() {
    const isTablet = useMediaQuery({ query: '(max-width: 1150px)' })
    const isMobile = useMediaQuery({ query: '(max-width: 600px)' })

    const [active, setActive] = useState(0);
    const content = useRef(null);
    const img = useRef(null);

    const crew = [
        {
            title: 'Commander',
            name: 'Douglas Hurley',
            body: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
            img: 'image-douglas-hurley.png',
        },
        {
            title: 'Mission Specialist',
            name: 'Mark Shuttleworth',
            body: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
            img: 'image-mark-shuttleworth.png',
        },
        {
            title: 'Pilot',
            name: 'Victor Glover',
            body: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
            img: 'image-victor-glover.png',
        },
        {
            title: 'Flight Engineer',
            name: 'Anousheh Ansari',
            body: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
            img: 'image-anousheh-ansari.png',
        }
    ]

    useEffect(() => {
        document.title = 'Crew | Space Tourism'
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

    if (!isTablet && !isMobile) {
        return (
            <Box className='CrewContent' width='100%' height='100vh' display='flex'>
                <Box width='78%' margin='0 12%' display='flex' justifyContent='space-between' marginTop='108px'>
                    <Stack justifyContent='center' width='100%'>
                        <Typography variant='h5' color='white'><b style={{opacity:'0.3', paddingRight:'28px'}}>02</b> Meet your crew</Typography>
    
                        <Stack spacing='10px' ref={content} padding='105px 0'>
                            <Typography variant='h4'>{crew[active].title}</Typography>
                            <Typography variant='h3'>{crew[active].name}</Typography>
                            <Typography variant='body' height='160px' marginTop='15px'>{crew[active].body}</Typography>
                        </Stack>
    
                        <Box display='flex' gap='20px'>
                            <span class={`CrewDot ${active===0 ? " active" : ""}`} onClick={() => checkActive(0)}></span>
                            <span class={`CrewDot ${active===1 ? " active" : ""}`} onClick={() => checkActive(1)}></span>
                            <span class={`CrewDot ${active===2 ? " active" : ""}`} onClick={() => checkActive(2)}></span>
                            <span class={`CrewDot ${active===3 ? " active" : ""}`} onClick={() => checkActive(3)}></span>
                        </Box>
                    </Stack>
    
                    <Box width='50%' display='flex' alignItems='flex-end' justifyContent='flex-end'>
                        <img ref={img} src={require(`../img/crew/${crew[active].img}`)} />
                    </Box>
                </Box>
            </Box>
        )
        
    } else if (isMobile) {
        return (
            <Stack className='CrewContent' alignItems='center' textAlign='center' width='100%' height='100vh'>                
                    <Typography variant='h5Mobile' color='white' letterSpacing='2.7px' paddingTop='100px'><b style={{opacity:'0.3', paddingRight:'12px'}}>02</b> Meet your crew</Typography>

                    <Stack alignItems='center'>
                        <Stack textAlign='center' alignItems='center'>
                            
                            <Box ref={img} paddingTop='12px' display='flex'>
                                <img ref={img} height='223px' src={require(`../img/crew/${crew[active].img}`)} />
                            </Box>
                            <hr style={{width:'95%', opacity:'0.15', margin:'0'}} />

                            <Box display='flex' gap='20px' margin='30px'>
                                <span class={`CrewDot ${active===0 ? " active" : ""}`} onClick={() => checkActive(0)}></span>
                                <span class={`CrewDot ${active===1 ? " active" : ""}`} onClick={() => checkActive(1)}></span>
                                <span class={`CrewDot ${active===2 ? " active" : ""}`} onClick={() => checkActive(2)}></span>
                                <span class={`CrewDot ${active===3 ? " active" : ""}`} onClick={() => checkActive(3)}></span>
                            </Box>

                            <Stack ref={content}>
                                <Typography variant='h4Mobile' marginBottom='8px'>{crew[active].title}</Typography>
                                <Typography variant='h3Mobile'>{crew[active].name}</Typography>
                                <Typography variant='bodyMobile' marginTop='15px'>{crew[active].body}</Typography>
                            </Stack>
                            
                        </Stack>
                    </Stack>
            </Stack>
        )
    } else if (isTablet) {
        return (
            <Stack className='CrewContent' justifyContent='center' width='100%' height='100vh' paddingTop='79px'>
                <Stack>
                    <Typography variant='h5Tablet' color='white' padding='0 0 50px 40px'><b style={{opacity:'0.3', paddingRight:'16px'}}>02</b> Meet your crew</Typography>

                    <Stack alignItems='center'>
                        <Stack textAlign='center' alignItems='center'>
                            <Stack ref={content} height='100%' width='77%'>
                                <Typography variant='h4Tablet' marginBottom='8px'>{crew[active].title}</Typography>
                                <Typography variant='h3Tablet'>{crew[active].name}</Typography>
                                <Typography variant='bodyTablet' marginTop='15px'>{crew[active].body}</Typography>
                            </Stack>
                            <Box display='flex' gap='20px' marginTop='40px'>
                                <span class={`CrewDot ${active===0 ? " active" : ""}`} onClick={() => checkActive(0)}></span>
                                <span class={`CrewDot ${active===1 ? " active" : ""}`} onClick={() => checkActive(1)}></span>
                                <span class={`CrewDot ${active===2 ? " active" : ""}`} onClick={() => checkActive(2)}></span>
                                <span class={`CrewDot ${active===3 ? " active" : ""}`} onClick={() => checkActive(3)}></span>
                            </Box>
                        </Stack>
                        <Box ref={img} paddingTop='50px'>
                            <img ref={img} height='532px' src={require(`../img/crew/${crew[active].img}`)} />
                        </Box>
                    </Stack>
                </Stack>
            </Stack>
        )
    }

    
}