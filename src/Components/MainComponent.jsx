import React from "react"
import {Container} from "reactstrap"
import HomePage from "./HomePage"

class MainComponent extends React.Component {
    state = {  }
    render() { 
        return ( 
            <Container>
            <HomePage></HomePage>
            </Container>
         );
    }
}
 
export default MainComponent;