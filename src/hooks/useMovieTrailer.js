import { API_OPTIONS } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addTrailerVideo } from '../utils/movieSlice'
import { useEffect } from 'react'

const useMovieTrailer = (movieid) => {
    const dispatch=useDispatch()
    
    const getMoviesVideos=async()=>{
        const data=await fetch("https://api.themoviedb.org/3/movie/"+movieid+"/videos?language=en-US", API_OPTIONS)
        const  json=await data.json()
        console.log(json)
        const filterdata=json.results.filter(video=>video.type==="Trailer")
        const trailer=filterdata.length?filterdata[0]:json.results[0]
        
        dispatch(addTrailerVideo(trailer))
    }
    useEffect(() => {
        getMoviesVideos()
      
    }, [])
 
}

export default useMovieTrailer