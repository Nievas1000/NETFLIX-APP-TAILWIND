import { IconInfoCircle, IconPlayerPlayFilled } from "@tabler/icons-react"
import axios from "axios"
import { useEffect, useState } from "react"
import PropTypes from 'prop-types';
import {useModal} from "../hooks/useModal"
import { ModalMoreInfo } from "./modal/ModalMoreInfo";

export const InfoRecomendedVideo = ({isMovie,id, videoKey}) =>{
    const [data, setData] = useState()
    const [showDropdow, setShowDropdown, divRefSon] = useModal()

    useEffect(() =>{
        const getRecomended = async() =>{
            try {
                const response = await axios.get(`${isMovie ? import.meta.env.VITE_MOVIE_DETAILS_API : import.meta.env.VITE_SERIE_DETAILS_API}${id}`)
                setData(response.data)
            } catch (error) {
                console.log(error);
            }
        }
        getRecomended()
    },[id, isMovie])

    const handleModalOpen = () => {
        setShowDropdown(true);
        document.body.classList.add('modal-open');
      };
    
      const handleModalClose = () => {
        setShowDropdown(false);
        document.body.classList.remove('modal-open');
      };
    return(
        <div className="absolute top-0 left-0 h-full flex items-center justify-start w-2/4 pl-24">
            <div className="w-4/6 h-full flex flex-col justify-center">
                <h1 className="text-4xl md:text-5xl text-white font-bold mb-4">{isMovie ? data?.title : data?.name}</h1>
                <p className="text-white mt-2">{data?.overview}</p>
                <div className="flex flex-wrap justify-start gap-4 mt-5">
                    <button className="bg-white text-black px-4 py-2 rounded-md shadow flex items-center justify-center">
                        <IconPlayerPlayFilled className="mr-2" />
                        Play
                    </button>
                    <button className="bg-gray-500 text-white px-4 py-2 rounded-md shadow flex items-center justify-center" onClick={handleModalOpen}>
                        <IconInfoCircle className="mr-2" />
                        More Info
                    </button>
                </div>
            </div>
            {showDropdow && (
                <ModalMoreInfo videoKey={videoKey} setShowDropdown={handleModalClose} divRefSon={divRefSon} data={data} isMovie={isMovie}/>
            )}

        </div>
    )
}

InfoRecomendedVideo.propTypes = {
    id: PropTypes.number.isRequired,
    isMovie: PropTypes.bool.isRequired,
    videoKey: PropTypes.string.isRequired,
};