import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";
import PropTypes from 'prop-types';

export const SelectSeason = ({selectedSeason, isOpen, data, selectSeason, setIsOpen}) =>{
    return(
        <div className="relative inline-block text-white mr-5">
            <div className="flex items-center justify-between bg-gray-700 border border-white rounded-md cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                <div className="py-2 px-4">
                    {selectedSeason ? (
                        <span>Season {selectedSeason}</span>
                    ) : (
                        <span className="text-gray-400">Select Season</span>
                    )}
                </div>
                <div
                    className="py-2 px-4 text-gray-400 cursor-pointer"
                >
                    {isOpen ? <IconChevronUp size={18} /> : <IconChevronDown size={18} />}
                </div>
            </div>
            {isOpen && (
                <div className="absolute left-0 mt-2 bg-gray-700 border border-white rounded-md">
                    {data.seasons.map((_, index) => {
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
    )
}

SelectSeason.propTypes = {
    data: PropTypes.object.isRequired,
    selectedSeason: PropTypes.string.isRequired,
    selectSeason: PropTypes.func.isRequired,
    isOpen: PropTypes.bool.isRequired,
    setIsOpen: PropTypes.func.isRequired,
};