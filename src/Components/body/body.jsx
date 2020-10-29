import React from "react";
import "./body.css";
import Header from "../header/header";
import { useDataLayerValue } from "../datalayer/datalayer";
import Browse from "../browse/browse";
import Playlist from "../playlist/playlist";
import Artist from "../artist/artist";

const getPage = (tab, spotify) => {
  switch (tab) {
    case "Search":
      return <Browse spotify={spotify} />;

    case "Artist":
      return <Artist spotify={spotify} />;

    default:
      return <Playlist />;
  }
};

export default function Body({ spotify }) {
  const [{ tab }, dispatch] = useDataLayerValue();

  return (
    <div className="body">
      <Header spotify={spotify} />
      {getPage(tab, spotify)}
    </div>
  );
}
