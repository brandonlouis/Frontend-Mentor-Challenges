import './App.css';
import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Destination from './components/Destination';
import Crew from './components/Crew';
import Technology from './components/Technology';
import Footer from './components/Footer';

const theme = createTheme({
    typography: {
        h1: {
            fontSize: '150px',
            fontFamily: 'Bellefair',
            color: '#FFF',
            paddingBottom: '20px',
            textTransform: 'uppercase',
        },
        h2: {
            fontSize: '100px',
            fontFamily: 'Bellefair',
            color: '#FFF',
            textTransform: 'uppercase',
        },
        h3: {
            fontSize: '56px',
            fontFamily: 'Bellefair',
            color: '#FFF',
            textTransform: 'uppercase',
        },
        h4: {
            fontSize: '32px',
            fontFamily: 'Bellefair',
            color: '#FFF',
            textTransform: 'uppercase',
            opacity: '0.5',
        },
        h5: {
            fontSize: '28px',
            fontFamily: 'Barlow Condensed',
            color: '#D0D6F9',
            letterSpacing: '4.75px',
            paddingBottom: '20px',
            textTransform: 'uppercase',
        },
        subtitle1: {
            fontSize: '28px',
            fontFamily: 'Bellefair',
            color: '#FFF',
            textTransform: 'uppercase',
        },
        subtitle2: {
            fontSize: '14px',
            fontFamily: 'Barlow Condensed',
            color: '#D0D6F9',
            letterSpacing: '2.35px',
            textTransform: 'uppercase',
        },
        nav: {
            fontSize: '16px',
            fontFamily: 'Barlow Condensed',
            color: '#FFF',
            letterSpacing: '2.7px',
            textTransform: 'uppercase',
        },
        body: {
            fontSize: '18px',
            fontFamily: 'Barlow',
            color: '#D0D6F9',
            lineHeight: '32px',
            width: '444px',
        },


        h1Tablet: {
            fontSize: '150px',
            fontFamily: 'Bellefair',
            color: '#FFF',
            paddingBottom: '10px',
            textTransform: 'uppercase',
        },
        h2Tablet: {
            fontSize: '80px',
            fontFamily: 'Bellefair',
            color: '#FFF',
            textTransform: 'uppercase',
        },
        h3Tablet: {
            fontSize: '40px',
            fontFamily: 'Bellefair',
            color: '#FFF',
            textTransform: 'uppercase',
        },
        h4Tablet: {
            fontSize: '24px',
            fontFamily: 'Bellefair',
            color: '#FFF',
            textTransform: 'uppercase',
            opacity: '0.5',
        },
        h5Tablet: {
            fontSize: '20px',
            fontFamily: 'Barlow Condensed',
            color: '#D0D6F9',
            letterSpacing: '3.375px',
            paddingBottom: '20px',
            textTransform: 'uppercase',
        },
        navTablet: {
            fontSize: '14px',
            fontFamily: 'Barlow Condensed',
            color: '#FFF',
            letterSpacing: '2.362px',
            textTransform: 'uppercase',
        },
        bodyTablet: {
            fontSize: '16px',
            fontFamily: 'Barlow',
            color: '#D0D6F9',
            lineHeight: '28px',
            height: '84px',
        },


        h1Mobile: {
            fontSize: '80px',
            fontFamily: 'Bellefair',
            color: '#FFF',
            paddingBottom: '10px',
            textTransform: 'uppercase',
        },
        h2Mobile: {
            fontSize: '56px',
            fontFamily: 'Bellefair',
            color: '#FFF',
            textTransform: 'uppercase',
        },
        h3Mobile: {
            fontSize: '24px',
            fontFamily: 'Bellefair',
            color: '#FFF',
            textTransform: 'uppercase',
        },
        h4Mobile: {
            fontSize: '16px',
            fontFamily: 'Bellefair',
            color: '#FFF',
            textTransform: 'uppercase',
            opacity: '0.5',
        },
        h5Mobile: {
            fontSize: '16px',
            fontFamily: 'Barlow Condensed',
            color: '#D0D6F9',
            letterSpacing: '2.7px',
            paddingBottom: '20px',
            textTransform: 'uppercase',
        },
        bodyMobile: {
            fontSize: '15px',
            fontFamily: 'Barlow',
            color: '#D0D6F9',
            lineHeight: '25px',
            width: '327px',
            height: '125px',
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: ({ ownerState }) => ({
                    ...(ownerState.variant === 'landingPage' && {
                        backgroundColor: '#FFF',
                        color: '#0B0D17',
                        fontFamily: 'Bellefair',
                        fontSize: '32px',
                        letterSpacing: '2px',
                        padding: '115px 70px',
                        borderRadius: '50%',
                        margin: '88px',
                        '&:hover': {
                            backgroundColor: '#FFF',
                            backgroundClip: 'padding-box',
                            border: '88px solid rgba(255, 255, 255, 0.1)',
                            margin: '0px',
                        },
                    }),
                    ...(ownerState.variant === 'landingPageTablet' && {
                        backgroundColor: '#FFF',
                        color: '#0B0D17',
                        fontFamily: 'Bellefair',
                        fontSize: '32px',
                        letterSpacing: '2px',
                        padding: '90px 45px',
                        borderRadius: '50%',
                        margin: '88px',
                        '&:hover': {
                            backgroundColor: '#FFF',
                            backgroundClip: 'padding-box',
                            border: '88px solid rgba(255, 255, 255, 0.1)',
                            margin: '0px',
                        },
                    }),
                    ...(ownerState.variant === 'landingPageMobile' && {
                        backgroundColor: '#FFF',
                        color: '#0B0D17',
                        fontFamily: 'Bellefair',
                        fontSize: '20px',
                        letterSpacing: '1.25px',
                        width: '150px',
                        height: '150px',
                        borderRadius: '50%',
                        margin: '25px',
                        '&:hover': {
                            backgroundColor: '#FFF',
                            backgroundClip: 'padding-box',
                            width: '200px',
                            height: '200px',
                            border: '25px solid rgba(255, 255, 255, 0.1)',
                            margin: '0',
                        },
                    }),
                }),
            },
        },
        MuiPagination: {
            styleOverrides: {
                root: ({ ownerState }) => ({
                    ...(ownerState.variant === 'desktop' && {
                        ul: {
                            display:'flex',
                            flexDirection:'column',
                            gap:'32px',
                            '& .MuiPaginationItem-root.Mui-selected, .MuiPaginationItem-root.Mui-selected:hover': {
                                color: '#000',
                                backgroundColor: '#FFF',
                            },
                        },
                        button: {
                            color: '#FFF',
                            fontFamily: 'Bellefair',
                            fontSize: '32px',
                            padding: '40px',
                            width: '40px',
                            borderRadius: '50%',
                            border: '1px solid rgba(255, 255, 255, 0.25)',
                            '&:hover' : {
                                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                            },
                        },
                    }),
                    ...(ownerState.variant === 'tablet' && {
                        ul: {
                            gap:'16px',
                            '& .MuiPaginationItem-root.Mui-selected, .MuiPaginationItem-root.Mui-selected:hover': {
                                color: '#000',
                                backgroundColor: '#FFF',
                            },
                        },
                        button: {
                            color: '#FFF',
                            fontFamily: 'Bellefair',
                            fontSize: '24px',
                            padding: '30px',
                            width: '60px',
                            borderRadius: '50%',
                            border: '1px solid rgba(255, 255, 255, 0.25)',
                            '&:hover' : {
                                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                            },
                        },
                    }),
                    ...(ownerState.variant === 'mobile' && {
                        ul: {
                            gap:'16px',
                            '& .MuiPaginationItem-root.Mui-selected, .MuiPaginationItem-root.Mui-selected:hover': {
                                color: '#000',
                                backgroundColor: '#FFF',
                            },
                        },
                        button: {
                            color: '#FFF',
                            fontFamily: 'Bellefair',
                            fontSize: '16px',
                            padding: '20px',
                            width: '40px',
                            borderRadius: '50%',
                            border: '1px solid rgba(255, 255, 255, 0.25)',
                            '&:hover' : {
                                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                            },
                        },
                    }),
                }),
            },
        },
    },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
    <Router>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/destination" element={<Destination />} />
            <Route path="/crew" element={<Crew />} />
            <Route path="/technology" element={<Technology />} />
        </Routes>
        <Footer/>
    </Router>
    </ThemeProvider>
  );
}

export default App;