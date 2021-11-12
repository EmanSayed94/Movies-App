import React from 'react'
import { useSelector } from 'react-redux'
import MovieCard from '../../components/MovieCard'

const Favourites = () => {
  const favouriteMovies = useSelector(
    (state) => state.moviesReducer.favouriteMovies,
  )
  return (
    <div className="movies__container ">
      {favouriteMovies.map((movie) => (
        <div className="movie_item " key={movie.id}>
          <MovieCard movie={movie} />
        </div>
      ))}
    </div>
  )
}

export default Favourites
