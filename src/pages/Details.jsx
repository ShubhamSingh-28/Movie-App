
import Banner from "../components/DetailsComponents/Banner";
import Cast from "../components/DetailsComponents/Cast"
import Recommendation from "../components/DetailsComponents/Recommendation"
import VideoSection from "../components/DetailsComponents/VideoSection";
function Details() {
  return (
    <div>
      <Banner/>
      <Cast/>
      <VideoSection/>
      <Recommendation/>
    </div>
  )
}

export default Details