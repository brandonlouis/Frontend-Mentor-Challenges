import { Box } from '@mui/material'
import React from 'react'
import { useMediaQuery } from 'react-responsive'


export default function Footer() {
    const isMobile = useMediaQuery({ query: '(max-width: 770px)' })

    if (!isMobile) {
        return (
            <>
                <Box sx={{color:'lightgray', fontSize:'12px', position:'absolute', bottom:'15px', width:'100vw', textAlign:'center'}}>
                    Challenge by <a style={{color: 'lightgray'}} href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
                    Coded by <a style={{color: 'lightgray'}} href="https://github.com/brandonlouis?tab=repositories">Brandon Louis Chia</a>.
                </Box>
                
            </>
        )
    } else {
        return (
            <>
                <Box sx={{backgroundColor:'white', color:'darkgray', fontSize:'10px', width:'100vw', textAlign:'center'}}>
                    Challenge by <a style={{color: 'gray'}} href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
                    Coded by <a style={{color: 'gray'}} href="https://github.com/brandonlouis?tab=repositories">Brandon Louis Chia</a>.
                </Box>
                
            </>
        )
    }
  }