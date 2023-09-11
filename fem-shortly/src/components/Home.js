import React from 'react'
import { ReactComponent as IllustrationWorking } from '../img/illustration-working.svg'
import { Box, Button } from '@mui/material'
import { useMediaQuery } from 'react-responsive'


export default function Home() {
    const isMobile = useMediaQuery({ query: '(max-width: 770px)' })

    if (!isMobile) {
        return (
            <>
                <Box className="PageContent">
                    <Box className="Banner" sx={{display:'flex', margin:'0 0 50px 10%'}}>
                        <Box className="BannerLeft">
                            <h1 style={{fontSize:'60px', lineHeight:'70px'}}>More than just shorter links</h1>
                            <p style={{color:'gray'}}>Build your brand's recognition and get detailed insights on how your links are performing.</p>
                            <Button variant="contained" color="primary" size="large" sx={{borderRadius:'25px', color:'white'}}>Get Started</Button>
                        </Box>
                        <Box className="BannerRight" sx={{width:'80%', overflow:'hidden', marginLeft:'15%'}}>
                            <IllustrationWorking />
                        </Box>
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