import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import Maincontainer from './Maincontainer'
import Secondarycontainer from './Secondarycontainer'
import usePopularMovies from '../hooks/usePopularMovies'
import useUpcomingMovies from '../hooks/useUpcomingMovies'
import useTrending from '../hooks/useTrending'
import useHorrorMovie from '../hooks/useHorrorMovie'
import GptSearch from './GptSearch'
import { useSelector } from 'react-redux'
const Browse = () => {
  useNowPlayingMovies()
  usePopularMovies()
  useUpcomingMovies()
  useTrending()
  useHorrorMovie()
  const showGptSearch=useSelector(store=>store.gpt.showGptSearch)
  
  
  return (
    <div>
      <Header/>
      {
        showGptSearch? <GptSearch/>:<><Maincontainer/><Secondarycontainer/></>
        
      }
     
      
      </div>
  )
}

export default Browse