import React from "react";
import Header from "../header/header";
import "./body.css";
import SongRow from "../songRow/songRow"
import {useDataLayerValue} from "../datalayer/datalayer"
import PauseCircleFilledIcon from "@material-ui/icons/PauseCircleFilled";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

export default function Body({spotify}) {
  const [{discover_weekly,playing},dispatch]=useDataLayerValue()

  const playPlaylist = (id) => {
    spotify
      .play({
        context_uri: `spotify:playlist:7IPRB6fWd78eSfJ2c6wJ4Z`,
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

  // const handlePlayPause = () => {
  //   if (playing) {
  //     spotify.pause();
  //     dispatch({
  //       type: "SET_PLAYING",
  //       playing: false,
  //     });
  //   } else {
  //     spotify.play();
  //     dispatch({
  //       type: "SET_PLAYING",
  //       playing: true,
  //     });
  //   }
  // };

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
        <img src={discover_weekly?.images[0].url} 
        alt="user images"/>
        <div className="body__infoText">
          <strong>PLAYLIST</strong>
      <h2>{discover_weekly?.name}</h2>
          {/* <p>Description....</p> */}
  <p>{discover_weekly?.description}</p>

        </div>
        </div>
        <div className="body__songs">
          <div className="body__icons">
{/* <PlayCircleFilledIcon className="body__shuffle" 
onClick={playPlaylist}/> */}
 {playing ? (
          <PauseCircleFilledIcon
            onClick={playPlaylist}
            fontSize="large"
            className="body__shuffle"
          />
        ) : (
          <PlayCircleFilledIcon
            onClick={playPlaylist}
            fontSize="large"
            className="body__shuffle"
          />
        )}
<FavoriteIcon fontSize="large"/>
<MoreHorizIcon/>
          </div>
          {/* <div className="body__background"> */}
            {/* songs here */}
          {discover_weekly?.tracks.items.map((item)=>(
            <SongRow playSong={playSong} track={item.track}/>
          ))}
          {/* </div> */}
          
        </div>
        {/* <div className="body__background">
        {discover_weekly?.tracks.items.map((item)=>(
            <SongRow playSong={playSong} track={item.track}/>
          ))}
        </div> */}
       
      </div>
    </>
  );
}
