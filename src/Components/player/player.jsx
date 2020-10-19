import React from 'react';
import Sidebar from "../sidebar/sidebar"
import Body from "../body/body"
import Footer from "../footer/footer"
import "./player.css"
export default function player({spotify}) {
  return (
    <>
    {/* <h1>Welcome to Player Component</h1> */}
    <div className="player">
      <div className="player__body">
        <Sidebar/>
        <Body/>
      </div>
      <Footer/>
    </div>
    </>
  );
}
