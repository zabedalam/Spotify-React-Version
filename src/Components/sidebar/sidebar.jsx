import React, { useState } from "react";
import SidebarOption from "../sidebaroption/sidebarOption";
import "./sidebar.css";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicOutlinedIcon from "@material-ui/icons/LibraryMusicOutlined";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import { useDataLayerValue } from "../datalayer/datalayer";
export default function Sidebar({ spotify }) {
  const [selected, setSelected] = useState("");
  const [{ playlists, tab }, dispatch] = useDataLayerValue();

  const handleSelect = (name) => {
    setSelected(name);
    dispatch({
      type: "SET_TAB",
      tab: name,
    });
  };

  const switchPlaylist = (url) => {
    setSelected("");
    spotify
      .getPlaylist(url)
      .then((res) => {
        dispatch({
          type: "SET_PLAYLIST",
          playlist: res,
        });
        dispatch({
          type: "SET_INDEX",
          index: 0,
        });
        dispatch({
          type: "SET_TAB",
          tab: null,
        });
      })
      .catch((err) => alert(err.message));
  };
  console.log("playlist", playlists);
  return (
    <>
      <div className="sidebar">
        {/* <h1>Hello I am From Sidebar</h1> */}
        <img
          src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
          alt="spotify logo"
          className="sidebar__logo"
        />
        <SidebarOption
          active={selected}
          Icon={tab === "Home" ? HomeIcon : HomeOutlinedIcon}
          title="Home"
          handleClick={() => handleSelect("Home")}
        />
        <SidebarOption
          active={selected}
          Icon={SearchIcon}
          title="Search"
          handleClick={() => handleSelect("Search")}
        />
        <SidebarOption
          active={selected}
          Icon={
            tab === "Your Library" ? LibraryMusicIcon : LibraryMusicOutlinedIcon
          }
          title="Your Library"
          handleClick={() => handleSelect("Your Library")}
        />
        <br />
        <strong className="sidebar__title">PLAYLISTS</strong>
        <hr />
        {/* <SidebarOption title="Hip hop"/>
     <SidebarOption title="Rock"/>
     <SidebarOption title="RnB"/> */}
        <div className="sidebar__bottom">
          <div className="sidebar__playlist">
            {playlists?.items?.map((playlist, i) => (
              <SidebarOption
                key={i}
                title={playlist.name}
                playlists={playlist}
                handleClick={() => switchPlaylist(playlist.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
