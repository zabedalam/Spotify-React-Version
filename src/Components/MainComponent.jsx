import React,{useEffect, useState} from "react"
import {Container} from "reactstrap"
// import HomePage from "./HomePage"
// import Navbar from "./Navbar";
// import SideNavbar from "./SideNavbar";
// import Footer from "./Footer";
import Login from "../Components/login/login"
import { getTokenFromResponse } from "./spotify/spotify"
import SpotifyWebApi from "spotify-web-api-js"
import Player from "../Components/player/player"

const spotify=new SpotifyWebApi()
function MainComponent(){
    const [token,setToken]=useState(null)
//useEffect() Run code based on given condition
    useEffect(() => {
     const hash=getTokenFromResponse()
     window.location.hash=""
     const _token =hash.access_token;
     if(_token){
         setToken(_token)
         spotify.setAccessToken(_token)
         spotify.getMe().then((user)=>{
             console.log("🐱‍",user)
         })

     }
console.log("I HAVE A TOKEN >>>",token);
    }, [])//if i wanna run once gives empty but i give here name variable it useEffect() will run when component load as well as when name variable changes

   
        return ( 
             <Container>
                 {
                     token?<Player/>:(<Login/>)
                 }
            {/* //     <Navbar></Navbar>
            //     <SideNavbar></SideNavbar>
            // <HomePage></HomePage>
            // <Footer></Footer> */}
            {/* <Login/> */}
             </Container>
         );
    
}
 
export default MainComponent;