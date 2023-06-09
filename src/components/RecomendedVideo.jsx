
import axios from "axios"
import { useEffect, useState } from "react"
import ReactPlayer from "react-player";
import { InfoRecomendedVideo } from "./InfoRecomendedVideo";
import PropTypes from 'prop-types';

export const RecomendedVideo = ({apiUrl,id,isMovie}) =>{
    const [videoKey, setVideoKey] = useState(null);

    useEffect(() =>{
        const getRecomended = async() =>{
            try {
                const response = await axios.get(`${apiUrl}${id}`)
                setVideoKey(response.data.results[1].key)
            } catch (error) {
                console.log(error);
            }
        }
        getRecomended()
    },[id, apiUrl])
    return(
        <div className="hidden md:block">
            {videoKey && 
            <div className="relative h-[45vw]">
                <ReactPlayer url={`https://www.youtube.com/embed/${videoKey}`} controls={false} muted={true} playing={true} loop={true} width="100%" height="100%"/>
                <InfoRecomendedVideo isMovie={isMovie} id={id} videoKey={videoKey}/>
            </div>
            }
        </div>
    )
}

RecomendedVideo.propTypes = {
    id: PropTypes.number.isRequired,
    apiUrl: PropTypes.string.isRequired,
    isMovie: PropTypes.bool.isRequired,
};