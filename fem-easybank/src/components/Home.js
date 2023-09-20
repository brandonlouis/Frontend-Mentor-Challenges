import React from 'react'
import { Box, Button, Grid, Card, CardContent, CardMedia, CardActionArea } from '@mui/material'
import { ReactComponent as Online } from '../img/icon-online.svg'
import { ReactComponent as Budgeting } from '../img/icon-budgeting.svg'
import { ReactComponent as Onboarding } from '../img/icon-onboarding.svg'
import { ReactComponent as Api } from '../img/icon-api.svg'
import { useMediaQuery } from 'react-responsive'

export default function Home() {
    const isMobile = useMediaQuery({ query: '(max-width: 750px)' })

    if (!isMobile) {
        return (
            <>
                <Box sx={{display:'flex', alignItems:'center', justifyContent:'center', paddingLeft:'10%', position:'relative', backgroundColor:'#fafafa', overflowX:'clip'}}>
                    <Box sx={{width:'35%'}}>
                        <h1>Next generation digital banking</h1>
                        <p>Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.</p>
                        <Button variant="contained" sx={{marginTop:'20px'}}>Request Invite</Button>
                    </Box>
                    <Box className='BannerRight' sx={{width:'65%', height:'650px', position:'relative'}}>
                        <img src={require('../img/image-mockups.png')} className='BannerImg'/>
                    </Box>
                </Box>
    
                <Box sx={{backgroundColor:'#f3f4f6', padding:'80px 10% 120px 10%'}}>
                    <Box sx={{width:'50%', marginBottom:'65px'}}>
                        <h2>Why choose Easybank?</h2>
                        <p>We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.</p>
                    </Box>
                    
                    <Grid container spacing={4} alignItems='stretch'>
                        <Grid item xs={12} sm={6} md={3}>
                            <Card className='WhyChooseCards'>
                                <Online className="WhyChooseLogo"/>
                                <h3>Online Banking</h3>
                                <p>Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.</p>
                            </Card>
                        </Grid>
    
                        <Grid item xs={12} sm={6} md={3}>
                            <Card className='WhyChooseCards'>
                                <Budgeting className="WhyChooseLogo"/>
                                <h3>Simple Budgeting</h3>
                                <p>See exactly where your money goes each month. Receive notifications when you're close to hitting your limits.</p>
                            </Card>
                        </Grid>
    
                        <Grid item xs={12} sm={6} md={3}>
                            <Card className='WhyChooseCards'>
                                <Onboarding className="WhyChooseLogo"/>
                                <h3>Fast Onboarding</h3>
                                <p>We don't do branches. Open your account in minutes online and start taking control of your finances right away.</p>
                            </Card>
                        </Grid>
    
                        <Grid item xs={12} sm={6} md={3}>
                            <Card className='WhyChooseCards'>
                                <Api className="WhyChooseLogo"/>
                                <h3>Open API</h3>
                                <p>Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.</p>
                            </Card>
                        </Grid>
                    </Grid>
                </Box>
    
                <Box sx={{padding:'50px 10% 80px', backgroundColor:'#fafafa'}}>
                    <h2>Latest Articles</h2>
    
                    <Grid container spacing={4} alignItems='stretch'>
                        <Grid item xs={12} sm={6} md={3}>
                            <Card className="ArticleCards">
                                <CardActionArea className="ArticleCards">
                                    <CardMedia component="img" height="200" image={require('../img/image-currency.jpg')}/>
                                    <CardContent className="ArticleCardContent">
                                        <p style={{fontSize:'12px'}}>By Claire Robinson</p>
                                        <h3 style={{marginTop:'0'}}>Receive money in any currency with no fees</h3>
                                        <p>The world is getting smaller and we're becoming more mobile. So why should you be forced to only receive money in a single ...</p>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
    
                        <Grid item xs={12} sm={6} md={3}>
                            <Card className="ArticleCards">
                                <CardActionArea className="ArticleCards">
                                    <CardMedia component="img" height="200" image={require('../img/image-restaurant.jpg')}/>
                                    <CardContent className="ArticleCardContent">
                                        <p style={{fontSize:'12px'}}>By Wilson Hutton</p>
                                        <h3 style={{marginTop:'0'}}>Treat yourself without worrying about money</h3>
                                        <p>Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you ...</p>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
    
                        <Grid item xs={12} sm={6} md={3}>
                            <Card className="ArticleCards">
                                <CardActionArea className="ArticleCards">
                                    <CardMedia component="img" height="200" image={require('../img/image-plane.jpg')}/>
                                    <CardContent className="ArticleCardContent">
                                        <p style={{fontSize:'12px'}}>By Wilson Hutton</p>
                                        <h3 style={{marginTop:'0'}}>Take your Easybank card wherever you go</h3>
                                        <p>We want you to enjoy your travels. This is why we don't charge any fees on purchases while you're abroad. We'll even show you ...</p>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
    
                        <Grid item xs={12} sm={6} md={3}>
                            <Card className="ArticleCards">
                                <CardActionArea className="ArticleCards">
                                    <CardMedia component="img" height="200" image={require('../img/image-confetti.jpg')}/>
                                    <CardContent className="ArticleCardContent">
                                        <p style={{fontSize:'12px'}}>By Claire Robinson</p>
                                        <h3 style={{marginTop:'0'}}>Our invite-only Beta accounts are now live!</h3>
                                        <p>After a lot of hard work by the whole team, we're excited to launch our closed beta. It's easy to request an invite through the site ...</p>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    </Grid>
                </Box>
            </>
        )
    } else {
        return (
            <>
            <Box>
                <Box sx={{display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column', position:'relative', backgroundColor:'#fafafa'}}>
                    <img className='BannerImgM' src={require('../img/image-mockups.png')} style={{width:'90%'}}/>
                    <Box className='BannerTop'></Box>
                </Box>

                <Box sx={{display:'flex', flexDirection:'column', alignItems:'center', padding:'0 7% 80px', textAlign:'center', backgroundColor:'#fafafa'}}>
                    <h2 style={{fontSize:'45px'}}>Next generation digital banking</h2>
                    <p style={{marginTop:'0'}}>Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.</p>
                    <Button variant="contained" sx={{marginTop:'20px'}}>Request Invite</Button>
                </Box>

                <Box sx={{textAlign:'center', padding:'40px 7% 80px', backgroundColor:'#f3f4f6'}}>
                    <Grid container spacing={4} alignItems='stretch'>
                        <Grid item xs={12} sx={{marginBottom:'15px'}}>
                            <Card className='WhyChooseCards'>
                            <h2>Why choose Easybank?</h2>
                            <p>We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.</p>
                            </Card>
                        </Grid>

                        <Grid item xs={12}>
                            <Card className='WhyChooseCards'>
                                <Online className="WhyChooseLogo"/>
                                <h3>Online Banking</h3>
                                <p>Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.</p>
                            </Card>
                        </Grid>

                        <Grid item xs={12}>
                            <Card className='WhyChooseCards'>
                                <Budgeting className="WhyChooseLogo"/>
                                <h3>Simple Budgeting</h3>
                                <p>See exactly where your money goes each month. Receive notifications when you're close to hitting your limits.</p>
                            </Card>
                        </Grid>

                        <Grid item xs={12}>
                            <Card className='WhyChooseCards'>
                                <Onboarding className="WhyChooseLogo"/>
                                <h3>Fast Onboarding</h3>
                                <p>We don't do branches. Open your account in minutes online and start taking control of your finances right away.</p>
                            </Card>
                        </Grid>

                        <Grid item xs={12}>
                            <Card className='WhyChooseCards'>
                                <Api className="WhyChooseLogo"/>
                                <h3>Open API</h3>
                                <p>Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.</p>
                            </Card>
                        </Grid>
                    </Grid>
                </Box>

                <Box sx={{backgroundColor:'#fafafa', padding:'50px 7% 80px'}}>
                    <h2 style={{textAlign:'center'}}>Latest Articles</h2>

                    <Grid container spacing={4} alignItems='stretch'>
                        <Grid item xs={12}>
                            <Card className="ArticleCards">
                                <CardActionArea className="ArticleCards">
                                    <CardMedia component="img" height="200" image={require('../img/image-currency.jpg')}/>
                                    <CardContent className="ArticleCardContent">
                                        <p style={{fontSize:'12px'}}>By Claire Robinson</p>
                                        <h3 style={{marginTop:'0'}}>Receive money in any currency with no fees</h3>
                                        <p>The world is getting smaller and we're becoming more mobile. So why should you be forced to only receive money in a single ...</p>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>

                        <Grid item xs={12}>
                            <Card className="ArticleCards">
                                <CardActionArea className="ArticleCards">
                                    <CardMedia component="img" height="200" image={require('../img/image-restaurant.jpg')}/>
                                    <CardContent className="ArticleCardContent">
                                        <p style={{fontSize:'12px'}}>By Wilson Hutton</p>
                                        <h3 style={{marginTop:'0'}}>Treat yourself without worrying about money</h3>
                                        <p>Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you ...</p>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>

                        <Grid item xs={12}>
                            <Card className="ArticleCards">
                                <CardActionArea className="ArticleCards">
                                    <CardMedia component="img" height="200" image={require('../img/image-plane.jpg')}/>
                                    <CardContent className="ArticleCardContent">
                                        <p style={{fontSize:'12px'}}>By Wilson Hutton</p>
                                        <h3 style={{marginTop:'0'}}>Take your Easybank card wherever you go</h3>
                                        <p>We want you to enjoy your travels. This is why we don't charge any fees on purchases while you're abroad. We'll even show you ...</p>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>

                        <Grid item xs={12}>
                            <Card className="ArticleCards">
                                <CardActionArea className="ArticleCards">
                                    <CardMedia component="img" height="200" image={require('../img/image-confetti.jpg')}/>
                                    <CardContent className="ArticleCardContent">
                                        <p style={{fontSize:'12px'}}>By Claire Robinson</p>
                                        <h3 style={{marginTop:'0'}}>Our invite-only Beta accounts are now live!</h3>
                                        <p>After a lot of hard work by the whole team, we're excited to launch our closed beta. It's easy to request an invite through the site ...</p>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
            </>
        )
    }
    
}