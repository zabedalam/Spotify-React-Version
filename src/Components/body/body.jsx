// import React from "react";
// import Header from "../header/header";
// import "./body.css";
// import SongRow from "../songRow/songRow"
// import {useDataLayerValue} from "../datalayer/datalayer"
// import PauseCircleFilledIcon from "@material-ui/icons/PauseCircleFilled";
// import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
// import FavoriteIcon from "@material-ui/icons/Favorite";
// import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
//New Version
import React from 'react';
import './body.css';
import Header from '../header/header';
import { useDataLayerValue } from '../datalayer/datalayer';
import Browse from '../browse/browse';
import Playlist from '../playlist/playlist';
import Artist from '../artist/artist';


// export default function Body({spotify}) {
//   const [{discover_weekly,playing},dispatch]=useDataLayerValue()

//   const playPlaylist = (id) => {
//     spotify
//       .play({
//         context_uri: `spotify:playlist:0Sz7KVYgSsNpEXOHwmuWFe`,
//       })
//       .then((res) => {
//         spotify.getMyCurrentPlayingTrack().then((r) => {
//           dispatch({
//             type: "SET_ITEM",
//             item: r.item,
//           });
//           dispatch({
//             type: "SET_PLAYING",
//             playing: true,
//           });
//         });
//       });
//   };

  
//   const playSong=(id)=>{
//     spotify
//     .play({
//       uris:[`spotify:track:${id}`],
//     })
//     .then((res)=>{
//       spotify.getMyCurrentPlayingTrack().then((r)=>{
//         dispatch({
//           type:"SET_ITEM",
//           item:r.item
//         })
//         dispatch({
//           type:"SET_PLAYIING",
//           playing:true
//         })
//       })
//     })
//   }
//   return (
//     <>
//       <div className="body">
//         {/* <h1>Hello I am From Body</h1> */}
//         <Header spotify={spotify}></Header>
//         <div className="body__info">
       
//         <img src={discover_weekly?.images[0].url} 
//         alt="user images"/>
//         <div className="body__infoText">
//           <strong>PLAYLIST</strong>
//       <h2>{discover_weekly?.name}</h2>
//   <p>{discover_weekly?.description}</p>

//         </div>
//         </div>
//         <div className="body__songs">
//           <div className="body__icons">

//  {playing ? (
//           <PauseCircleFilledIcon
//             onClick={playPlaylist}
//             fontSize="large"
//             className="body__shuffle"
//           />
//         ) : (
//           <PlayCircleFilledIcon
//             onClick={playPlaylist}
//             fontSize="large"
//             className="body__shuffle"
//           />
//         )}
// <FavoriteIcon fontSize="large"/>
// <MoreHorizIcon/>
//           </div>
          
//           {discover_weekly?.tracks.items.map((item)=>(
//             <SongRow key={item.id} playSong={playSong} track={item.track}/>
//           ))}
//           {/* </div> */}
          
//         </div>
        
       
//       </div>
//     </>
//   );
// }

//New Version
const getPage = (tab, spotify) => {
  switch(tab) {
    case 'Search':
      return <Browse spotify={spotify} />;

    case 'Artist':
      return <Artist spotify={spotify} />;

    default:
      return <Playlist />;
  }
}

export default function Body({ spotify }) {
  const [{ tab }, dispatch] = useDataLayerValue();

  return (
    <div className='body'>
      <Header spotify={spotify} />
      {
        getPage(tab, spotify)
      }
    </div>
  );
}

