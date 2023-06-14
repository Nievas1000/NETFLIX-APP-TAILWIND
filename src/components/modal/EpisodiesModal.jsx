import PropTypes from 'prop-types';
import { ListOfEpisodes } from "./ListOfEpisodes";
import { SelectSeason } from "./SelectSeason";
import { useEpisodes } from "../../hooks/useEpisodes";

export const EpisodiesModal = ({data}) =>{
    const [isOpen, selectedSeason, episodes, visibleEpisodes, setVisibleEpisodes, selectSeason, setIsOpen] = useEpisodes(data)
    return(
        <div>
            <div className="flex justify-between items-center mt-10">
                <h1 className="text-white text-3xl font-bold">Episodes</h1>
                {data.seasons.length > 0 && 
                    <SelectSeason selectedSeason={selectedSeason} isOpen={isOpen} data={data} selectSeason={selectSeason} setIsOpen={setIsOpen}/>
                }
            </div>
            {episodes.length > 0 &&
                <ListOfEpisodes episodes={episodes} visibleEpisodes={visibleEpisodes} setVisibleEpisodes={setVisibleEpisodes} />
            }
        </div>
    )
}

EpisodiesModal.propTypes = {
    data: PropTypes.object.isRequired,
};