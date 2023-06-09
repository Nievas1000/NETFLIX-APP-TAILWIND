
import axios from "axios"
import { useEffect, useState } from "react"
import ReactPlayer from "react-player";
import { InfoRecomendedVideo } from "./InfoRecomendedVideo";
import PropTypes from 'prop-types';

export const RecomendedVideo = ({id}) =>{
    const [videoKey, setVideoKey] = useState(null);

    useEffect(() =>{
        const getRecomended = async() =>{
            try {
                const response = await axios.get(`${import.meta.env.VITE_MOVIES_VIDEO_API}${id}`)
                setVideoKey(response.data.results[1].key)
            } catch (error) {
                console.log(error);
            }
        }
        getRecomended()
    },[id])
    return(
        <div className="hidden md:block">
            {videoKey && 
            <div className="relative h-[45vw]">
                <ReactPlayer url={`https://www.youtube.com/embed/${videoKey}`} controls={false} muted={true} playing={true} loop={true} width="100%" height="100%"/>
                <InfoRecomendedVideo id={id}/>
            </div>
            }
        </div>
    )
}

RecomendedVideo.propTypes = {
    id: PropTypes.number.isRequired,
};