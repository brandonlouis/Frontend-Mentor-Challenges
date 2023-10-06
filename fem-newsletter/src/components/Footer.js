import React from 'react'
import { Box } from '@mui/material'
import { useMediaQuery } from 'react-responsive'


export default function Footer() {
    const isMobile = useMediaQuery({ query: '(max-width: 770px)' })

    if (!isMobile) {
        return (
            <Box sx={{color:'darkgray', fontSize:'10px', position:'absolute', bottom:'15px', width:'100vw', textAlign:'center'}}>
                Challenge by <a style={{color: 'lightgray', fontSize:'10px', textDecoration:'none'}} href="https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv" target="_blank">Frontend Mentor</a>. 
                Coded by <a style={{color: 'lightgray', fontSize:'10px', textDecoration:'none'}} href="https://github.com/brandonlouis">Brandon Louis Chia</a>.
            </Box>
        )
    } else {
        return (
            <Box sx={{backgroundColor:'white', color:'darkgray', fontSize:'10px', marginBottom:'5px', width:'100vw', textAlign:'center'}}>
                Challenge by <a style={{color: 'gray', fontSize:'10px', textDecoration:'none'}} href="https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv" target="_blank">Frontend Mentor</a>. 
                Coded by <a style={{color: 'gray', fontSize:'10px', textDecoration:'none'}} href="https://github.com/brandonlouis">Brandon Louis Chia</a>.
            </Box>
        )
    }
  }