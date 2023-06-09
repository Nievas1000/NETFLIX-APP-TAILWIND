import {  IconSearch, IconUser, IconX } from "@tabler/icons-react";
import { useState } from "react";

export const SearchNavbar = () =>{
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    const handleSearchClick = () => {
      setIsSearchOpen(!isSearchOpen);
    };
    return(
        <div className="hidden md:flex">
            <input
                type="text"
                className={`w-0 border-solid h-8 mt-4 rounded bg-black border-white text-white transition-all duration-300 ${
                    isSearchOpen ? 'w-48  border-2' : 'w-0  pl-0'
                }`}
                placeholder="Titles,genres..."
            />
            {isSearchOpen ? 
                <IconX 
                    className="md:flex m-5 transition-all duration-300 cursor-pointer" 
                    onClick={handleSearchClick} 
                    style={{ color: 'white' }} /> 
                :
                <IconSearch
                    className={`hidden md:flex m-5 transition-all duration-300 cursor-pointer ${
                        isSearchOpen ? 'opacity-0 -translate-x-2' : 'opacity-100 translate-x-0'
                    }`}
                    style={{ color: 'white' }}
                    onClick={handleSearchClick}
            />}
            <IconUser className="hidden md:flex m-5" style={{ color: 'white' }} />
        </div>
    )
}