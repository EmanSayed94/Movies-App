import React from 'react'
import { useSelector } from 'react-redux'

import MoviesList from '../../components/MoviesList'

const Favourites = () => {
  const favouriteMovies = useSelector(
    (state) => state.moviesReducer.favouriteMovies,
  )
  return <MoviesList movies={favouriteMovies} />
}

export default Favourites
