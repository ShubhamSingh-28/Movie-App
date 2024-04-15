//import React from 'react'
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player/youtube";

export default function VideoPlay() {
    const {videoId} = useParams()
  return (
    <div className="flex flex-row justify-center h-[calc(100%-56px)] text-white">
    <div className="w-full max-w-[1280px] flex flex-col lg:flex-row">
      <div className="flex flex-col lg:w-[calc(100%-350px)] px-4 py-3 lg:py-6 overflow-y-hidden">
        <div className="h-[200px] md:h-[400px] lg:h-[500px] ml-[-16px] lg:ml-0 mr-[-16px] lg:mr-0">
          
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${videoId}`}
              controls
              width="100%"
              height="100%"
              style={{ backgroundColor: "#000000" }}
              playing={true}
            />
        </div>
        
      </div>
    </div>
  </div>

  )
}
