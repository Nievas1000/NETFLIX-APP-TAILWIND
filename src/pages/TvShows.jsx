import { Carousel } from "../components/carousel/Carousel"
import { RecomendedVideo } from "../components/RecomendedVideo"
import { carouselDataSeries } from "../utils/carouselData"

export const TvShows = () =>{
    return(
        <div>
        <RecomendedVideo apiUrl={import.meta.env.VITE_SERIES_VIDEO_API} id={114294} isMovie={false}/>
        <div className="p-8 h-full">
            {carouselDataSeries.map((data) =>{
                return(
                    <Carousel key={data.title} api_url={data.url} title={data.title} />
                )
            })}
        </div>
    </div>
    )
}