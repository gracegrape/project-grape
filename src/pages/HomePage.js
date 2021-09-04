import React from "react";

import "../css/home-page.css";
import gracePic from "../images/grace-picture.jpg";

const HomePage = () => {
  return (
    <div className="home-background-div">
      <div className="profile-details-container">
        <img className="grace-profile-pic" src={gracePic} alt="gracePic" />
        <span className="profile-info">
          <div>Hey there!</div>
          <div> I'm Grace</div>
        </span>
      </div>
      <div className="tech-stack-div">
        <span> Front End</span>
      </div>
    </div>
  );
};
export default HomePage;
