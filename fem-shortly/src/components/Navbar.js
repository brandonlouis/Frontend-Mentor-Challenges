import React from 'react'
import { ReactComponent as Logo } from '../img/logo.svg'
import { Box, Button } from '@mui/material'
import { useMediaQuery } from 'react-responsive'


export default function Navbar() {
    const isMobile = useMediaQuery({ query: '(max-width: 770px)' })

    if (!isMobile) {
        return (
            <>
                <Box className="NavBar" sx={{display:'flex', justifyContent:'space-between', margin:'50px 10%'}}>
                    <Box sx={{display:'flex'}}>
                        <a href='/' style={{marginRight:'35px', display:'flex', alignItems:'center'}}><Logo /></a>
                        <Button variant="text">Features</Button>
                        <Button variant="text" sx={{margin:'0 15px'}}>Pricing</Button>
                        <Button variant="text">Resources</Button>
                    </Box>
                    <Box>
                        <Button variant="text">Login</Button>
                        <Button variant="contained" size='small' color='primary' sx={{color:'white !important', borderRadius:'25px', marginLeft:'15px'}}>Sign Up</Button>
                    </Box>
                </Box>
            </>
        )
    } else {
        return (
            <>
                <Box>
                    
                </Box>
            </>
        )
    }
  }