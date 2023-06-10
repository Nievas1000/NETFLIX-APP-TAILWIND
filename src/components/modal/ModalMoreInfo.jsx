import {  IconX } from "@tabler/icons-react";
import ReactPlayer from "react-player";
import PropTypes from 'prop-types';
import { DescriptionModal } from "./DescriptionModal";
import { EpisodiesModal } from "./EpisodiesModal";

export const ModalMoreInfo = ({videoKey, setShowDropdown, divRefSon, data, isMovie}) =>{ // eslint-disable-line

    return(
        <div className="fixed inset-0 flex justify-center z-50 bg-black bg-opacity-50">
            <div className="relative w-[850px] rounded-xl overflow-auto " ref={divRefSon}>
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
                    height="80%"
                />
                <div className="bg-zinc-900 pl-10 ">
                   <DescriptionModal isMovie={isMovie} data={data} />
                   <EpisodiesModal />
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