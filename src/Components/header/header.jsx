import React from "react";
import "./header.css";
import { Avatar } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import {useDataLayerValue} from "../datalayer/datalayer"

export default function Header() {
    const [{user},dispatch]=useDataLayerValue()
  return (
    <>
      <div className="header">
        <div className="header__left">
          {/* <h1>I am header Left</h1> */}
          <SearchIcon />
          <input
            placeholder="Search for Artists,Songs or Podcasts "
            type="text"
          />
        </div>
        {/* <h1>I am from Header</h1> */}
        <div className="header__right">
          {/* <h1>I am from header Right</h1> */}
          <Avatar src={user?.images[0]} alt={user?.display_name} />
  <h4>{user?.display_name}</h4>
        </div>
      </div>
    </>
  );
}
