import React, { useState, useRef, useEffect } from 'react'
import { Box, Typography, Stack, Pagination } from '@mui/material'
import { useMediaQuery } from 'react-responsive'

export default function Technology() {
    const isTablet = useMediaQuery({ query: '(max-width: 1150px)' })
    const isMobile = useMediaQuery({ query: '(max-width: 600px)' })

    const [active, setActive] = useState(0);
    const content = useRef(null);
    const img = useRef(null);

    const technologies = [
        {
            title: 'Launch Vehicle',
            body: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
            img: 'image-launch-vehicle-',
        },
        {
            title: 'Spaceport',
            body: "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
            img: 'image-spaceport-',
        },
        {
            title: 'Space Capsule',
            body: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
            img: 'image-space-capsule-',

        },
    ]

    useEffect(() => {
        document.title = 'Technology | Space Tourism'
    }, [])

    function checkActive(value) {
        if (value === active) return

        if (!isTablet && !isMobile) {
            if (value > active) {
                content.current.classList.add('SlideOutTop')
                img.current.classList.add('SlideOutTop')
    
                setTimeout(() => {
                    setActive(value)
                    content.current.classList.remove('SlideOutTop')
                    img.current.classList.remove('SlideOutTop')
    
                    content.current.classList.add('SlideInBottom')
                    img.current.classList.add('SlideInBottom')
                }, 400)
                
            } else {
                content.current.classList.add('SlideOutBottom')
                img.current.classList.add('SlideOutBottom')
    
                setTimeout(() => {
                    setActive(value)
                    content.current.classList.remove('SlideOutBottom')
                    img.current.classList.remove('SlideOutBottom')
    
                    content.current.classList.add('SlideInTop')
                    img.current.classList.add('SlideInTop')
                }, 400)
            }
    
            setTimeout(() => {
                content.current.classList.remove('SlideInBottom')
                img.current.classList.remove('SlideInBottom')
                content.current.classList.remove('SlideInTop')
                img.current.classList.remove('SlideInTop')
            }, 800)

        } else if (isTablet || isMobile) {
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
                // img.current.classList.remove('SlideInRight')
                content.current.classList.remove('SlideInRight')
                img.current.classList.remove('SlideInRight')
                content.current.classList.remove('SlideInLeft')
                img.current.classList.remove('SlideInLeft')
            }, 800)
        }
        
    }

    if (!isTablet && !isMobile) {
        return (
            <Box className='TechnologyContent' width='100%' height='100vh' display='flex'>
                <Stack justifyContent='center' width='88%' marginLeft='12%' marginTop='125px'>
                    <Typography variant='h5' color='white'><b style={{opacity:'0.3', paddingRight:'28px'}}>03</b> Space launch 101</Typography>
    
                    <Box display='flex' alignItems='center' justifyContent='space-between' width='100%'>
                        <Box display='flex' justifyContent='space-between' width='50%' position='relative'>
                            <Pagination variant='desktop' count={3} hidePrevButton hideNextButton onChange={(e, page) => checkActive(page - 1)} />
                            <Stack ref={content} width='470px'>
                                <Typography color='#D0D6F9' marginBottom='11px' variant='nav'>The Terminology...</Typography>
                                <Typography variant='h3' marginBottom='17px'>{technologies[active].title}</Typography>
                                <Typography variant='body'>{technologies[active].body}</Typography>
                            </Stack>
                        </Box>
    
                        <Box width='50%' display='flex' justifyContent='flex-end'>
                            <img ref={img} src={require(`../img/technology/${technologies[active].img}portrait.jpg`)}></img>
                        </Box>
                    </Box>
                </Stack>
            </Box>
        )
        
    } else if (isMobile) {
        return (
            <Stack className='TechnologyContent' alignItems='center' textAlign='center' width='100%' height='100vh'>                
                    <Typography variant='h5Mobile' color='white' letterSpacing='2.7px' paddingTop='100px'><b style={{opacity:'0.3', paddingRight:'12px'}}>03</b> Space launch 101</Typography>

                    <Box ref={img} padding='10px 0 30px'>
                        <img  width='100%' ref={img} src={require(`../img/technology/${technologies[active].img}landscape.jpg`)}></img>
                    </Box>
                    <Stack alignItems='center' justifyContent='space-between' spacing='26px'>
                        <Pagination variant='mobile' count={3} hidePrevButton hideNextButton onChange={(e, page) => checkActive(page - 1)} />

                        <Stack ref={content}>
                            <Typography color='#D0D6F9' marginBottom='11px' fontSize='16px' variant='navTablet'>The Terminology...</Typography>
                            <Typography variant='h3Mobile' marginBottom='17px'>{technologies[active].title}</Typography>
                            <Typography variant='bodyMobile'>{technologies[active].body}</Typography>
                        </Stack>
                    </Stack>
            </Stack>
        )

    } else if (isTablet) {
        return (
            <Stack className='TechnologyContent' justifyContent='center' width='100%' height='100vh' paddingTop='30px'>
                <Typography variant='h5Tablet' color='white' padding='0 0 60px 40px'><b style={{opacity:'0.3', paddingRight:'16px'}}>03</b> Space launch 101</Typography>
                
                <Stack justifyContent='center' alignItems='center' textAlign='center'>
                    <Box paddingBottom='56px' width='100%' overflow='hidden'>
                        <img width='100%' ref={img} src={require(`../img/technology/${technologies[active].img}landscape.jpg`)}></img>
                    </Box>

                    <Stack alignItems='center' justifyContent='space-between' spacing='44px'>
                        <Pagination variant='tablet' count={3} hidePrevButton hideNextButton onChange={(e, page) => checkActive(page - 1)} />

                        <Stack ref={content}>
                            <Typography color='#D0D6F9' marginBottom='11px' fontSize='16px' variant='navTablet'>The Terminology...</Typography>
                            <Typography variant='h3Tablet' marginBottom='17px'>{technologies[active].title}</Typography>
                            <Typography variant='bodyTablet' height='140px' width='458px'>{technologies[active].body}</Typography>
                        </Stack>
                    </Stack>
                </Stack>
            </Stack>
        )
    }
}
