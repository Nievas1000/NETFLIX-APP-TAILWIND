import { useContext, useEffect } from "react";
import { Carousel } from "../components/carousel/Carousel";
import {  RecomendedVideo } from "../components/RecomendedVideo";
import { carouselAllData } from "../utils/carouselData";
import { SearchContext } from "../context/search";

export const Home = () => {
  const {searchResults, handleSearchByScroll} = useContext(SearchContext);
  useEffect(() => {
    function handleScroll() {
      if (
        window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight
      ) {
        handleSearchByScroll()
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); //eslint-disable-line
  console.log(searchResults);
  return (
    <div>
      {searchResults.length === 0 ?
      <div>
        <RecomendedVideo apiUrl={import.meta.env.VITE_MOVIES_VIDEO_API} id={840326} isMovie={true}/>
          <div className="p-8 h-full">
            {carouselAllData.map((data) =>{
              return(
                <Carousel key={data.title} api_url={data.url} title={data.title} />
              )
            })}
          </div>
        </div> 
        :
      <div className="flex flex-wrap items-center justify-center h-full mx-10">
        {searchResults.map((result) => (
          <div key={result.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-4 my-auto">
            <img
              src={`https://image.tmdb.org/t/p/w500${result.poster_path}`}
              alt={result.title}
              className="w-full h-36 object-cover rounded-md"
            />
          </div>
        ))}
      </div>
      }
    </div>
  );
};
