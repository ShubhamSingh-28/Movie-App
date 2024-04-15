
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import CircleRating from './CircleRating'
import { Link } from "react-router-dom";


function Card({data, endpoint}) {
 // console.log(data);
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
    <div className='w-3/4 m-auto gap-2 text-white '>
      <div className=" ">
      <Slider {...settings}>
        {data.map((d, index) => (
          <Link to={`/${d.media_type || endpoint}/${d.id}`} key={index} >
         <div   className=" gap-2">      
              <img  src={`https://image.tmdb.org/t/p/w500${d.poster_path}` } alt="" className="md:h-56 md:w-[200px] h-48 w-full  relative transition duration-300 transform hover:scale-105 "/>
              <div className=" h-11 w-11 relative -top-12 left-2 lg:left-1 ">
              <CircleRating rating={d.vote_average} />         
              </div>
              <p className="text-xl font-semibold relative bottom-10">{d.title || d.name}</p>
              <p className="text-start relative bottom-10">{d.release_date || d.first_air_date}</p>           
         </div>        
         </Link>
        ))}
      </Slider>
      </div>
      
    </div>

  )
}

export default Card