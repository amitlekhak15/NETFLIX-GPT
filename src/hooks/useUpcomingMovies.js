import { API_OPTIONS } from '../utils/constants'
import React,{useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { addUpcomingMovies } from '../utils/movieSlice'

const useUpcomingMovies = () => {
    const dispatch=useDispatch()
    const getNowUpcomingMovies=async()=>{
      const data=await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', API_OPTIONS)
      const json=await data.json()
      console.log(json)
     
      dispatch(addUpcomingMovies(json.results))
    }
    useEffect(() => {
      getNowUpcomingMovies()
      
    }, [])
 
}

export default useUpcomingMovies