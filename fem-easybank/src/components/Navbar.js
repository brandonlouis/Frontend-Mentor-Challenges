import React from 'react'
import { Box, Button, Modal } from '@mui/material'
import { ReactComponent as Logo } from '../img/logo.svg'
import { ReactComponent as Hamburger } from '../img/icon-hamburger.svg'
import { ReactComponent as Close } from '../img/icon-close.svg'
import { useMediaQuery } from 'react-responsive'

export default function Navbar() {
    const isMobile = useMediaQuery({ query: '(max-width: 750px)' })
    const [openModal, setOpenModal] = React.useState(false)
    const openModalNavBar = () => setOpenModal(true)
    const closeModalNavBar = () => setOpenModal(false)

    if (!isMobile) {
        return (
            <Box sx={{backgroundColor:'white', display:'flex', alignItems:'center', justifyContent:'space-between', padding:'0 10%', position:'relative', zIndex:'100'}}>
                <a href="/"><Logo /></a>
                <Box className='Navbar' sx={{display:'flex', width:'450px', justifyContent:'space-evenly'}}>
                    <a href="#">Home</a>
                    <a href="#">About</a>
                    <a href="#">Contact</a>
                    <a href="#">Blog</a>
                    <a href="#">Careers</a>
                </Box>
                <Button variant="contained" color="primary">Request Invite</Button>
            </Box>
        )
    } else {
        return (
            <>
                <Box sx={{display:'flex', justifyContent:'space-between', position:'fixed', padding:'25px 7%', backgroundColor:'white', width:'86%', zIndex:'100'}}>
                    <Box>
                        <a href='/' style={{display:'flex', alignItems:'center'}}><Logo /></a>
                    </Box>
                    <Box>
                        {openModal ? <Button variant='text' sx={{padding:'0', minWidth:'auto'}} onClick={closeModalNavBar}><Close /></Button> : <Button variant='text' sx={{padding:'0', minWidth:'auto'}} onClick={openModalNavBar}><Hamburger /></Button> }
                        
                    </Box>
                </Box>

                <Modal open={openModal} onClose={closeModalNavBar}>
                    <Box className='ModalNavBar' sx={{display:'flex', flexDirection:'column', justifyContent:'space-evenly', margin:'25px 7%', padding:'20px 0', backgroundColor:'white', borderRadius:'5px'}}>
                        <Button variant="text" size="large">Home</Button>
                        <Button variant="text" size="large">About</Button>
                        <Button variant="text" size="large">Contact</Button>
                        <Button variant="text" size="large">Blog</Button>
                        <Button variant="text" size="large">Careers</Button>
                    </Box>
                </Modal>
            </>
        )
    }
}