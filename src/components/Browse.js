import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import Maincontainer from './Maincontainer'
import Secondarycontainer from './Secondarycontainer'
import usePopularMovies from '../hooks/usePopularMovies'
import useUpcomingMovies from '../hooks/useUpcomingMovies'
import useTrending from '../hooks/useTrending'
const Browse = () => {
  useNowPlayingMovies()
  usePopularMovies()
  useUpcomingMovies()
  useTrending()
  
  
  return (
    <div>
      <Header/>
      <Maincontainer/>
      <Secondarycontainer/>
      </div>
  )
}

export default Browse