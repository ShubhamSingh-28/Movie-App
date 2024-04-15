import Hero from "../components/Hero"
//import Navbar from "../components/Navbar"
import Populer from "../components/Popular"
import TrandingComponent from "../components/TrandingComponent"
import TopRated from "../components/TopRated"
//import  { useEffect, useState } from 'react';


function Home() {
 
  return (
    <div className=" text-white">
      
      <Hero />
      <TrandingComponent  />
      <Populer/>
      <TopRated />
    </div>
  )
}

export default Home