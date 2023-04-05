import React from "react";
import "../ErrorPage/ErrorPage.css";
import Gif from "../../images/error.gif";

export default function Error() {
  return (
    <div className="wrapper" id="wrapper">
      <img className="gif" src={Gif} alt="error"></img>
    </div>
  );
}