import React from "react"
import {Container} from "reactstrap"
import SideNavbar from "./SideNavbar"

class HomePage extends React.Component {
    state = {  }
    render() { 
        return ( 
            <Container>
                <SideNavbar></SideNavbar>
            </Container>
         );
    }
}
 
export default HomePage;