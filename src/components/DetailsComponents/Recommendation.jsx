

import { useState, useEffect } from "react";
import Card from "../Card";
//import SwitchTabs from "./SwitchTabs";
import { useDispatch } from "react-redux";
import {  fetchDataRecommendation } from "../../utils/dataSlice";
import { useParams } from "react-router-dom";

function Recommendation() {
    const [data, setData] = useState([]);
    const { mediaType, id } = useParams();
    //console.log(mediaType, id);
   
    const dispatch = useDispatch();
    
    useEffect(() => {
    
     dispatch(fetchDataRecommendation({mediaType, id}))
   .then((response) => {
    setData(response.payload);
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  })
    }, [dispatch, mediaType, id]);

    if (!data  || Object.keys(data).length === 0 ) {
      return <div className=" flex justify-center">
      <span className="loading loading-dots loading-lg"></span>
      </div>;
    }

  
 // console.log(data.results);
  return (
    <div className="  w-full">
      <div className="pb-3 ">
        <span className="md:text-2xl text-lg font-semibold relative left-8 md:left-40">Recommendations</span>    
      </div>
        <Card  data={data.results}/>    
    </div>
  );
}

export default Recommendation