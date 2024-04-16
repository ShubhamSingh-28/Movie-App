//import React from 'react'
import {  useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetchDataDetails } from "../../utils/dataSlice";
import CircleRating from "../CircleRating";
import { FaRegCirclePlay } from "react-icons/fa6";
import { fetchDataVideos } from "../../utils/dataSlice";
export default function Banner() {

    const [data, setData] = useState([]);
    const [data2, setData2] = useState([]);
    const { mediaType,  id } = useParams();

    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(fetchDataDetails({mediaType, id}))
      .then((response) => {
       setData(response.payload);
     })
     .catch((error) => {
       console.error("Error fetching data:", error);
     })
       }, [dispatch, mediaType, id]);


       useEffect(() => {
        dispatch(fetchDataVideos({mediaType, id}))
        .then((response) => {
         setData2(response.payload);
       })
       .catch((error) => {
         console.error("Error fetching data:", error);
       })
         }, [dispatch, mediaType, id]);

         if (!data || !data2 || Object.keys(data).length === 0 || Object.keys(data2).length === 0) {
          return <div className=" flex justify-center">
          <span className="loading loading-dots loading-lg"></span>
          </div>;
        }
  
         //console.log(data);
  
       //console.log(data2);
  return (
    <div className="md:w-3/4 my-14 mx-auto gap-2 md:flex text-white">
  <div className="w-full">
    <img src={`https://image.tmdb.org/t/p/w500${data.poster_path || data.backdrop_path}`} alt={data.name} className="md:h-[510px] md:w-[350px] h-48 w-full" />
  </div>
  <div className=" md:relative md:left-6">
    <h2 className="text-2xl md:text-4xl font-bold relative md:-top-2">{data.name || data.title}</h2>
    <p className="text-md">{data.tagline}</p>
    <div className=" flex md:gap-3 gap-1 my-5">
      {data.genres &&
        data.genres.map((item, index)=>(
          <div key={index} className=" bg-red-800 md:px-4 px-2 md:py-1 rounded-xl">{item.name}</div>
        ))
      }
    </div>
    <div className=" my-4 flex items-center md:justify-start justify-around md:gap-6 " >
      <div className="h-16 w-16">
    <CircleRating  rating={data.vote_average} />
      </div>
      <div className=" flex gap-4">
        <Link to={`/video/${data2?.results[0].key}`}>
    <FaRegCirclePlay className=" w-16 h-16 text-2xl cursor-pointer"/> 
    </Link>
    <p className=" flex items-center text-xl font-semibold">Watch Trailer</p>
      </div>
    </div>
    <h1 className=" text-2xl text-center md:text-start font-bold my-2">Overview</h1>
    <p className="text-lg font-semibold md:text-start text-center">{data.overview}</p>
    <div className="text-xl my-8 gap-2 flex">
    Status :
    <h1 className="text-gray-500"> {data.status} </h1>
    </div>
    <div className=" text-xl flex gap-2">
      creator : 
      { data.created_by &&
       data.created_by.map((item, index)=>(
        <h1 key={index} className=" text-gray-500 "> {item.name} { data?.created_by.length -1 !== index && ","} </h1>
      ))
    }
    </div>
    
  </div>
</div>
    
  )
}
