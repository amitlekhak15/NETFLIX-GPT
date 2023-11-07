import React from 'react'
import { useSelector } from 'react-redux';
import MovieList from "./MovieList"

const GptMovieSuggestions = () => {
  const gpt=useSelector(store=>store.gpt)
  const{movieResults,movieNames}=gpt
  if(!movieNames) return null
  return (
    <div className='m-4 bg-black p-4 text-white bg-opacity-80'>
      <div>
        {
          movieNames.map((movieName,index)=>(
            <MovieList title={movieName}key={movieName} movies={movieResults[index]}/>

          ))
        }
        
       
      </div>


    </div>
  )
}

export default GptMovieSuggestions