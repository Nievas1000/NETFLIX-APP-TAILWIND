import axios from "axios";
import { useState } from "react";
import { createContext } from "react";
import PropTypes from 'prop-types';

export const SearchContext = createContext()

export const SearchProvider = ({children}) =>{
    const [searchResults, setSearchResult] = useState([])
    const [searchValue, setSearchValue] = useState('')
    const [page, setPage] = useState(1)

    const handleSearchResults = async(searchValue) =>{
        setSearchValue(searchValue)
        console.log(searchValue);
        if(searchValue !== ''){
            try {
                const response = await axios.get(import.meta.env.VITE_MOVIES_SEARCH_API, {params: {keyword: searchValue, page}})
                setSearchResult(response.data.results)
            } catch (error) {
                console.log(error);
            }
        }else{
            setSearchResult([])
        }
    }

    const handleSearchByScroll = async() =>{
        setPage(page + 1)
        if(searchValue !== ''){
            try {
                const response = await axios.get(import.meta.env.VITE_MOVIES_SEARCH_API, {params: {keyword: searchValue, page}})
                setSearchResult((prevResults) =>[...prevResults, ...response.data.results])
            } catch (error) {
                console.log(error);
            }
        }
    }

    return(
        <SearchContext.Provider value={{searchResults, handleSearchResults,  handleSearchByScroll}}>
            {children}
        </SearchContext.Provider>
    )
}

SearchProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

