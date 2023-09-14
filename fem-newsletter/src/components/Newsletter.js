import React, { useState } from 'react'
import { Box, Button, TextField, Grid } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'
import { ReactComponent as IconListLogo } from '../img/icon-list.svg'
import { ReactComponent as BannerImg } from '../img/illustration-sign-up-desktop.svg'
import { ReactComponent as BannerImgMobile } from '../img/illustration-sign-up-mobile.svg'


export default function Newsletter() {
    const isMobile = useMediaQuery({ query: '(max-width: 770px)' })
    const [isFormValid, setIsFormValid] = useState(true);

    const navigate = useNavigate()
    const [email, setEmail] = useState('')

    const submitForm = async (e) => {
        
        if (email == "" || !email.match(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+$/i)) {
            setIsFormValid(false);
            e.preventDefault();

        } else {
            navigate('/Success', {state:{email:email}})
        }

    }

    if (!isMobile) {
        return (
            <>
            <Box sx={{height:'100vh', width:'100vw', display:'flex', alignItems:'center', justifyContent:'center'}}>
    
                <Box className="newsletter" sx={{width:'900px', height:'550px', backgroundColor:'white', borderRadius:'25px', display:'flex', alignItems:'center'}}>
                    <Box className="newletter-left" sx={{padding:'60px'}}>
                        <b style={{fontWeight:'700', fontSize:'50px'}}>Stay updated!</b>
    
                        <p style={{color: '#282b43', marginBottom:'25px'}}>Join 60,000+ product managers receiving monthly updates on:</p>
    
                        <Grid container spacing={1} sx={{marginBottom:'35px'}}>
                            <Grid item xs={1}>
                                <IconListLogo />
                            </Grid>
                            <Grid item xs={11}>
                                Product discovery and building what matters
                            </Grid>
    
                            <Grid item xs={1}>
                                <IconListLogo />
                            </Grid>
                            <Grid item xs={11}>
                                Measuring to ensure updates are a success
                            </Grid>
                            
                            <Grid item xs={1}>
                                <IconListLogo />
                            </Grid>
                            <Grid item xs={11}>
                                And much more!
                            </Grid>
                        </Grid>
    
                        <form onSubmit={submitForm}>
                            <b>Email address</b>
                            <TextField id="outlined-basic" variant="outlined" placeholder='email@company.com' 
                                sx={{marginTop:'10px'}} 
                                error={!isFormValid}
                                helperText={!isFormValid ? 'Please enter a valid email address' : ''}
                                onChange={(e)=>setEmail(e.target.value)} 
                                fullWidth
                            />
                            <Button variant="contained" type='submit' sx={{marginTop:'20px', padding:'15px', backgroundColor:'#282b43'}} fullWidth><b>Subscribe to monthly newsletter</b></Button>
                        </form>
                    </Box>
    
                    <Box className="newsletter-right" sx={{width:'42%', height:'100%', boxSizing:'border-box', display:'flex', padding:'18px'}}>
                        <BannerImg height='100%'/>
                    </Box>
                </Box>
    
            </Box>
            
            </>
        )
    } else {
        return (
            <>
            <Box className="newsletter" sx={{height:'100%', width:'100vw', display:'flex', flexDirection:'column'}}>
                <Box className="newletter-top">
                    <BannerImgMobile width='100vw' height='auto'/>
                </Box>

                <Box className="newsletter-bottom" sx={{display:'flex', flexDirection:'column', padding:'30px'}}>
                    <b className="header" style={{fontWeight:'700', fontSize:'40px'}}>Stay updated!</b>
                    
                    <p style={{color: '#282b43', marginBottom:'25px'}}>Join 60,000+ product managers receiving monthly updates on:</p>

                    <Grid container spacing={1} sx={{marginBottom:'35px'}}>
                        <Grid item xs={1}>
                            <IconListLogo className='iconListLogo'/>
                        </Grid>
                        <Grid item xs={11}>
                            Product discovery and building what matters
                        </Grid>

                        <Grid item xs={1}>
                            <IconListLogo className='iconListLogo'/>
                        </Grid>
                        <Grid item xs={11}>
                            Measuring to ensure updates are a success
                        </Grid>
                        
                        <Grid item xs={1}>
                            <IconListLogo className='iconListLogo'/>
                        </Grid>
                        <Grid item xs={11}>
                            And much more!
                        </Grid>
                    </Grid>

                    <form onSubmit={submitForm}>
                        <b>Email address</b>
                        <TextField id="outlined-basic" variant="outlined" placeholder='email@company.com' 
                            sx={{marginTop:'10px'}} 
                            error={!isFormValid}
                            helperText={!isFormValid ? 'Please enter a valid email address' : ''}
                            onChange={(e)=>setEmail(e.target.value)} 
                            fullWidth
                        />
                        <Button variant="contained" type='submit' sx={{marginTop:'20px', padding:'10px', backgroundColor:'#282b43'}} fullWidth><b>Subscribe to monthly newsletter</b></Button>
                    </form>
                </Box>
            </Box>
            </>
        )
    }
    
}