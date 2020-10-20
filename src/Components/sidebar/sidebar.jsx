import React from "react";
import SidebarOption from "../sidebaroption/sidebarOption";
import "./sidebar.css";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import { useDataLayerValue } from "../datalayer/datalayer";
export default function Sidebar() {
  const [{ playlists }, dispatch] = useDataLayerValue();
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
        <SidebarOption Icon={HomeIcon} title="Home" />
        <SidebarOption Icon={SearchIcon} title="Search" />
        <SidebarOption Icon={LibraryMusicIcon} title="Your Library" />
        <br />
        <strong className="sidebar__title">PLAYLISTS</strong>
        <hr />
        {/* <SidebarOption title="Hip hop"/>
     <SidebarOption title="Rock"/>
     <SidebarOption title="RnB"/> */}
        {playlists?.items?.map((playlist) => (
          <SidebarOption title={playlist.name} />
        ))}
      </div>
    </>
  );
}
