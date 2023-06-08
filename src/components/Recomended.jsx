import axios from "axios"
import { useEffect, useState } from "react"

export const Recomended = () =>{
    const [recomended, setRecomended] = useState()

    useEffect(() =>{
        const getRecomended = async() =>{
            try {
                const response = await axios.get('http://localhost:3001/recomended')
                setRecomended(response.data)
            } catch (error) {
                console.log(error);
            }
        }
        getRecomended()
    },[])
    return(
        <div className="absolute">
            <img src={`https://image.tmdb.org/t/p/w500/${recomended.poster_path }`} />
        </div>
    )
}