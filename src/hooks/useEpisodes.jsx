import axios from "axios";
import { useEffect, useState } from "react";

export const useEpisodes = (data) =>{
    const [isOpen, setIsOpen] = useState(false);
    const [selectedSeason, setSelectedSeason] = useState('');
    const [episodes, setEpisodes] = useState([])
    const [visibleEpisodes, setVisibleEpisodes] = useState(10);

    useEffect(() =>{
        const getEpisodes = async() =>{
            try {
                const response = await axios.get(`${import.meta.env.VITE_API_BASE}tv/${data.id}/season/1`)
                if(response.status === 200){
                    setSelectedSeason(1);
                    setEpisodes(response.data.episodes)
                    setIsOpen(false);
                }
            } catch (error) {
                console.log(error);
            }
        }
        getEpisodes()
    },[data.id])

    const selectSeason = async(season) => {
      setSelectedSeason(season);
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_BASE}tv/${data.id}/season/${season}`)
        if(response.status === 200){
            setEpisodes(response.data.episodes)
            setIsOpen(false);
        }
      } catch (error) {
        console.log(error);
      }
    };

    return [isOpen, selectedSeason, episodes, visibleEpisodes, setVisibleEpisodes, selectSeason, setIsOpen]
}