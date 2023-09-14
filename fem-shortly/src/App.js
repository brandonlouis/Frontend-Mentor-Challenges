import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';

const theme = createTheme({
    palette: {
      primary: {
        main: '#2acfcf',
      },
      secondary: {
        main: '#3b3054',
      },
      error: {
        main: '#f46262',
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
            </Routes>
            <Footer/>
        </Router>
    </ThemeProvider>
  );
}

export default App;
