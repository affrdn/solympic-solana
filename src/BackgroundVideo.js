// BackgroundVideo.js

import React from "react";
import "./App.css"; // Import CSS yang sudah disiapkan
import Video from "./solympic.mp4";

const BackgroundVideo = () => {
  return (
    <div className="video-background">
      <video autoPlay muted loop>
        <source src={Video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="container">
        {/* <h1>Welcome to React Background Video</h1>
        <p>This is a demo of a background video in React.</p> */}
      </div>
    </div>
  );
};

export default BackgroundVideo;
