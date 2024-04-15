import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Hero() {
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
    <div className="relative w-full h-[50%] flex items-center justify-center overflow-hidden my-1">
      
      <img
        className='absolute object-cover opacity-40'
        src="https://assets.nflxext.com/ffe/siteui/vlv3/6cefb2f5-90be-4f57-adc4-f6c3c579273d/3943990c-f4e0-4147-82ad-f531e2b547f3/IN-en-20240401-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
        alt="Background"
      />
      
      
      
      <div className='relative w-full max-w-5xl px-6 py-16 text-center '>
        <h1 className=" relative md:text-2xl font-semibold mb-10 text-white md:-top-10 -top-6">
          Millions of movies, TV shows, and people to discover. Explore now!
        </h1>
        <div className=' relative lg:bottom-3 bottom-3 '>
          <input
            className=" md:w-72 w-40 md:max-w-xl h-10 outline-none border border-gray-300 bg-white px-4 md:text-xl text-black rounded-l-3xl"
            type="text"
            placeholder='Search...'
            
            onChange={(e)=>setQuery(e.target.value)}
            onKeyUp={serchHandler}
          />
          <button onClick={serchHandler2}
          className='bg-blue-500 hover:bg-blue-900 text-white font-semibold lg:w-20 md:h-10 px-4 w-20 h-10 rounded-r-3xl relative -top-[1px] md:-top-[3px]'>
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
