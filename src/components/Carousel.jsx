import axios from "axios"
import { useEffect, useState } from "react"
import { useCarousel } from "../hooks/useCarousel";
import { CarouselButtons } from "./CarouselButtons";
import PropTypes from 'prop-types';

export const Carousel = ({api_url, title}) =>{
    const [data, setData] = useState()
    const [carouselRef, scrollLeft, scrollRight] = useCarousel()
    
    useEffect(() =>{
        const getRecomended = async() =>{
            try {
                const response = await axios.get(api_url)
                setData(response.data.results)
            } catch (error) {
                console.log(error);
            }
        }
        getRecomended()
    },[api_url])
    return(
        <div>
            <h1 className="text-xl font-bold text-gray-600 mb-3">{title}</h1>
            <div className="relative">
                <div className="flex overflow-x-auto md:overflow-hidden scroll-snap-type-x-mandatory" ref={carouselRef}>
                    <div className="flex space-x-4">
                        {data?.map((x) => (
                            <div key={x.id} className="flex-shrink-0 w-44 h-28 md:w-60 md:h-40">
                                <img
                                    src={`https://image.tmdb.org/t/p/w500${x.poster_path}`}
                                    alt={x.title}
                                    className="w-full h-full object-cover rounded-lg"
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <CarouselButtons scrollLeft={scrollLeft} scrollRight={scrollRight}/>
            </div>
        </div>
    )
}

Carousel.propTypes = {
    api_url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};