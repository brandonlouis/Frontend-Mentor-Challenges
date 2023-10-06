import React from 'react'
import { Box } from '@mui/material'
import { useMediaQuery } from 'react-responsive'

export default function Footer() {
    const isTablet = useMediaQuery({ query: '(max-width: 1150px)' })
    const isMobile = useMediaQuery({ query: '(max-width: 600px)' })

    if (!isTablet && !isMobile) {
        return (
            <Box sx={{color:'gray', fontSize:'10px', width:'100vw', textAlign:'center', position:'absolute', bottom:'10px'}}>
                Challenge by <a style={{color: 'darkgray', fontSize:'10px', textDecoration:'none'}} href="https://www.frontendmentor.io/challenges/space-tourism-multipage-website-gRWj1URZ3" target="_blank">Frontend Mentor</a>. 
                Coded by <a style={{color: 'darkgray', fontSize:'10px', textDecoration:'none'}} href="https://github.com/brandonlouis">Brandon Louis Chia</a>.
            </Box>
        )
    }
}