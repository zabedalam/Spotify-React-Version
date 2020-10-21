import React from "react";
import Header from "../header/header";
import "./body.css";
import SongRow from "../songRow/songRow"
import {useDataLayerValue} from "../datalayer/datalayer"
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

export default function Body({spotify}) {
  const [{discover_weekly},dispatch]=useDataLayerValue()

  const playPlaylist = (id) => {
    spotify
      .play({
        context_uri: `spotify:playlist:37i9dQZEVXcJZyENOWUFo7`,
      })
      .then((res) => {
        spotify.getMyCurrentPlayingTrack().then((r) => {
          dispatch({
            type: "SET_ITEM",
            item: r.item,
          });
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        });
      });
  };
  const playSong=(id)=>{
    spotify
    .play({
      uris:[`spotify:track:${id}`],
    })
    .then((res)=>{
      spotify.getMyCurrentPlayingTrack().then((r)=>{
        dispatch({
          type:"SET_ITEM",
          item:r.item
        })
        dispatch({
          type:"SET_PLAYIING",
          playing:true
        })
      })
    })
  }
  return (
    <>
      <div className="body">
        {/* <h1>Hello I am From Body</h1> */}
        <Header spotify={spotify}></Header>
        <div className="body__info">
        {/* <img src="https://media-exp1.licdn.com/dms/image/C4D03AQGAgxKJNTdFRg/profile-displayphoto-shrink_200_200/0?e=1608768000&v=beta&t=jQsB84R2mIpAt4pnFa1AFp2u-jgj4LpBoH6Seiq9A3Q" 
        alt="user images"/> */}
        <img src={discover_weekly?.images[0]} 
        alt="user images"/>
        <div className="body__infoText">
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          {/* <p>Description....</p> */}
  <p>{discover_weekly?.description}</p>

        </div>
        </div>
        <div className="body__songs">
          <div className="body__icons">
<PlayCircleFilledIcon className="body_shuffle"/>
<FavoriteIcon fontSize="large"/>
<MoreHorizIcon/>
          </div>
          {/* songs here */}
          {discover_weekly?.tracks.items.map((item)=>(
            <SongRow playSong={playSong} track={item.track}/>
          ))}
        </div>
       
      </div>
    </>
  );
}
