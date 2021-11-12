import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ADD_TO_FAVOURITES } from '../../redux/actionTypes'
import './card.css'

const MovieCard = (props) => {
  const movie = props.movie
  const { poster_path, overview, title, vote_average } = movie
  const favouriteMovies = useSelector(
    (state) => state.moviesReducer.favouriteMovies,
  )
  const [liked, setLiked] = useState(
    favouriteMovies.find((favMovie) => favMovie.id === movie.id),
  )

  const dispatch = useDispatch()

  const handleAddToFavourite = () => {
    dispatch({ type: ADD_TO_FAVOURITES, movie: movie, liked: !liked })
    setLiked(!liked)
  }
  return (
    <div className="movie__card">
      <img
        src={`https://image.tmdb.org/t/p/w300${poster_path}`}
        alt="Avatar"
        style={{ width: '100%', height: '100%' }}
        className="border-img"
      />
      <div
        style={{
          position: 'absolute',
          top: '5px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
          padding: '10px',
        }}
      >
        <div style={{ position: 'relative' }}>
          <i style={{ color: 'gold' }} className="fa fa-star fa-4x"></i>
          <span
            style={{
              position: 'absolute',
              left: '29%',
              top: '35% ',
              display: 'block',
              width: ' 40%',
              textAlign: 'center',
            }}
          >
            {vote_average}
          </span>
        </div>
        <div onClick={handleAddToFavourite}>
          <i
            className={`fa ${liked ? 'fa-heart' : 'fa-heart-o'} fa-2x liked`}
            aria-hidden="true"
            style={{ color: '#be2020' }}
          ></i>
        </div>
      </div>
      <div className="movie__details">
        <h4 style={{ textAlign: 'center' }}>
          <b>{title}</b>
        </h4>

        {/* <p>{overview}</p> */}
      </div>
    </div>
  )
}

export default MovieCard
