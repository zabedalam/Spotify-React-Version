import React from "react";
import Header from "../header/header";
import "./body.css";
import {useDataLayerValue} from "../datalayer/datalayer"

export default function Body({spotify}) {
  const [{discover_weekly},dispatch]=useDataLayerValue()
  return (
    <>
      <div className="body">
        {/* <h1>Hello I am From Body</h1> */}
        <Header spotify={spotify}></Header>
        <div className="body__info">
        {/* <img src="https://media-exp1.licdn.com/dms/image/C4D03AQGAgxKJNTdFRg/profile-displayphoto-shrink_200_200/0?e=1608768000&v=beta&t=jQsB84R2mIpAt4pnFa1AFp2u-jgj4LpBoH6Seiq9A3Q" 
        alt="user images"/> */}
        <img src={discover_weekly?.images[0]} 
        alt="user images"/>
        <div className="body__infoText">
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          {/* <p>Description....</p> */}
  <p>{discover_weekly?.description}</p>

        </div>
        </div>
       
      </div>
    </>
  );
}
