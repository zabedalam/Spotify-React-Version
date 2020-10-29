import React from "react";
import "./sidebarOption.css";

export default function SidebarOption({ title, Icon, active, handleClick }) {
  return (
    <>
      <div
        className={`sidebarOption ${
          active && active === title && "sidebarOption__active"
        }`}
        onClick={handleClick}
      >
        {Icon && <Icon className="sidebarOption__icon" />}
        {Icon ? (
          <h6>{title}</h6>
        ) : (
          <div>
            <p>{title}</p>
          </div>
        )}
      </div>
    </>
  );
}
