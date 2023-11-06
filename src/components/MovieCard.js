import React from 'react'
import { IMG_CDN } from '../utils/constants'


const MovieCard = ({posterPath}) => {
  return (

    <div className='w-40 px-2'>
        <img src={IMG_CDN+posterPath} alt="MOVIE CARD"></img></div>
  )
}

export default MovieCard