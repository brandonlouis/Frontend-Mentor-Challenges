import './App.css';
import React from 'react';
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
        <Navbar/>
        <Home />
        <Footer/>
    </ThemeProvider>
  );
}

export default App;
