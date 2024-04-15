import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { FaRegCirclePlay } from "react-icons/fa6";
//import { PlayIcon } from "./Playbtn";
import { Link } from "react-router-dom";

export default function VideoCard({data}) {
  if (!data) {
    return null;
  }
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
  };
  return (
    <div className='w-3/4 mx-auto gap-2 my-0 cursor-pointer'>
      <div className=" ">
      <Slider {...settings}>
        {data.map((d, index) => (
          
         <div key={index}  className=" gap-2">      
              <img  src={`https://img.youtube.com/vi/${d.key}/mqdefault.jpg` } alt="" className=" md:h-56 md:w-[215px] h-48 w-full   transition duration-300 transform hover:scale-105 "/>              
              <Link to={`/video/${d.id}`}>
              <FaRegCirclePlay className=" w-16 h-16 relative md:bottom-[140px] bottom-[125px] md:left-16 left-[100px] cursor-pointer"/>
              </Link>
              <p className="text-md font-semibold relative bottom-12">{ d.name}</p>          
         </div>        
        
        ))}
      </Slider>
      </div>
      
    </div>
  )
}
