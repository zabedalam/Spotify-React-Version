import React, { useEffect } from "react";
import Login from "../Components/login/login";
import { getTokenFromResponse } from "../Components/spotify/spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "../Components/player/player";
import { useDataLayerValue } from "../Components/datalayer/datalayer";

//create an instance of spotify so we can use spotify service in react
const spotify = new SpotifyWebApi();
function MainComponent() {
  // const [token,setToken]=useState(null)
  const [{ token }, dispatch] = useDataLayerValue(); //Pulling data from reducer or data layer

  //useEffect() Run code based on given condition
  useEffect(() => {
    const hash = getTokenFromResponse();
    //clear the returned url from spotify
    window.location.hash = "";
    const _token = hash.access_token;
    if (_token) {
      spotify.setAccessToken(_token)
      //dispatch the retrived token to the global context
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      spotify.setAccessToken(_token);
      //get the current user info
      spotify.getMe().then((user) => {
        // dispatch the current user info to the global context
        dispatch({
          //this dispatch writing data to data layer
          type: "SET_USER",
          user: user,
        });
        //  console.log("🐱‍",user)
      });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        });
      })
      .catch(err=>alert(err.message))

      spotify.getPlaylist("7IPRB6fWd78eSfJ2c6wJ4Z").then((response) => {
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        });
      })
      .catch(err=>alert(err.message))

      // spotify.getMyTopArtists().then((response) =>
      //   dispatch({
      //     type: "SET_TOP_ARTISTS",
      //     artists: response,
      //   })
      // );

      // dispatch({
      //   type: "SET_SPOTIFY",
      //   spotify: spotify,
      // });
    }
    console.log("I HAVE A TOKEN >>>", token);
  }, []); //if i wanna run once gives empty but i give here name variable it useEffect() will run when component load as well as when name variable changes
  // console.log("🐱‍", user);
  console.log("🐱‍", token);
  // console.log("‍playlist", playlists);

  return (
    <div>
      {/* {!token && <Login />}
      {token && <Player spotify={spotify} />} */}
      {token ? <Player spotify={spotify} /> : <Login />}
      {/* //     <Navbar></Navbar>
            //     <SideNavbar></SideNavbar>
            // <HomePage></HomePage>
            // <Footer></Footer> */}
      {/* <Login/> */}
    </div>
  );
}

export default MainComponent;
