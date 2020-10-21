import React from "react";
import Header from "../header/header";
import "./body.css";

export default function Body({spotify}) {
  return (
    <>
      <div className="body">
        {/* <h1>Hello I am From Body</h1> */}
        <Header spotify={spotify}></Header>
        <div className="body__info">
        <img src="https://media-exp1.licdn.com/dms/image/C4D03AQGAgxKJNTdFRg/profile-displayphoto-shrink_200_200/0?e=1608768000&v=beta&t=jQsB84R2mIpAt4pnFa1AFp2u-jgj4LpBoH6Seiq9A3Q" 
        alt="user images"/>
        <div className="body__infoText">
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>Description....</p>
        </div>
        </div>
       
      </div>
    </>
  );
}
