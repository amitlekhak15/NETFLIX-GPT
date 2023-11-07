import React, { useRef } from 'react'
import lang from '../utils/languageConstants'
import { useDispatch, useSelector } from 'react-redux'
import openai from '../utils/openai'
import { addHorrorMovies } from '../utils/movieSlice'
import { API_OPTIONS } from '../utils/constants'
import { addGptMoviesResult } from '../utils/gptSlice'
const GptSearchBar = () => {
  const langkey=useSelector(store=> store.config.lang)
  const dispatch=useDispatch()
  const searchtext=useRef(null)
  const handleGptSearch=async()=>{
  
    //gpt api call
    const gptquery="Act as a Movie Recommendation system  and suggest some movies for the  query" + searchtext.current.value+".only give me names of 5 movies,comma seperated like the example result given ahead.Example Result:Gadar,Sholay,Don,Golmal,Koi Mil Gaya";
    const chatResults = await openai.chat.completions.create({
      messages: [{ role: 'user', content:gptquery }],
      model: 'gpt-3.5-turbo',
    });
    console.log(searchtext.current.value)
    console.log(chatResults.choices[0]?.message?.content)
    const gptmovies=chatResults.choices[0]?.message?.content.split(",")
    // for each movie  i will search tmdb api
    const promiseArray= gptmovies.map((movie)=>(searchMovieTmdb(movie)))
    const tmdbResults= await Promise.all(promiseArray)
    dispatch(addGptMoviesResult({movieNames:gptmovies,movieResults:tmdbResults}))
    console.log(tmdbResults)
    

  }
  
  const  searchMovieTmdb=async(movie)=>{
    const data=await fetch('https://api.themoviedb.org/3/search/movie?query='+ movie+'&include_adult=false&language=en-US&page=1', API_OPTIONS)
  const json= await data.json()
  return json.results
  }
  return (
    <div className='pt-[8%] flex justify-center'>
        <form className='w-1/2 bg-black  grid grid-cols-12' onSubmit={(e)=>e.preventDefault()}>
            <input className="p-4 m-4 col-span-9" type='text' placeholder={lang[langkey].gptSearchPlaceholder} ref={searchtext}></input>
            <button className="py-2  px-4 bg-red-700 text-white rounded-lg col-span-3 m-4" onClick={handleGptSearch}>{lang[langkey].search}</button>
            </form>

    </div>
  )
}

export default GptSearchBar