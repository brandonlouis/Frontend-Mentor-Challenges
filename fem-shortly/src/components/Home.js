import { React, useEffect, useState } from 'react'
import { ReactComponent as IllustrationWorking } from '../img/illustration-working.svg'
import { ReactComponent as IconBrandRecognition } from '../img/icon-brand-recognition.svg'
import { ReactComponent as IconDetailedRecords } from '../img/icon-detailed-records.svg'
import { ReactComponent as IconFullyCustomizable } from '../img/icon-fully-customizable.svg'
import { Box, Button, TextField, CircularProgress } from '@mui/material'
import { useMediaQuery } from 'react-responsive'


export default function Home() {
    const isMobile = useMediaQuery({ query: '(max-width: 830px)' })

    const [loading, setLoading] = useState(false)
    const [isCopied, setIsCopied] = useState([])

    const [isError, setIsError] = useState(false)
    const [errorCode, setErrorCode] = useState(0)
    const errorCodes = {
        0: null,
        1: 'Please add a link',
        2: 'Invalid link specified',
        3: 'Rate limit reached. Please try again later.',
        4: 'Something went wrong. Please try again.',
        5: 'Something went wrong. Please try again.',
        6: 'Something went wrong. Please try again.',
        7: 'Something went wrong. Please try again.',
        8: 'Something went wrong. Please try again.',
        9: 'Something went wrong. Please try again.',
        10: 'Shortening is not permitted for this URL.'
    }

    const URL = 'https://api.shrtco.de/v2/shorten?url='
    const [originalLink, setOriginalLink] = useState('')
    const [linkHistory, setLinkHistory] = useState([])

    const shortenLink = async () => {
        if (originalLink === '' || errorCode === 2) {
            setIsError(true)
            setErrorCode(originalLink === '' ? 1 : 2)
            return

        } else {
            try {
                setLoading(true)
                const response = await fetch(URL + originalLink)
                const data = await response.json()
                setLoading(false)

                if (!data.ok) {
                    setIsError(true)
                    setErrorCode(data.error_code)
                } else {
                    setLinkHistory([data, ...linkHistory].slice(0,5)) // Limit to 5 historical links
                    setIsError(false)
                    setErrorCode(0)
                    setOriginalLink('')
                }
            } catch (error) {
                setIsError(true)
                setErrorCode(3)
            }
        } 
    }

    const handleShorten = (e) => {
        shortenLink()
        e.preventDefault()
    }

    const copyURL = event => {
        navigator.clipboard.writeText(event.currentTarget.value)

        if (!isCopied.includes(event.target.id)) {
            setIsCopied([...isCopied, event.target.id].slice(-1))
        }
    }


    if (!isMobile) {
        return (
            <>
                <Box className="PageContent">
                    <Box className="Banner" sx={{display:'flex', margin:'0 0 50px 10%'}}>
                        <Box className="BannerLeft" sx={{display:'flex', flexDirection:'column', justifyContent:'center'}}>
                            <h1 style={{fontSize:'60px', lineHeight:'70px', marginBottom:'0'}}>More than just shorter links</h1>
                            <p style={{color:'gray'}}>Build your brand's recognition and get detailed insights on how your links are performing.</p>
                            <Box>
                                <Button variant="contained" color="primary" size="large" sx={{borderRadius:'25px', color:'white', padding:'10px 30px', marginTop:'15px'}}>Get Started</Button>
                            </Box>
                        </Box>
                        <Box className="BannerRight" sx={{width:'80%', overflow:'hidden', marginLeft:'15%'}}>
                            <IllustrationWorking />
                        </Box>
                    </Box>

                    <Box className="ShortenLink" sx={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                        <form className="ShortenLinkBox" onSubmit={handleShorten} style={{margin:'0 10%', width:'100%', padding:'30px', borderRadius:'10px', display:'flex', alignItems:'center', justifyContent:'center', backgroundColor:'#3b3054'}}>
                            <TextField id="outlined" placeholder="Shorten a link here..." variant="outlined"
                                value={originalLink}
                                sx={{width:'75%', marginRight:'20px'}}
                                onChange={(e) => setOriginalLink(e.target.value)} 
                                error={isError}
                                helperText={isError ? errorCodes[errorCode] : null}
                            />
                            <Button variant="contained" color="primary" size="large" type="submit" sx={{color:'white', height:'3.4rem', width:'165px', borderRadius:'10px'}}>{loading ? <CircularProgress color='common' size='2rem'/> : 'Shorten it!'}</Button>
                        </form>
                    </Box>

                    <Box sx={{backgroundColor:'#f0f0f5', paddingTop:'20px'}}>
                        { linkHistory.map((link) => {
                            if (link.ok) {
                                return (
                                    <Box sx={{margin:'0 10% 15px', display:'flex', backgroundColor:'white', borderRadius:'10px', padding:'15px 30px'}} key={link.result.code}>
                                        <Box sx={{display:'flex', justifyContent:'space-between', alignItems:'center', width:'100%', marginRight:'25px'}}>
                                            {link.ok ? <p style={{margin:'0'}}>{link.result.original_link}</p> : null}
                                            {link.ok ? <p style={{margin:'0', color:'#2acfcf'}}>{link.result.full_short_link}</p> : null}
                                        </Box>
                                        <Button value={link.result.full_short_link} id={link.result.code} variant='contained' color={isCopied.includes(link.result.code) ? 'secondary' : 'primary'} size='large' sx={{borderRadius:'10px', color:'white', padding:'8px 30px', width:'120px'}} onClick={copyURL}>{isCopied.includes(link.result.code) ? 'Copied!' : 'Copy'}</Button>
                                    </Box>
                                )
                            }
                        })}

                        <Box sx={{display:'flex', flexDirection:'column', textAlign:'center', alignItems:'center', padding:'70px 0 25px'}}>
                            <h1 style={{marginBottom:'0'}}>Advanced Statistics</h1>
                            <p style={{color:'gray', width:'50%'}}>Track how your links are performing across the web with our advanced statistics dashboard.</p>
                        </Box>

                        <Box sx={{display:'flex', padding:'0 10% 150px', alignItems:'center', justifyContent:'center'}}>
                            <Box sx={{backgroundColor:'#2acfcf', height:'10px', width:'50%', position:'absolute', zIndex:'1'}}></Box>

                            <Box sx={{display:'flex', flexDirection:'column', width:'30%', margin:'0 2%', zIndex:'2'}}>
                                <Box sx={{backgroundColor:'white', borderRadius:'10px', padding:'50px 35px 30px'}}>
                                    <Box sx={{width:'75px', height:'75px', display:'flex', alignItems:'center', justifyContent:'center', backgroundColor:'#3b3054', borderRadius:'100px', position:'absolute', marginTop:'-85px'}}>
                                        <IconBrandRecognition />
                                    </Box>
                                    <h3 style={{marginBottom:'0'}}>Brand Recognition</h3>
                                    <p style={{color:'gray'}}>Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.</p>
                                </Box>
                            </Box>

                            <Box sx={{display:'flex', flexDirection:'column', width:'30%', margin:'75px 2% 0', zIndex:'2'}}>
                                <Box sx={{backgroundColor:'white', borderRadius:'10px', padding:'50px 35px 30px'}}>
                                    <Box sx={{width:'75px', height:'75px', display:'flex', alignItems:'center', justifyContent:'center', backgroundColor:'#3b3054', borderRadius:'100px', position:'absolute', marginTop:'-85px'}}>
                                        <IconDetailedRecords />
                                    </Box>
                                    <h3 style={{marginBottom:'0'}}>Detailed Records</h3>
                                    <p style={{color:'gray'}}>Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.</p>
                                </Box>
                            </Box>

                            <Box sx={{display:'flex', flexDirection:'column', width:'30%', margin:'150px 2% 0', zIndex:'2'}}>
                                <Box sx={{backgroundColor:'white', borderRadius:'10px', padding:'50px 35px 30px'}}>
                                    <Box sx={{width:'75px', height:'75px', display:'flex', alignItems:'center', justifyContent:'center', backgroundColor:'#3b3054', borderRadius:'100px', position:'absolute', marginTop:'-85px'}}>
                                        <IconFullyCustomizable />
                                    </Box>
                                    <h3 style={{marginBottom:'0'}}>Fully Customizable</h3>
                                    <p style={{color:'gray'}}>Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.</p>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </>
        )
    } else {
        return (
            <>
                <Box className="PageContent">
                    <Box className="Banner" sx={{display:'flex', flexDirection:'column', margin:'0 7%'}}>
                        <Box className="BannerTop" sx={{paddingBottom:'50px'}}>
                            <IllustrationWorking className='BannerImg'/>
                        </Box>
                        <Box className="BannerBottom" sx={{display:'flex', flexDirection:'column', textAlign:'center'}}>
                            <h1 style={{fontSize:'53px', lineHeight:'60px', letterSpacing:'-2px', marginBottom:'0'}}>More than just shorter links</h1>
                            <p style={{color:'gray'}}>Build your brand's recognition and get detailed insights on how your links are performing.</p>
                            <Box>
                                <Button variant="contained" color="primary" size="large" sx={{borderRadius:'25px', color:'white', padding:'10px 30px', marginTop:'15px'}}>Get Started</Button>
                            </Box>
                        </Box>
                    </Box>

                    <Box className="ShortenLink" sx={{height:'200px', display:'flex', marginTop:'80px'}}>
                        <form className="ShortenLinkBox" onSubmit={handleShorten} style={{margin:'0 7%', height:'150px', width:'100%', borderRadius:'10px', display:'flex', flexDirection:'column', justifyContent:'space-between', backgroundColor:'#3b3054', padding:'25px'}}>
                            <TextField id="outlined" placeholder="Shorten a link here..." variant="outlined"
                                value={originalLink}
                                onChange={(e) => setOriginalLink(e.target.value)} 
                                error={isError}
                                helperText={isError ? errorCodes[errorCode] : null}
                            />
                            <Button variant="contained" color="primary" size="large" type="submit" sx={{height:'3.4rem',  borderRadius:'10px'}}>{loading ? <CircularProgress color='common' size='2rem'/> : 'Shorten it!'}</Button>
                        </form>
                    </Box>

                    <Box sx={{backgroundColor:'#f0f0f5', paddingTop:'20px'}}>
                        { linkHistory.map((link) => {
                            if (link.ok) {
                                return (
                                    <Box sx={{margin:'0 7% 20px', display:'flex', backgroundColor:'white', borderRadius:'10px'}} key={link.result.code}>
                                        <Box sx={{display:'flex', flexDirection:'column', justifyContent:'space-between', width:'100%'}}>
                                            {link.ok ? <p style={{margin:'0', padding:'15px 20px'}}>{link.result.original_link}</p> : null}
                                            <hr style={{width:'100%', margin:'0', border:'1px solid #e1e1e1'}}/>
                                            
                                            <Box sx={{padding:'15px 20px 20px'}}>
                                                {link.ok ? <p style={{margin:'0', color:'#2acfcf'}}>{link.result.full_short_link}</p> : null}
                                                <Button value={link.result.full_short_link} id={link.result.code} variant='contained' color={isCopied.includes(link.result.code) ? 'secondary' : 'primary'} size='large' sx={{borderRadius:'10px', color:'white', padding:'8px 30px', marginTop:'15px'}} onClick={copyURL} fullWidth>{isCopied.includes(link.result.code) ? 'Copied!' : 'Copy'}</Button>
                                            </Box>
                                            
                                        </Box>
                                    </Box>
                                )
                            }
                        })}

                        <Box sx={{display:'flex', flexDirection:'column', textAlign:'center', padding:'50px 7% 25px'}}>
                            <h2 style={{marginBottom:'0'}}>Advanced Statistics</h2>
                            <p style={{color:'gray'}}>Track how your links are performing across the web with our advanced statistics dashboard.</p>
                        </Box>

                        <Box sx={{position:'relative', display:'flex', flexDirection:'column', padding:'50px 7% 110px', alignItems:'center', textAlign:'center'}}>
                            <Box sx={{position:'relative'}}>
                                <Box sx={{backgroundColor:'#2acfcf', height:'100%', width:'8px', position:'absolute', zIndex:'1', margin:'auto', left:'0', right:'0'}}></Box>
                                <Box sx={{display:'flex', flexDirection:'column', zIndex:'2', position:'relative'}}>
                                    <Box sx={{backgroundColor:'white', borderRadius:'10px', padding:'50px 35px 30px'}}>
                                        <Box sx={{width:'85px', height:'85px', display:'flex', alignItems:'center', justifyContent:'center', backgroundColor:'#3b3054', borderRadius:'100px', position:'absolute', margin:'-95px auto', left:'0', right:'0'}}>
                                            <IconBrandRecognition />
                                        </Box>
                                        <h3 style={{marginBottom:'0'}}>Brand Recognition</h3>
                                        <p style={{color:'gray'}}>Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.</p>
                                    </Box>
                                </Box>

                                <Box sx={{display:'flex', flexDirection:'column', margin:'100px 0', zIndex:'2', position:'relative'}}>
                                    <Box sx={{backgroundColor:'white', borderRadius:'10px', padding:'50px 35px 30px'}}>
                                        <Box sx={{width:'85px', height:'85px', display:'flex', alignItems:'center', justifyContent:'center', backgroundColor:'#3b3054', borderRadius:'100px', position:'absolute', margin:'-95px auto', left:'0', right:'0'}}>
                                            <IconDetailedRecords />
                                        </Box>
                                        <h3 style={{marginBottom:'0'}}>Detailed Records</h3>
                                        <p style={{color:'gray'}}>Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.</p>
                                    </Box>
                                </Box>

                                <Box sx={{display:'flex', flexDirection:'column', zIndex:'2', position:'relative'}}>
                                    <Box sx={{backgroundColor:'white', borderRadius:'10px', padding:'50px 35px 30px'}}>
                                        <Box sx={{width:'85px', height:'85px', display:'flex', alignItems:'center', justifyContent:'center', backgroundColor:'#3b3054', borderRadius:'100px', position:'absolute', margin:'-95px auto', left:'0', right:'0'}}>
                                            <IconFullyCustomizable />
                                        </Box>
                                        <h3 style={{marginBottom:'0'}}>Fully Customizable</h3>
                                        <p style={{color:'gray'}}>Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.</p>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </>
        )
    }
  }