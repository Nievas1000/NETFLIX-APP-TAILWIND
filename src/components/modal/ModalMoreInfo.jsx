import { IconX } from "@tabler/icons-react";
import ReactPlayer from "react-player";
import PropTypes from 'prop-types';

export const ModalMoreInfo = ({videoKey, setShowDropdown, divRefSon, data, isMovie}) =>{ // eslint-disable-line
    console.log(data);
    return(
        <div className="fixed inset-0 flex justify-center z-50 bg-black bg-opacity-50">
            <div className="relative w-2/4 h-3/4" ref={divRefSon}>
                <div
                    className="absolute top-2 right-2 text-white cursor-pointer bg-gray-950 rounded-full"
                    onClick={() => setShowDropdown(false)}
                >
                    <IconX />
                </div>
                <ReactPlayer
                    url={`https://www.youtube.com/embed/${videoKey}`}
                    controls={false}
                    muted={true}
                    playing={true}
                    disablePictureInPicture={true}
                    loop={true}
                    width="100%"
                    height="100%"
                />
                <div className="bg-zinc-900">
                    <div className="pl-10 flex">
                        <div className="w-[65%] text-white">
                            <div className="flex">
                                <span className="m-2">{isMovie ? data.released_Date.split("-")[0] : data.first_air_date.split("-")[0]}</span>
                                <span className="m-2 border border-gray-50 rounded-md w-10 flex justify-center">{data.adult ? '18+' : '10+'}</span>
                            </div>
                            <p>{data.overview}</p>
                        </div>
                        <div className="w-[35%]">
                            <p>{data.tagline}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

ModalMoreInfo.propTypes = {
    videoKey: PropTypes.string.isRequired,
    data: PropTypes.object.isRequired,
    isMovie: PropTypes.bool.isRequired,
};