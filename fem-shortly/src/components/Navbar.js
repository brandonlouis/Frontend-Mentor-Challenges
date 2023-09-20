import React from 'react'
import { ReactComponent as Logo } from '../img/logo.svg'
import { ReactComponent as Hamburger } from '../img/icon-hamburger.svg'
import { Box, Button, Modal } from '@mui/material'
import { useMediaQuery } from 'react-responsive'


export default function Navbar() {
    const isMobile = useMediaQuery({ query: '(max-width: 830px)' })
    const [openModal, setOpenModal] = React.useState(false)
    const openModalNavBar = () => setOpenModal(true)
    const closeModalNavBar = () => setOpenModal(false)

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
                        <Button variant="contained" size='small' color='primary' sx={{color:'white !important', padding:'6px 17px', borderRadius:'50px', marginLeft:'15px'}}>Sign Up</Button>
                    </Box>
                </Box>
            </>
        )
    } else {
        return (
            <>
                <Box className="NavBar" sx={{display:'flex', justifyContent:'space-between', padding:'35px 7% 25px', position:'fixed', width:'86%', backgroundColor:'white', zIndex:'3'}}>
                    <Box>
                        <a href='/' style={{display:'flex', alignItems:'center'}}><Logo /></a>
                    </Box>
                    <Box>
                        <Button variant='text' sx={{padding:'0', minWidth:'auto'}} onClick={openModalNavBar}><Hamburger /></Button>
                    </Box>
                </Box>

                <Modal open={openModal} onClose={closeModalNavBar}>
                    <Box className='ModalNavBar' sx={{display:'flex', flexDirection:'column', justifyContent:'space-evenly', margin:'118px 7% 25px', padding:'10px 20px 20px', backgroundColor:'#3b3054', borderRadius:'10px', height:'300px'}}>
                        <Button variant="text">Features</Button>
                        <Button variant="text" sx={{margin:'0 15px'}}>Pricing</Button>
                        <Button variant="text">Resources</Button>
                        <hr style={{width:'100%', border:'1px solid #4d406a'}}/>
                        <Button variant="text">Login</Button>
                        <Button variant="contained" color='primary' sx={{color:'white !important', padding:'6px 17px', borderRadius:'50px'}} fullWidth>Sign Up</Button>
                    </Box>
                </Modal>
            </>
        )
    }
  }