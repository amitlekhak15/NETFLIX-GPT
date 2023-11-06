import { API_OPTIONS } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addHorrorMovies} from '../utils/movieSlice'
import { useEffect } from 'react'

const useHorrorMovie = () => {
    const dispatch=useDispatch()
  const getHorrorMovies=async()=>{
    const data=await fetch('https://api.themoviedb.org/3/discover/movie?with_genres=27', API_OPTIONS)
    const json=await data.json()
    console.log(json)
   
    dispatch(addHorrorMovies(json.results))
  }
  useEffect(() => {
    getHorrorMovies()
    
  }, [])
 
}

export default useHorrorMovie