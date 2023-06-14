import { IconChevronDown, IconChevronUp } from "@tabler/icons-react"
import PropTypes from 'prop-types';

export const ListOfEpisodes = ({episodes, visibleEpisodes, setVisibleEpisodes}) =>{
    return(
        <div>
        {episodes.slice(0, visibleEpisodes).map((episode, index) => (
            <div key={index}>
                <div className="flex p-5 text-white">
                    <div className="flex items-center">
                        <p className="text-4xl">{episode.episode_number}</p>
                    </div>
                    <div className="ml-5">
                        <img className=" h-20 rounded-xl" src={`https://image.tmdb.org/t/p/w500${episode.still_path}`} />
                    </div>
                    <div className="w-[70%] ml-5">
                        <h5 className="text-lg font-bold">{episode.name}</h5>
                        <p className="text-xs">{episode.overview}</p>
                    </div>
                </div>
                <div className="w-[95%] border-b border-white mt-5"></div>
            </div>
        ))}
        {visibleEpisodes !== episodes.length ? 
        <div className="flex justify-center">
            <button className="ver-mas-btn flex items-center text-gray-500" onClick={() => setVisibleEpisodes(episodes.length)}>
                <div className="circle w-8 h-8 border-2 border-white bg-gray-300 rounded-full mr-2 flex justify-center items-center ">
                    <IconChevronDown />
                </div>
            </button>
        </div>
        :
        <div className="flex justify-center">
                <button className="ver-mas-btn flex items-center text-gray-500" onClick={() => setVisibleEpisodes(10)}>
                    <div className="circle w-8 h-8 border-2 border-white bg-gray-300 rounded-full mr-2 flex justify-center items-center ">
                        <IconChevronUp />
                    </div>
                </button>
            </div>    
        }
    </div>
    )
}

ListOfEpisodes.propTypes = {
    episodes: PropTypes.array.isRequired,
    visibleEpisodes: PropTypes.number.isRequired,
    setVisibleEpisodes: PropTypes.func.isRequired,
};