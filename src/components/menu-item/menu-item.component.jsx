import React from "react";
import "./menu-item.styles.scss";

export const MenuItem = ({ title, imageUrl, size }) => (
  //The style attribute in React allows us to make css changes in the jsx file.
  <div className={`${size} menu-item`}>
    <div
      className="background-image"
      style={{
        backgroundImage: `URL(${imageUrl})`,
      }}
    />
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);
