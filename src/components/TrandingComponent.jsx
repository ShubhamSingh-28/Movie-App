//import React from 'react'

import { useState, useEffect, useCallback } from "react";
import Card from "./Card";
import { useDispatch } from "react-redux";
import { fetchDataWeeks, fetchDataDays } from "../utils/dataSlice";


function TrandingComponent() {
  const [data, setData] = useState([]);
  const [tab, setTab] = useState("day");

  const handleTabChange = (newTab) => {
    setTab(newTab);
  };
  const dispatch = useDispatch();

  const ApifetchMemo = useCallback(() =>{
    if(tab === "day"){ 
      dispatch(fetchDataDays())
    .then((response) => {
     setData(response.payload);
   })
   .catch((error) => {
     console.error("Error fetching data:", error);
   });
       }else{
         dispatch(fetchDataWeeks())
         .then((response) => {
           setData(response.payload);
         })
         .catch((error) => {
           console.error("Error fetching data:", error);
         });
       }
  } , [dispatch,tab])
  useEffect(() => {
    ApifetchMemo()
  }, [ApifetchMemo]);
  if (!data  || Object.keys(data).length === 0 ) {
    return <div className=" flex justify-center">
    <span className="loading loading-dots loading-lg"></span>
    </div>;
  }
 // console.log(data);
  return (
    <div className="my-6 flex items-center md:justify-center w-full">
      <div className="w-full">
        <div className="pb-3 flex justify-around">
          <span className="text-2xl font-semibold">Trandings</span>
          <div className=" w-48 h-8 bg-white flex text-black justify-between rounded-full">
      <button
        onClick={() => handleTabChange("day")}
        className={tab === "day" ? " bg-orange-600 text-md text-white rounded-full px-7 py-1" : "px-6 py-1"}
      >
        Days
      </button>
      <button
        onClick={() => handleTabChange("week")}
        className={tab === "week" ? "bg-orange-600 text-white  rounded-full px-9  py-1" : "px-6 py-1"}
      >
        Week
      </button>
    </div>
        </div>
        

          <Card  data={data.results}/>
          
      
      </div>
    </div>
  );
}

export default TrandingComponent