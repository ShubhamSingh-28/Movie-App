
import {  useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchDataCast } from "../../utils/dataSlice";
import CastCard from "./CastCard";

function Cast() {
    const [data, setData] = useState([]);
    const { mediaType, id } = useParams();
    //console.log(mediaType+ id);
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(fetchDataCast({mediaType, id}))
      .then((response) => {
       setData(response.payload);
     })
     .catch((error) => {
       console.error("Error fetching data:", error);
     })
       }, [dispatch, mediaType, id]);

       let castComponent;
       if (data.cast && data.cast.length > 0) {
         castComponent = <CastCard cast={data.cast} />;
       } else {
         castComponent = <CastCard cast={data.crew} />;
       }
    
    //console.log(data);
  return (
    <div className="  w-full my-4">
      <div className="pb-3 ">
        <span className="md:text-xl text-lg font-semibold relative left-8 md:left-40">Top Casts</span>    
      </div>
        {castComponent}
    </div>
  )
}

export default Cast