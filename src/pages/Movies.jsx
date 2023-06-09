import { Carousel } from "../components/Carousel"
import { RecomendedVideo } from "../components/RecomendedVideo"
import { carouselDataMovies } from "../utils/carouselData"

export const Movies = () =>{
    return(
        <div>
            <RecomendedVideo id={667538}/>
            <div className="p-8 h-full">
                {carouselDataMovies.map((data) =>{
                    return(
                        <Carousel key={data.title} api_url={data.url} title={data.title} />
                    )
                })}
            </div>
        </div>
    )
}