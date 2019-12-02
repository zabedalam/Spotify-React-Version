import React from "react"
import {Container} from "reactstrap"
import HomePage from "./HomePage"
import Navbar from "./Navbar";
import SideNavbar from "./SideNavbar";
import Footer from "./Footer";

class MainComponent extends React.Component {
    state = {  }
    render() { 
        return ( 
            <Container>
                <Navbar></Navbar>
                <SideNavbar></SideNavbar>
            <HomePage></HomePage>
            <Footer></Footer>
            </Container>
         );
    }
}
 
export default MainComponent;