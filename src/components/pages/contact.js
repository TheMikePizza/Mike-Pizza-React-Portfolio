import React from "react";
import studioPic from "../../../static/assets/images/contact/Pastwork.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import FontAwesomeIcon from "Fort"

export default function () {
  return (
    <div className="contact-wrapper">
      <div
        className="left-column"
        style={{
          background: "url(" + studioPic + ") no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      <div className="right-column">
      <div className= "contact-bullet-points">
      <div className= "bullet-point-group">

      <div className= "icon"> 
      <FontAwesomeIcon icon="fa-solid fa-square-phone" />
      </div>
      <div className = "text">
      Contact phone number 999-999-9999</div>
      </div>
      <div className= "bullet-point-group">

      <div className= "icon"> 
      <FontAwesomeIcon icon="envelope" />
      </div>
      <div className = "text">
      mike@example.com</div>
      </div>
      <div className= "bullet-point-group">

      <div className= "icon"> 
      <FontAwesomeIcon icon="map-marked-alt" />
      </div>
      <div className = "text">
      Salt Lake City, UT</div>
      </div>

      </div>
      </div>
    </div>
  );
}
