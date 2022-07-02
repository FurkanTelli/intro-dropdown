import React from "react";
import "./content.css";
function Content() {
  return (
    <div className="main">
      <div className="left">
        <div className="text">
          <h1>
            Make
            <br />
            remote work
          </h1>
          <p>
            Get your team in sync, no matter your location.
            <br />
            Streamline processes, create team rituals, and
            <br />
            watch productivty soar.
            <button className="learn-btn">Learn More</button>
          </p>
          <div className="images">
            <img width="100" src="./images/client-databiz.svg" />
            <img width="80" src="./images/client-audiophile.svg" />
            <img width="100" src="./images/client-meet.svg" />
            <img width="100" src="./images/client-maker.svg" />
          </div>
        </div>
      </div>
      <div className="right">
        <img alt="hero" className="hero-img" width="400" src="./images/image-hero-desktop.png" />
      </div>
    </div>
  );
}
export default Content;
