import React from "react";
import MovieBrowser from '../modules/movie-browser/movie-browser.container';
 import Footer from './footer';
 import '../index.css';
 import Navbar from './navbar';
// import tvBrowser from './modules/tv-browser/tv-browser.container';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

const LandingPage = () => (
    <div >
        <Navbar/>
    <div >
       
      <MuiThemeProvider >
        <MovieBrowser />
       </MuiThemeProvider>   
    </div>
    <Footer/>
    </div>
  );
  
  export default LandingPage;