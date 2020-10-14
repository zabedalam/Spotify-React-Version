import React from "react"
import {Container} from "reactstrap"
// import HomePage from "./HomePage"
// import Navbar from "./Navbar";
// import SideNavbar from "./SideNavbar";
// import Footer from "./Footer";
import Login from "../Components/login/login"

class MainComponent extends React.Component {
    state = {  }
    render() { 
        return ( 
             <Container>
            {/* //     <Navbar></Navbar>
            //     <SideNavbar></SideNavbar>
            // <HomePage></HomePage>
            // <Footer></Footer> */}
            <Login/>
             </Container>
         );
    }
}
 
export default MainComponent;