import React from 'react'
import { IMG_URL } from '../utils/constants'

function MovieCard({PosterPath, MovieTitle}) {
  return (
    <div className='w-48 pr-4'>
        <img className=''
        alt={MovieTitle} 
        src={IMG_URL + PosterPath} />
    </div>
  )
};

export default MovieCard