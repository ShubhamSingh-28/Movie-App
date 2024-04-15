//import React from 'react'
import { useState, useEffect } from "react";
import Card from "./Card";
//import SwitchTabs from "./SwitchTabs";
import { useDispatch } from "react-redux";
import { fetchDataTopRated, fetchDataTopRatedTv } from "../utils/dataSlice";



function TopRated() {
  const [data, setData] = useState([]);
  const [tab, setTab] = useState("movie");

  const handleTabChange = (newTab) => {
    setTab(newTab);
  };
  const dispatch = useDispatch();
  
  useEffect(() => {
    if(tab === "movie"){ 
    dispatch(fetchDataTopRated())
      .then((response) => {
        setData(response.payload);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
    }else{
      dispatch(fetchDataTopRatedTv())
      .then((response) => {
       // console.log(response.payload);
        setData(response.payload);

      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
    }
  }, [dispatch,tab]);
  return (
    <div className=' my-6 flex items-center md:justify-center  w-full'>
      <div className='  w-full '>
        <div className=' pb-3 flex justify-around '>
         <span className=" text-2xl font-semibold">TopRated</span>
         <div className=" w-48 h-8 bg-white flex text-black justify-between rounded-full">
      <button
        onClick={() => handleTabChange("movie")}
        className={tab === "movie" ? " bg-orange-600 text-md text-white rounded-full px-7 py-1" : "px-6 py-1"}
      >
        Movies
      </button>
      <button
        onClick={() => handleTabChange("tv")}
        className={tab === "tv" ? "bg-orange-600 text-white  rounded-full px-9  py-1" : "px-6 py-1"}
      >
        Tv 
      </button>
    </div>
        </div>
       <Card  data={data.results} endpoint={tab} />
      

      </div>
    </div>
  )
}

export default TopRated