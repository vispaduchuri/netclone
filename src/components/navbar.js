import React from "react";
import logotvf from "../../src/logotvf.png";

const styles={
    ds:{
        background: 'black', 
        height:'70px',
        
    },
    imgs:{
        width: 140,
        height: 40,
        marginLeft:50,

      }
}

const Navbar = () => (
    <div style={styles.ds}>
      <nav className="navbar">
        <div>
            <a href="/">
              <img
                style={styles.imgs}
                 src={logotvf}
                alt="img"
              />
            </a>
    </div>
      </nav>
    </div>
  );
  
  export default Navbar;