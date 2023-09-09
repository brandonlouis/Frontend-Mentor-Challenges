import { Box, Button } from '@mui/material'
import React from 'react'
import { useMediaQuery } from 'react-responsive'
import { useLocation } from 'react-router-dom'
import { ReactComponent as IconSuccessLogo } from '../img/icon-success.svg'


export default function Success() {
    const isMobile = useMediaQuery({ query: '(max-width: 770px)' })
    const location = useLocation()


    if (!isMobile) {
        return (
            <>
            <Box sx={{height:'100vh', width:'100vw', display:'flex', alignItems:'center', justifyContent:'center'}}>
    
                <Box className="success" sx={{width:'500px', height:'460px', backgroundColor:'white', borderRadius:'25px', display:'flex', alignItems:'center'}}>
                    <Box sx={{padding:'60px', display:'flex', flexDirection:'column'}}>
                        <IconSuccessLogo width='55px'/>
    
                        <b style={{fontWeight:'700', fontSize:'50px', lineHeight:'1', margin:'20px 0 15px 0'}}>Thanks for subscribing!</b>
    
                        <p style={{color: '#282b43', marginBottom:'25px'}}>A confirmation email has been sent to <b>{location.state.email}</b>. Please open it and click the button inside to confirm your subscription.</p>
    
                        <Button variant="contained" href='/' sx={{width:'100%', marginTop:'10px', padding:'15px', backgroundColor:'#282b43'}}><b>Dismiss Message</b></Button>
                    </Box>
                </Box>
            </Box>
            </>
        )
    } else {
        return (
            <>    
            <Box className="success" sx={{height:'97vh', display:'flex', alignItems:'center'}}>
                <Box sx={{height:'100%', padding:'30px', display:'flex', flexDirection:'column', justifyContent:'space-around'}}>
                    <Box sx={{display:'flex', flexDirection:'column'}}>
                        <IconSuccessLogo width='55px'/>

                        <b style={{fontWeight:'700', fontSize:'40px', lineHeight:'1', margin:'20px 0 15px 0'}}>Thanks for subscribing!</b>

                        <p style={{color: '#282b43', marginBottom:'25px'}}>A confirmation email has been sent to <b>{location.state.email}</b>. Please open it and click the button inside to confirm your subscription.</p>
                    </Box>
                    <Button variant="contained" href='/' sx={{width:'100%', marginTop:'20px', padding:'15px', backgroundColor:'#282b43'}}><b>Dismiss Message</b></Button>
                </Box>
            </Box>
            </>
        )
    }
  }