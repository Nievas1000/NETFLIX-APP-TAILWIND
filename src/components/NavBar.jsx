import { IconMenu2 } from "@tabler/icons-react"
import netflixLogo from "../assets/netflix.png"
export const NavBar = () =>{
    return(
        <div className="flex items-center h-12 bg-black">
            <div className="flex items-center h-12 ml-3">
                <IconMenu2 style={{color: 'white'}}/>
                <img className="w-24 pl-5 flex items-start" src={netflixLogo} />
            </div>
            <div className="flex w-8/12 justify-end md:w-full pr-4">
                <input type="text" className="w-28 border-solid border-2 rounded border-black" placeholder="Search..."/>
            </div>
        </div>
    )
}