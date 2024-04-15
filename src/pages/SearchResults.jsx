//import React from 'react'
import { fetchDataSearch } from "../utils/dataSlice";
import {  useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux"; // Import useSelector
//import MovieCard from "../components/MovieCard";
//import MyImage from  '../components/Img'
import { Link } from "react-router-dom";
export default function SearchResults() {
 // const data2 = useSelector(state => state.data.dataa);
  const [data, setData] = useState();
  const { query } = useParams();
  const dispatch = useDispatch();

  // Use useSelector to get data from Redux store
  const ApifetchMemo = useCallback(() =>{
    dispatch(fetchDataSearch({ query }))
      .then((response) => {
        setData(response.payload); // Don't need this since data is now in Redux store
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  } , [dispatch, query]);
  useEffect(() => {
    ApifetchMemo()
  }, [ApifetchMemo]);

 //console.log(data); // Log the searchData from Redux store

  return (
    <div className=" md:w-3/4 gap-2 m-4">
      <h2 className=" text-2xl font-semibold my-6">Search results of : {query}</h2>
      <div className="flex flex-wrap justify-between gap-2 ">
      {data && data.results.map((item, index) => (
        <div key={item.id} className="w-full sm:w-1/2 md:w-1/5 relative md:left-40">
          <Link to={`/${item.media_type}/${item.title || item.name}/${item.id}`} key={index} >
       { item.media_type === "person" ?(<></>):(
          <div className="flex flex-col items-center mb-4" >
          <img className="md:h-56 md:w-[200px] h-48 w-full rounded-xl relative transition duration-300 transform hover:scale-105 " src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt={item.title || item.name} />
          <h3 className=" font-semibold">{item.title || item.name}</h3>
          <h5>{item.first_air_date || item.release_date}</h5>
        </div>
        )}
        </Link>
        </div>
      ))}
      </div>
    </div>
  );
}
