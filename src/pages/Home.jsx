import { Carousel } from "../components/Carousel";
import { NavBar } from "../components/NavBar";
import { carouselAllData } from "../utils/carouselData";

export const Home = () => {
  return (
    <div>
      <NavBar />
      <div className="p-5 h-full bg-zinc-900">
        {carouselAllData.map((data) =>{
          return(
            <Carousel key={data.title} api_url={data.url} title={data.title} />
          )
        })}
      </div>
    </div>
  );
};
