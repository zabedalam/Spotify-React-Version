import React from "react";
import "../index.css"

class Navbar extends React.Component {
    state = {  }
    render() { 
        return ( 
    
<div className="col-12">
          <div className="mainLinks">
            <a href="#">TRENDING</a>
            <a href="#">PODCAST</a>
            <a href="#">MOODS AND GENRES</a>
            <a href="#">NEW RELEASES</a>
            <a href="#">DISCOVER</a>
          </div>
          </div> 
                  
         );
    }
}
 
export default Navbar;