import React from "react";


const Footer = () => (
    <footer style={{background:'black', padding:'1em',position:'absolute',
    left:0,
    // bottom:0,
    right:0,}}>
      <nav className="navbar navbar-light bg-black">
        <div className="text-muted lead  font-weight-bold" >
          TVFPlay
        </div>
        <p className="text-muted lead" href="#">
           All Rights Reserved by TVFPlay.
        </p>
      </nav>
    </footer>
  );
  
  export default Footer;