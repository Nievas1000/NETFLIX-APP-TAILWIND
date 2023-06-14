import { IconChevronDown, IconChevronUp } from '@tabler/icons-react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

export const SimilarRecommendations = ({id, isMovie}) =>{
    const [similars, setSimilars] = useState([])
    const [visibleSimilars, setVisibleSimilars] = useState(9);

    useEffect(() =>{
        const getRecomended = async() =>{
            try {
                const response = await axios.get(`${isMovie ? import.meta.env.VITE_MOVIES_SIMILAR_API : import.meta.env.VITE_SERIES_SIMILAR_API}${id}`)
                if(response.status === 200){
                    setSimilars(response.data.results)
                }
            } catch (error) {
                console.log(error);
            }
        }
        getRecomended()
    },[id, isMovie])
    console.log(similars);
    return(
        <div className='mt-16'>
            <div>
                <h1 className='text-white text-2xl font-bold'>More like this</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-5 bold">
                    {similars.slice(0, visibleSimilars).map((similar) => (
                    <div key={similar.id} className='text-gray-600 bg-black bg-opacity-20 rounded-lg cursor-pointer'>
                        <img className="h-44 rounded-t-lg" src={`https://image.tmdb.org/t/p/w500${similar.backdrop_path ? similar.backdrop_path : similar.poster_path}`} />
                        <div className='p-3'>
                            <div className='flex'>
                                <p className='border-solid border-gray-700 border-[1px] rounded-sm w-8'>{similar.adult ? '18+' : '10+'}</p>
                                <p className='ml-3'>{isMovie ? similar.release_date.split("-")[0] : similar.first_air_date.split("-")[0]}</p>
                            </div>
                            <p className='text-sm mt-2'>{similar.overview.substring(0, 150)}</p>
                        </div>
                    </div>
                    ))}
                </div>
                {visibleSimilars !== similars.length ? 
                    <div className="flex justify-center mt-5">
                        <button className="ver-mas-btn flex items-center text-gray-500" onClick={() => setVisibleSimilars(similars.length)}>
                            <div className="circle w-8 h-8 border-2 border-white bg-gray-300 rounded-full mr-2 flex justify-center items-center">
                                <IconChevronDown />
                            </div>
                        </button>
                    </div>
                    :
                    <div className="flex justify-center mt-5">
                        <button className="ver-mas-btn flex items-center text-gray-500" onClick={() => setVisibleSimilars(9)}>
                            <div className="circle w-8 h-8 border-2 border-white bg-gray-300 rounded-full mr-2 flex justify-center items-center ">
                                <IconChevronUp />
                            </div>
                        </button>
                    </div>    
                }
            </div>
        </div>
    )
}

SimilarRecommendations.propTypes = {
    id: PropTypes.number.isRequired,
    isMovie: PropTypes.bool.isRequired,
};