import React from 'react';
import SidebarOption from '../sidebaroption/sidebarOption';
import "./sidebar.css"
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
export default function Sidebar() {
  return (
    <>
    <div className="sidebar">
    {/* <h1>Hello I am From Sidebar</h1> */}
    <img src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
     alt="spotify logo" className="sidebar__logo"/>
     <SidebarOption Icon={HomeIcon} title="Home"/>
     <SidebarOption Icon={SearchIcon} title="Search"/>
     <SidebarOption Icon={LibraryMusicIcon} title="Your Library"/>
    </div>
    </>
  );
}
