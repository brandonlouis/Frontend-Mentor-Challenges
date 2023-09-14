import React from 'react'
import { ReactComponent as Logo } from '../img/logo.svg'
import { ReactComponent as Facebook } from '../img/icon-facebook.svg'
import { ReactComponent as Twitter } from '../img/icon-twitter.svg'
import { ReactComponent as Pinterest } from '../img/icon-pinterest.svg'
import { ReactComponent as Instagram } from '../img/icon-instagram.svg'
import { Box, Button, Grid } from '@mui/material'
import { useMediaQuery } from 'react-responsive'


export default function Footer() {
    const isMobile = useMediaQuery({ query: '(max-width: 830px)' })

    if (!isMobile) {
        return (
            <>
                <Box className="Footer" sx={{width:'100vw'}}>
                    <Box className="BoostLink" sx={{height:'250px', backgroundColor:'#3b3054'}}>
                        <Box sx={{margin:'0 10%', height:'inherit', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
                            <h1 style={{color:'white', margin:'0 0 20px'}}>Boost your links today</h1>
                            <Button variant="contained" color="primary" size="large" sx={{borderRadius:'25px', color:'white'}}>Get Started</Button>
                        </Box>
                    </Box>

                    <Box className="FooterLinks" sx={{backgroundColor:'#232127'}}>
                        <Box sx={{padding:'100px 10%', display:'flex', justifyContent:'space-between'}}>
                            <Box>
                                <a href='/' style={{filter:'brightness(0) invert(1)'}}><Logo /></a>
                            </Box>
                            <Box>
                            </Box>
                            <Box sx={{display:'flex', flexDirection:'column'}}>
                                <a href='#' style={{marginBottom:'20px'}}><b>Features</b></a>

                                <Box className='FooterSubLinks' sx={{display:'flex', flexDirection:'column'}}>
                                    <a href='#'>Link Shortening</a>
                                    <a href='#'>Branded Links</a>
                                    <a href='#'>Analytics</a>
                                </Box>
                            </Box>
                            <Box sx={{display:'flex', flexDirection:'column'}}>
                                <a href='#' style={{marginBottom:'20px'}}><b>Resources</b></a>

                                <Box className='FooterSubLinks' sx={{display:'flex', flexDirection:'column'}}>
                                    <a href='#'>Blog</a>
                                    <a href='#'>Developers</a>
                                    <a href='#'>Support</a>
                                </Box>
                            </Box>
                            <Box sx={{display:'flex', flexDirection:'column', height:'120px'}}>
                                <a href='#' style={{marginBottom:'20px'}}><b>Company</b></a>

                                <Box className='FooterSubLinks' sx={{display:'flex', flexDirection:'column'}}>
                                    <a href='#'>About</a>
                                    <a href='#'>Our Team</a>
                                    <a href='#'>Careers</a>
                                    <a href='#'>Contact</a>
                                </Box>
                            </Box>
                            <Box sx={{display:'flex', justifyContent:'space-between', width:'175px'}}>
                                <a href='https://www.facebook.com/'><Facebook /></a>
                                <a href='https://twitter.com/'><Twitter /></a>
                                <a href='https://www.pinterest.com/'><Pinterest /></a>
                                <a href='https://www.instagram.com/'><Instagram /></a>
                            </Box>
                        </Box>
                        <Box sx={{color:'gray', fontSize:'10px', width:'100vw', textAlign:'center', paddingBottom:'10px'}}>
                            Challenge by <a style={{color: 'darkgray', fontSize:'10px'}} href="https://www.frontendmentor.io/challenges/url-shortening-api-landing-page-2ce3ob-G/hub" target="_blank">Frontend Mentor</a>. 
                            Coded by <a style={{color: 'darkgray', fontSize:'10px'}} href="https://github.com/brandonlouis">Brandon Louis Chia</a>.
                        </Box>
                    </Box>
                </Box>
            </>
        )
    } else {
        return (
            <>
                <Box className="Footer" sx={{width:'100vw'}}>
                    <Box className="BoostLink" sx={{height:'250px', backgroundColor:'#3b3054'}}>
                        <Box sx={{margin:'0 5%', height:'inherit', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
                            <h2 style={{color:'white', margin:'0 0 20px'}}>Boost your links today</h2>
                            <Button variant="contained" color="primary" size="large" sx={{borderRadius:'25px', color:'white', padding:'8px 35px'}}>Get Started</Button>
                        </Box>
                    </Box>

                    <Box className="FooterLinks" sx={{backgroundColor:'#232127'}}>
                        <Box sx={{padding:'50px', display:'flex', flexDirection:'column', alignItems:'center', textAlign:'center'}}>
                            <Box>
                                <a href='/' style={{filter:'brightness(0) invert(1)'}}><Logo /></a>
                            </Box>
                            <Box sx={{display:'flex', flexDirection:'column', margin:'35px 0 30px 0'}}>
                                <a href='#' style={{marginBottom:'15px'}}>Features</a>

                                <Box className='FooterSubLinks' sx={{display:'flex', flexDirection:'column'}}>
                                    <a href='#'>Link Shortening</a>
                                    <a href='#'>Branded Links</a>
                                    <a href='#'>Analytics</a>
                                </Box>
                            </Box>
                            <Box sx={{display:'flex', flexDirection:'column'}}>
                                <a href='#' style={{marginBottom:'15px'}}>Resources</a>

                                <Box className='FooterSubLinks' sx={{display:'flex', flexDirection:'column'}}>
                                    <a href='#'>Blog</a>
                                    <a href='#'>Developers</a>
                                    <a href='#'>Support</a>
                                </Box>
                            </Box>
                            <Box sx={{display:'flex', flexDirection:'column', margin:'30px 0 35px 0'}}>
                                <a href='#' style={{marginBottom:'15px'}}>Company</a>

                                <Box className='FooterSubLinks' sx={{display:'flex', flexDirection:'column'}}>
                                    <a href='#'>About</a>
                                    <a href='#'>Our Team</a>
                                    <a href='#'>Careers</a>
                                    <a href='#'>Contact</a>
                                </Box>
                            </Box>
                            <Box sx={{display:'flex', justifyContent:'space-between', width:'150px'}}>
                                <a href='https://www.facebook.com/'><Facebook /></a>
                                <a href='https://twitter.com/'><Twitter /></a>
                                <a href='https://www.pinterest.com/'><Pinterest /></a>
                                <a href='https://www.instagram.com/'><Instagram /></a>
                            </Box>
                        </Box>
                        <Box sx={{color:'gray', fontSize:'10px', width:'100vw', textAlign:'center', paddingBottom:'10px'}}>
                            Challenge by <a style={{color: 'darkgray', fontSize:'10px'}} href="https://www.frontendmentor.io/challenges/url-shortening-api-landing-page-2ce3ob-G/hub" target="_blank">Frontend Mentor</a>. 
                            Coded by <a style={{color: 'darkgray', fontSize:'10px'}} href="https://github.com/brandonlouis">Brandon Louis Chia</a>.
                        </Box>
                    </Box>
                </Box>
            </>
        )
    }
  }