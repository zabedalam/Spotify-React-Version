import React from "react";
import "./sidebarOption.css";

export default function SidebarOption({ title, Icon }) {
  return (
    <>
      <div className="sidebarOption">
        {Icon && <Icon className="sidebarOption__icon" />}
        {Icon ? <h6>{title}</h6> : <p>{title}</p>}
      </div>
    </>
  );
}
