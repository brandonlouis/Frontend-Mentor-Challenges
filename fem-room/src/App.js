import './App.css';
import React, { useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import { Box, Stack, Button, Modal, createTheme, ThemeProvider } from '@mui/material'
import { ReactComponent as Logo } from './img/logo.svg'
import { ReactComponent as IconArrow } from './img/icon-arrow.svg'
import { ReactComponent as IconAngleLeft } from './img/icon-angle-left.svg'
import { ReactComponent as IconAngleRight } from './img/icon-angle-right.svg'
import { ReactComponent as IconHamburger } from './img/icon-hamburger.svg'
import { ReactComponent as IconClose } from './img/icon-close.svg'

const theme = createTheme({
    components: {
        MuiButton: {
            styleOverrides: {
                root: ({ ownerState }) => ({
                    ...(ownerState.variant === 'filled' && {
                        backgroundColor: '#000',
                        borderRadius: '0',
                        minWidth: '10px',
                        width: '50%',
                        height: '100%',
                        '&:hover': {
                            backgroundColor: '#444',
                        },
                    }),
                }),
            },
        },
    },
});


function App() {
    const isTablet = useMediaQuery({ query: '(max-width: 760px)' })
    const isMobile = useMediaQuery({ query: '(max-width: 415px)' })

    const [openModal, setOpenModal] = React.useState(false)
    const openModalNavbar = () => setOpenModal(true)
    const closeModalNavbar = () => setOpenModal(false)

    const [contentIndex, setContentIndex] = useState(1);
    const slidesContent = [
        {
            title: "Discover innovative ways to decorate",
            body: "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love."
        },
        {
            title: "We are available all across the globe",
            body: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we're in most major cities throughout the country. Find the branch nearest to you using our store locator. Any questions? Don't hesitate to contact us today."
        },
        {
            title: "Manufactured with the best materials",
            body: "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office."
        }
    ]


    useEffect(() => {
        const handleKeyPress = (event) => {
            if (event.key === 'ArrowLeft') {
                decrementIndex()
            } else if (event.key === 'ArrowRight') {
                incrementIndex()
            }
        }
    
        window.addEventListener('keydown', handleKeyPress)

        return () => {
            window.removeEventListener('keydown', handleKeyPress)
        }
    }, [contentIndex])


    const incrementIndex = () => {
        if (contentIndex < 3) {
            setContentIndex(contentIndex + 1)
        } else {
            setContentIndex(1)
        }
    }
    const decrementIndex = () => {
        if (contentIndex > 1) {
            setContentIndex(contentIndex - 1)
        } else {
            setContentIndex(3)
        }
    }

    
    if (!isMobile && !isTablet) {
        return (
            <ThemeProvider theme={theme}>
                <Box height='100vh' width='100vw' position='relative' display='grid' gridTemplateColumns='[front] repeat(2,[col-start] 1fr [col-end]) .4fr 1fr [back]' gridTemplateRows='2fr .3fr 1fr'>

                    <Box display='flex' color='white' position='absolute' top='66px' left='66px' gap='30px'>
                        <a href='/'><Logo /></a>
                        <a className='navLinks' style={{marginLeft:'20px'}} href='#'>home</a>
                        <a className='navLinks' href='#'>shop</a>
                        <a className='navLinks' href='#'>about</a>
                        <a className='navLinks' href='#'>contact</a>
                    </Box>

                    <img src={require(`./img/desktop-image-hero-${contentIndex}.jpg`)} style={{gridColumn:'front/col-end 2', gridRow:'1/3', objectFit:'cover'}}/>
                        
                    <Stack className='slideContent' bgcolor='white' justifyContent='center' position='relative' gridColumn='col-end 2/back' gridRow='1/3'>
                        <h1>{slidesContent[contentIndex-1].title}</h1>
                        <p>{slidesContent[contentIndex-1].body}</p>
                        <a className='shopNow' href='#'>SHOP NOW <IconArrow /></a>

                        <Box className='slideArrows' display='flex' position='absolute' bottom='0' left='0' bgcolor='black'>
                            <Button variant='filled' onClick={decrementIndex}><IconAngleLeft /></Button>
                            <Button variant='filled' onClick={incrementIndex}><IconAngleRight /></Button>
                        </Box>
                    </Stack>
                        
                    <img src={require('./img/image-about-dark.jpg')} style={{gridColumn:'front/col-end 1', gridRow:'3/4', objectFit:'cover'}}/>

                    <Stack className='aboutContent' bgcolor='white' justifyContent='center' gridColumn='col-end 1/4' gridRow='3/4'>
                        <h3>ABOUT OUR FURNITURE</h3>
                        <p>Our multifunctional collection blends design and function to suit your individual taste. Make each room unique, or pick a cohesive theme that best express your interests and what inspires you. Find the furniture pieces you need, from traditional to contemporary styles or anything in between. Product specialists are available to help you create your dream space.</p>
                    </Stack>

                    <img src={require('./img/image-about-light.jpg')} style={{gridColumn:'4/back', gridRow:'3/4', objectFit:'cover'}}/>
                    
                    <Box sx={{color:'darkgray', fontSize:'10px', position:'absolute', bottom:'10px', width:'100vw', textAlign:'center'}}>
                        Challenge by <a style={{color: 'gray', fontSize:'10px', textDecoration:'none'}} href="https://www.frontendmentor.io/challenges/room-homepage-BtdBY_ENq" target="_blank">Frontend Mentor</a>. 
                        Coded by <a style={{color: 'gray', fontSize:'10px', textDecoration:'none'}} href="https://github.com/brandonlouis">Brandon Louis Chia</a>.
                    </Box>
                </Box>
            </ThemeProvider>
        );
    } else {
        return (
            <ThemeProvider theme={theme}>
                <Stack height='100vh' width='100vw' position='relative'>

                    {isMobile ?
                        <>
                        <Box display='flex' color='white' position='absolute' top='40px' left='40px' zIndex='10' width='48%' justifyContent='space-between'>
                            <Button sx={{padding:'0', minWidth:'auto'}} onClick={openModalNavbar}><IconHamburger /></Button>
                            <a href='/'><Logo /></a>
                        </Box>
                        <Modal sx={{display:'flex', justifyContent:'flex-end'}} open={openModal} onClose={closeModalNavbar}>
                            <Box className='modalNavbar' display='flex' justifyContent='space-between' alignItems='center' height='100px' width='100%' bgcolor='white' padding='0 40px'>
                                <a onClick={closeModalNavbar}><IconClose /></a>
            
                                <a className='navLinks' style={{marginLeft:'20px'}} href='#'>home</a>
                                <a className='navLinks' href='#'>shop</a>
                                <a className='navLinks' href='#'>about</a>
                                <a className='navLinks' href='#'>contact</a>
                            </Box>
                        </Modal>
                        </>
                        :
                        <Box display='flex' color='white' position='absolute' top='40px' left='40px' gap='30px' zIndex='10'>
                            <a href='/'><Logo /></a>
                            <a className='navLinks' style={{marginLeft:'20px'}} href='#'>home</a>
                            <a className='navLinks' href='#'>shop</a>
                            <a className='navLinks' href='#'>about</a>
                            <a className='navLinks' href='#'>contact</a>
                        </Box>
                    }
                    

                    <Box position='relative'>
                        <img src={require(`./img/mobile-image-hero-${contentIndex}.jpg`)} width='100%' style={{objectFit:'cover'}}/>
                        <Box className='slideArrows' display='flex' position='absolute' bottom='0' right='0' bgcolor='black'>
                            <Button variant='filled' onClick={decrementIndex}><IconAngleLeft /></Button>
                            <Button variant='filled' onClick={incrementIndex}><IconAngleRight /></Button>
                        </Box>
                    </Box>
                    
                    <Stack className='slideContent' bgcolor='white' justifyContent='center'>
                        <h1>{slidesContent[contentIndex-1].title}</h1>
                        <p>{slidesContent[contentIndex-1].body}</p>
                        <a className='shopNow' href='#'>SHOP NOW <IconArrow /></a>
                    </Stack>
                        
                    <img src={require('./img/image-about-dark.jpg')} width='100%' style={{objectFit:'cover'}}/>

                    <Stack className='aboutContent' bgcolor='white' justifyContent='center' gridColumn='col-end 1/4' gridRow='3/4'>
                        <h3>ABOUT OUR FURNITURE</h3>
                        <p>Our multifunctional collection blends design and function to suit your individual taste. Make each room unique, or pick a cohesive theme that best express your interests and what inspires you. Find the furniture pieces you need, from traditional to contemporary styles or anything in between. Product specialists are available to help you create your dream space.</p>
                    </Stack>

                    <Box position='relative' gridColumn='4/back' gridRow='3/4'>
                        <img src={require('./img/image-about-light.jpg')} width='100%' style={{objectFit:'cover'}}/>

                        <Box sx={{color:'gray', fontSize:'10px', position:'absolute', bottom:'10px', width:'100vw', textAlign:'center'}}>
                            Challenge by <a style={{color: 'dimgray', fontSize:'10px', textDecoration:'none'}} href="https://www.frontendmentor.io/challenges/room-homepage-BtdBY_ENq" target="_blank">Frontend Mentor</a>. 
                            Coded by <a style={{color: 'dimgray', fontSize:'10px', textDecoration:'none'}} href="https://github.com/brandonlouis">Brandon Louis Chia</a>.
                        </Box>
                    </Box>
                </Stack>
            </ThemeProvider>
        );
    }
}

export default App;