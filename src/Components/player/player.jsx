import React from "react";
import "./player.css";
import Sidebar from "../sidebar/sidebar";
import Body from "../body/body";
import Footer from "../footer/footer";

export default function Player({ spotify }) {
  return (
    <div className="player">
      <div className="player__body">
        <Sidebar spotify={spotify} />
        <Body spotify={spotify} />
        <Footer spotify={spotify} />
      </div>
    </div>
  );
}
