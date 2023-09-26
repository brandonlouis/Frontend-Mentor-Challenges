import React from 'react'
import { Box, Typography, Button, Modal, Stack } from '@mui/material'
import { NavLink } from 'react-router-dom'
import { ReactComponent as Logo } from '../img/shared/logo.svg'
import { ReactComponent as Hamburger } from '../img/shared/icon-hamburger.svg'
import { ReactComponent as Close } from '../img/shared/icon-close.svg'
import { useMediaQuery } from 'react-responsive'

export default function Navbar() {
    const isTablet = useMediaQuery({ query: '(max-width: 1150px)' })
    const isMobile = useMediaQuery({ query: '(max-width: 600px)' })
    
    const [openModal, setOpenModal] = React.useState(false)
    const openModalNavBar = () => setOpenModal(true)
    const closeModalNavBar = () => setOpenModal(false)

    if (!isMobile && !isTablet) {
        return (
            <Box display='flex' alignItems='center' justifyContent='space-between' width='100%' position='absolute' zIndex='1000'>
              <a className='NavLogo' href='/'><Logo /></a>
              <hr style={{position:'absolute', width:'33%', left:'173px', zIndex:'1', opacity:'0.25'}}/>
              
              <Box sx={{display:'flex', justifyContent:'flex-end', paddingRight:'12%', width:'45%', backdropFilter:'blur(40px)', background:'rgba(255, 255, 255, 0.04)'}}>
                  <Box display='flex' width='80%' justifyContent='space-between'>
                      <NavLink to="/" className={({ isActive }) => isActive ? "NavLinks active" : "NavLinks"}><Typography variant='nav'><b>00</b> Home</Typography></NavLink>
                      <NavLink to="/destination" className={({ isActive }) => isActive ? "NavLinks active" : "NavLinks"}><Typography variant='nav'><b>01</b> Destination</Typography></NavLink>
                      <NavLink to="/crew" className={({ isActive }) => isActive ? "NavLinks active" : "NavLinks"}><Typography variant='nav'><b>02</b> Crew</Typography></NavLink>
                      <NavLink to="/technology" className={({ isActive }) => isActive ? "NavLinks active" : "NavLinks"}><Typography variant='nav'><b>03</b> Technology</Typography></NavLink>
                  </Box>
              </Box>
            </Box>
          )

    } else if (isMobile) {
        return (
            <>
            <Box display='flex' justifyContent='center' width='100%' position='absolute' zIndex='1000'>
                <Box display='flex' alignItems='center' justifyContent='space-between' width='90%' padding='24px'>
                    <a className='NavLogo' href='/'><Logo /></a>
                    <Button sx={{padding:'0', minWidth:'auto'}} onClick={openModalNavBar}><Hamburger /></Button>
                </Box>
            </Box>

            <Modal sx={{display:'flex', justifyContent:'flex-end'}} open={openModal} onClose={closeModalNavBar}>
                <Box className='ModalNavBar' height='100vh' width='70%' position='relative' sx={{backdropFilter:'blur(40px)', background:'rgba(255, 255, 255, 0.04)'}}>
                    <a onClick={closeModalNavBar}><Close className='CloseIcon' /></a>

                    <Stack padding='120px 30px' gap='32px'>
                        <a href="/"><Typography variant='nav'><b>00</b> Home</Typography></a>
                        <a href="/destination"><Typography variant='nav'><b>01</b> Destination</Typography></a>
                        <a href="/crew"><Typography variant='nav'><b>02</b> Crew</Typography></a>
                        <a href="/technology"><Typography variant='nav'><b>03</b> Technology</Typography></a>
                    </Stack>
                </Box>
            </Modal>
            </>
        )

    } else if (isTablet) {
        return (
            <Box display='flex' alignItems='center' justifyContent='space-between' width='100%' position='absolute' zIndex='1000'>
                <a className='NavLogo' href='/'><Logo /></a>

                <Box sx={{display:'flex', justifyContent:'space-evenly', width:'62%', backdropFilter:'blur(40px)', background:'rgba(255, 255, 255, 0.04)'}}>
                    <Box display='flex' width='80%' justifyContent='space-between'>
                        <NavLink to="/" className={({ isActive }) => isActive ? "NavLinks active" : "NavLinks"}><Typography variant='nav'>Home</Typography></NavLink>
                        <NavLink to="/destination" className={({ isActive }) => isActive ? "NavLinks active" : "NavLinks"}><Typography variant='nav'>Destination</Typography></NavLink>
                        <NavLink to="/crew" className={({ isActive }) => isActive ? "NavLinks active" : "NavLinks"}><Typography variant='nav'>Crew</Typography></NavLink>
                        <NavLink to="/technology" className={({ isActive }) => isActive ? "NavLinks active" : "NavLinks"}><Typography variant='nav'>Technology</Typography></NavLink>
                    </Box>
                </Box>
            </Box>
        )
    }
}