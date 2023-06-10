import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";
import { useState } from "react";
import PropTypes from 'prop-types';

export const EpisodiesModal = ({data}) =>{
    const [isOpen, setIsOpen] = useState(false);
    const [selectedSeason, setSelectedSeason] = useState('');
  
    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };
  
    const selectSeason = (season) => {
      setSelectedSeason(season);
      setIsOpen(false);
    };
    return(
        <div className="flex justify-between items-center mt-10">
            <h1 className="text-white text-3xl font-bold">Episodes</h1>
            <div className="relative inline-block text-white mr-5">
                <div className="flex items-center justify-between bg-gray-700 border border-white rounded-md cursor-pointer">
                    <div className="py-2 px-4">
                        {selectedSeason ? (
                            <span>{selectedSeason}</span>
                        ) : (
                            <span className="text-gray-400">Select Season</span>
                        )}
                    </div>
                    <div
                        className="py-2 px-4 text-gray-400 cursor-pointer"
                        onClick={toggleDropdown}
                    >
                        {isOpen ? <IconChevronUp size={18} /> : <IconChevronDown size={18} />}
                    </div>
                </div>
                {isOpen && (
                    <div className="left-0 mt-2 bg-gray-700 border border-white rounded-md">
                        {[...Array(data.number_of_seasons)].map((_, index) => {
                            const season = index + 1;
                            return (
                            <div
                                key={season}
                                className="py-2 px-4 hover:bg-gray-600 cursor-pointer"
                                onClick={() => selectSeason(season)}
                            >
                                <span>{`Season ${season}`}</span>
                            </div>
                            );
                        })}
                    </div>
                )}
            </div>
        </div>
    )
}

EpisodiesModal.propTypes = {
    data: PropTypes.object.isRequired,
};