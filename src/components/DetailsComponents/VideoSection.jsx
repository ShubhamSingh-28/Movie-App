import VideoCard from "./VideoCard";
import {  useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchDataVideos } from "../../utils/dataSlice";
export default function VideoSection() {
  const [data, setData] = useState([]);
    const { mediaType, id } = useParams();
    //console.log(mediaType+ id);
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(fetchDataVideos({mediaType, id}))
      .then((response) => {
       setData(response.payload);
     })
     .catch((error) => {
       console.error("Error fetching data:", error);
     })
       }, [dispatch, mediaType, id]);

       //console.log(data);

  return (
<div className="  w-full ">
      <div className="pb-3 ">
        <span className="md:text-xl text-lg font-semibold relative left-8 md:left-40">Official Videos</span>    
      </div>
        <VideoCard data={data.results}/>
    </div>
  )
}
