import axios from 'axios';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

export const DescriptionModal = ({isMovie, data}) =>{
    const [actors, setActors] = useState()
    useEffect(() =>{
        const getRecomended = async() =>{
            try {
                const response = await axios.get(`${isMovie ? import.meta.env.VITE_MOVIES_ACTORS_API : import.meta.env.VITE_SERIES_ACTORS_API}${data.id}`)
                setActors(response.data)
            } catch (error) {
                console.log(error);
            }
        }
        getRecomended()
    },[data.id, isMovie])
    return(
        <div className="flex">
        <div className="w-[55%] text-white mt-5">
            <div className="flex">
                <span className="m-2">{isMovie ? data.release_date.split("-")[0] : data.first_air_date.split("-")[0]}</span>
                <span className="m-2 border border-gray-50 rounded-md w-10 flex justify-center">{data.adult ? '18+' : '10+'}</span>
            </div>
            <p>{data.overview}</p>
        </div>
        <div className="w-[45%] mt-5">
            <div className="flex ">
                <label className="text-gray-600 ">Genres: </label>
                <p className="ml-2 text-white text-base">{data.genres.map((genre) => genre.name).join(", ")}</p>
            </div>
            <div className="flex mt-3">
                <label className="text-gray-600">Cast: </label>
                <p className="ml-2 text-white text-base">{actors?.map((actor) => actor.name).join(", ")}</p>
            </div>
        </div>
    </div>
    )
}

DescriptionModal.propTypes = {
    data: PropTypes.object.isRequired,
    isMovie: PropTypes.bool.isRequired,
};