import React, { useEffect } from 'react'
import { Box, Stack, Button, Typography } from '@mui/material'
import { useMediaQuery } from 'react-responsive'


export default function Home() {
    const isTablet = useMediaQuery({ query: '(max-width: 1150px)' })
    const isMobile = useMediaQuery({ query: '(max-width: 600px)' })
    
    useEffect(() => {
        document.title = 'Home | Space Tourism'
    }, [])

    if (!isMobile && !isTablet) {
        return (
            <Box className='HomeContent' width='100%' height='100vh' display='flex'>
                
                <Box display='flex' width='50%' position='relative'>
                    <Box position='absolute' bottom='15%' left='20%' width='450px'>
                        <Typography variant='h5'>So, you want to travel to</Typography>
                        <Typography variant='h1'>Space</Typography>
                        <Typography variant='body'>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</Typography>
                    </Box>
                </Box>
                
                <Box display='flex' width='50%' position='relative'>
                    <Button variant='landingPage' sx={{position:'absolute', bottom:'5%', right:'10%'}} href='/destination'>Explore</Button>
                </Box>
            </Box>
        )

    } else if (isMobile) {
        return (
            <Stack className='HomeContent' alignItems='center' justifyContent='center' width='100%' height='100vh'>
                <Stack alignItems='center' textAlign='center' width='90%' height='50%' paddingTop='120px'>
                    <Typography variant='h5Mobile'>So, you want to travel to</Typography>
                    <Typography variant='h1Mobile'>Space</Typography>
                    <Typography variant='bodyMobile'>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</Typography>
                </Stack>
                
                <Box height='50%' marginTop='60px'>
                    <Button variant='landingPageMobile' href='/destination'>Explore</Button>
                </Box>
            </Stack>
        )

    } else if (isTablet) {
        return (
            <Stack className='HomeContent' alignItems='center' justifyContent='center' width='100%' height='100vh'>
                <Stack alignItems='center' textAlign='center' width='90%' height='48%' paddingTop='200px'>
                    <Typography variant='h5Tablet'>So, you want to travel to</Typography>
                    <Typography variant='h1Tablet'>Space</Typography>
                    <Typography variant='bodyTablet' width='444px'>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</Typography>
                </Stack>
                
                <Box height='50%'>
                    <Button variant='landingPageTablet' href='/destination'>Explore</Button>
                </Box>
            </Stack>
        )
    }
    
}
