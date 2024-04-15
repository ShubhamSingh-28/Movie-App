
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function CastCard({cast}) {
  if (!cast) {
    return null;
  }
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 9,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
    ]
  };
  return (
    <div className='md:w-3/4 m-auto cursor-pointer max-w-72 md:max-w-full '>
      <Slider {...settings}>
        {cast.map((d, index) => {
          let imgurl = d.profile_path ? `https://image.tmdb.org/t/p/w500${d.profile_path } `: "https://cdn-icons-png.flaticon.com/512/5323/5323386.png";
          return(
         <div key={index} className=" gap-0">      
              <img  src={imgurl } alt="" className="md:h-28 md:w-28 w-20 h-20  rounded-full transition duration-300 transform hover:scale-105 "/>
              <p className="text-md font-bold ">{d.original_name}</p>
              <p className="text-start text-[13px] ">{d.character}</p>           
         </div>  
          )      
})}
      </Slider>
      </div>
  )
}
