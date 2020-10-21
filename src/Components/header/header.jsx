import React from "react";
import "./header.css";
import { Avatar } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

export default function Header() {
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
          <Avatar src="" alt="Zabedul" />
          <h4>Zabedul</h4>
        </div>
      </div>
    </>
  );
}
