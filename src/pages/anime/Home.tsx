import { useEffect } from "react";
import SwiperAnime from "../../components/SwiperAnime";
import Home_Service from "../../services/Anime/Home_Service";


const Home = () => {
  useEffect(() => {
    Home_Service();
  })
  return (
    <div className="w-full h-screen">
      <SwiperAnime />
    </div>
  )
}
export default Home;