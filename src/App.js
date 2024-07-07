import React from "react";
import "./App.css";
import Video from "./solympic.mp4";

function App() {
  return (
    <div className="video-background">
      <video autoPlay muted loop>
        <source src={Video} type="video/mp4" />
      </video>
    </div>
  );
}

export default App;
