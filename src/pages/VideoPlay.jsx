
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player/youtube";

export default function VideoPlay() {
  const { videoId } = useParams();
  return (
    <div className="flex items-center justify-center h-[calc(100%-56px)] text-white lg:py-4 py-10">
      <div className="  flex  items-center">
        <div className="flex items-center px-4 py-3 lg:py-6 ">
          <div className="h-[200px] md:h-[400px] md:w-[720px] lg:w-[980px] lg:h-[600px] ml-[-16px] lg:ml-0 mr-[-16px] lg:mr-0">
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
  );
}
