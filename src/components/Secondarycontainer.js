import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'
const Secondarycontainer = () => {
    const movies=useSelector(store=>store.movies)
  return (
    <div className=' bg-black'>
        <div  className='-mt-40 relative z-20 pl-12'><MovieList title={" Now Playing"} movies={movies.nowPlayingMovies}/></div>
    <div><MovieList title={" Trending"} movies={movies.TrendingMovies}/></div>
    <div><MovieList title={"Popular"} movies={movies.PopularMovies}/></div>
    <div><MovieList title={"Upcoming Movies"} movies={movies.UpcomingMovies}/></div>
    <div><MovieList title={" Horror Movies"} movies={movies.nowPlayingMovies}/></div>
    
    </div>
    
    

    


  )
}

export default Secondarycontainer