import React, {useState} from "react";
import video from "../data/video.js";
import VideoPage from "./VideoPage";

function App() {
  const [videoObj, setVideoObj] = useState(video);

  return (
    <div className="App">
      <VideoPage video={video}/>
    </div>
  );
}

export default App;
