import React,{useEffect, useState} from "react"
// import {Container} from "reactstrap"
// import HomePage from "./HomePage"
// import Navbar from "./Navbar";
// import SideNavbar from "./SideNavbar";
// import Footer from "./Footer";
import Login from "../Components/login/login"
import { getTokenFromResponse } from "./spotify/spotify"
import SpotifyWebApi from "spotify-web-api-js"
import Player from "../Components/player/player"
import {useDataLayerValue} from "../Components/datalayer/datalayer"

const spotify=new SpotifyWebApi()
function MainComponent(){
    // const [token,setToken]=useState(null)
    const [{user,token},dispatch]=useDataLayerValue()//Pulling data from reducer or data layer

//useEffect() Run code based on given condition
    useEffect(() => {
     const hash=getTokenFromResponse()
     window.location.hash=""
     const _token =hash.access_token;
     if(_token){
        //  setToken(_token)
        dispatch({
            type:"SET_TOKEN",
            token:_token
        })
         spotify.setAccessToken(_token)
         spotify.getMe().then((user)=>{
            dispatch({//this dispatch writing data to data layer
              type:"SET_USER",
              user:user  
            })
            //  console.log("🐱‍",user)
         })

     }
console.log("I HAVE A TOKEN >>>",token);
    }, [])//if i wanna run once gives empty but i give here name variable it useEffect() will run when component load as well as when name variable changes
    console.log("🐱‍",user)
    console.log("🐱‍",token)
   
        return ( 
             <div>
                 {
                     token?<Player spotify={spotify}/>:(<Login/>)
                 }
            {/* //     <Navbar></Navbar>
            //     <SideNavbar></SideNavbar>
            // <HomePage></HomePage>
            // <Footer></Footer> */}
            {/* <Login/> */}
             </div>
         );
    
}
 
export default MainComponent;