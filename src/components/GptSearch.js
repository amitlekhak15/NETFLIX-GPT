import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import { BACKBROUND } from '../utils/constants'
const GptSearch = () => {
  return (
    <div>
        <div className='absolute -z-10'>
    <img src={BACKBROUND}
        alt="logo"></img>
        </div>
      <GptSearchBar/>
      <GptMovieSuggestions/>
    </div>
  )
}

export default GptSearch