import { Carousel } from "../components/carousel/Carousel"
import { RecomendedVideo } from "../components/RecomendedVideo"
import { carouselDataMovies } from "../utils/carouselData"

export const Movies = () =>{
    return(
        <div>
            <RecomendedVideo apiUrl={import.meta.env.VITE_MOVIES_VIDEO_API} id={667538} isMovie={true}/>
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