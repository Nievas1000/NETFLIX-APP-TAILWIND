import { IconMenu2 } from "@tabler/icons-react"
import netflixLogo from "../assets/netflix.png"
import { SearchNavbar } from "./SearchNavbar"
import { Link } from "react-router-dom"

export const NavBar = () =>{

    return(
        <div className="fixed top-0 z-10 w-full flex items-center h-12 bg-black md:h-16">
            <div className="flex items-center pl-3">
                <IconMenu2 className="md:hidden" style={{color: 'white'}}/>
                <img className="w-24 pl-5 flex items-start md:w-32" src={netflixLogo} />
            </div>
            <ul className="hidden md:flex list-none text-white m-8">
                <Link to='/'>
                    <li className="m-4 cursor-pointer">Home</li>
                </Link>
                <Link to='/series'>
                    <li className="m-4 cursor-pointer">Tv Shows</li>
                </Link>
                <Link to='/movies'>
                    <li className="m-4 cursor-pointer">Movies</li>
                </Link>
            </ul>
            <div className="flex items-center justify-end flex-grow pr-4 md:w-28">
                <SearchNavbar />
                <input
                    type="text"
                    className="w-28 border-solid border-2 rounded border-black md:hidden"
                    placeholder="Search..."
                />
            </div>
        </div>
    )
}