import React from "react";
import Header from "../header/header";
import "./body.css";

export default function Body({spotify}) {
  return (
    <>
      <div className="body">
        {/* <h1>Hello I am From Body</h1> */}
        <Header spotify={spotify}></Header>
      </div>
    </>
  );
}
