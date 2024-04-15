//import {  BiSearch } from "react-icons/bi"
import { TbBrandYoutubeFilled } from "react-icons/tb";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";


function Navbar() {
  const [query, setQuery] = useState('') 
  const navigate= useNavigate();
  const serchHandler =(event)=>{
   if ((event?.key === "Enter" || event ==="searchButton") && query.length > 0) {
     navigate(`/search/${query}`)
   }
  }
 
  const serchHandler2 =()=>{
   if (query?.length > 0) {
     navigate(`/search/${query}`)
   }
  }
  return (
        <div className="navbar bg-stone-700 text-white ">
  <div className="navbar-start">
    <div className="dropdown">
      <Link to={"/"} tabIndex={0} role="button" className="btn btn-ghost btn-circle ">
        <TbBrandYoutubeFilled className="  h-8 w-8"/>
      </Link >
      
    </div>
    <div className=" text-xl font-semibold">Movie App</div>
  </div>
  
  <div className="navbar-end">

    <div className="flex items-center justify-center space-x-2">
      <input
        type="text"
        placeholder="Search..."
        className="border border-gray-300  md:px-3 md:py-2 w-24 md:w-56 rounded-3xl focus:outline-none focus:border-blue-500"
        
        onChange={(e)=>setQuery(e.target.value)}
        onKeyUp={serchHandler}
      />
      <button
        onClick={serchHandler2}
        className="bg-blue-500 hover:bg-blue-600 text-white md:font-semibold md:px-4 md:py-2 text-sm px-2 rounded-3xl focus:outline-none"
      >
        Search
      </button>
    </div>
   
    
  </div>
</div>
    
  )
}

export default Navbar