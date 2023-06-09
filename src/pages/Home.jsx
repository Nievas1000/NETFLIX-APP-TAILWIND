import { Carousel } from "../components/Carousel";
import {  RecomendedVideo } from "../components/RecomendedVideo";
import { carouselAllData } from "../utils/carouselData";

export const Home = () => {
  return (
    <div>
      <RecomendedVideo id={840326}/>
      <div className="p-8 h-full">
        {carouselAllData.map((data) =>{
          return(
            <Carousel key={data.title} api_url={data.url} title={data.title} />
          )
        })}
      </div>
    </div>
  );
};
