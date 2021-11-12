import React from 'react'
import MovieCard from '../MovieCard'
const MoviesList = ({ movies }) => (
  <div className="movies-container">
    {movies.map((movie) => (
      <MovieCard movie={movie} key={movie.id} />
    ))}
  </div>
)

export default MoviesList
