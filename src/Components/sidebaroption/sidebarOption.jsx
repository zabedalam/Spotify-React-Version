import React from "react";
import "./sidebarOption.css";

export default function SidebarOption({ title, Icon, active, handleClick }) {
  return (
    <>
      <div
        className={`sidebarOption ${
          active && active === title && "sidebarOption__active"
        }`}
        onClick={handleClick}
      >
        {Icon && <Icon className="sidebarOption__icon" />}
        {Icon ? (
          <h6>{title}</h6>
        ) : (
          <div>
            <p>{title}</p>
          </div>
        )}
      </div>
    </>
  );
}

// import { useDataLayerValue } from "../datalayer/datalayer";
// import SpotifyWebApi from 'spotify-web-api-js';
// function SidebarOption({ title, Icon, className, link }) {

//   const spotify = new SpotifyWebApi();
//   const [{ playlists }, dispatch] = useDataLayerValue();

//   const changePlaylist = (list) => {

//     spotify.getPlaylist(list.id).then(response => {
//       dispatch({
//         type: "SET_ITEMS",
//         items: response,
//       })
//     })

//   }

//   return (
//     <div className="sidebarOption">
//       {Icon && <Icon className={`${className} sidebarOption__icon`} />}

//       {link ? <p onClick={() => changePlaylist(playlists?.items?.find(item => item.name === title))} className="sidebarOption__title">{title}</p>
//         : <p className="sidebarOption__title">{title}</p>}
//     </div>
//   )
// }
// export default SidebarOption
