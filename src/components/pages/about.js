import React from "react";
import profilePic from "../../../static/assets/images/bio/sedona.jpg";


export default function () {
  return (
    <div className="bio-container-wrapper">
  
      <div className= "left-column"
        style={{
          background: "url(" + profilePic + ") no-repeat",
          backgroundSize: "cover",
          backgroundPosition:"center" 
        }}
      />
       
      <div className="right-column">
      <div className="bio-text-wrapper">
      Bio
       Mike Pizza is a tech enthusiast who enjoys learning and
      understanding how systems work. He is very curious by nature and enjoys
      rising to overcome challenges with big picture ideas.
      </div>
      </div>
      </div>

    


  );
}
