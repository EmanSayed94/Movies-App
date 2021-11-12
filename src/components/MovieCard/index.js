import React, { useState } from 'react'
import './card.css'

const MovieCard = ({
  movie: { poster_path, overview, title, vote_average },
}) => {
  const [liked, setLiked] = useState(false)

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
        <div onClick={() => setLiked(!liked)}>
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
    // <div className="card">
    //   <div className="poster">
    //     <img src="assets/monstersinc.jpg" alt="" />
    //   </div>
    //   <div className="details">
    //     <h2>Monasters</h2>
    //     <span>Directed By</span>
    //     <div className="rating">
    //       <i className="fa fa-star"></i>
    //       <i className="fa fa-star"></i>
    //       <i className="fa fa-star"></i>
    //       <i className="fa fa-star"></i>
    //       <i className="fa fa-star"></i>
    //       <span>4/5</span>
    //     </div>
    //     <div className="tags">
    //       <div className="fantasy">fantasy</div>
    //       <div className="romance">romance</div>
    //     </div>
    //     <div className="info"></div>
    //   </div>
    // </div>
  )
}

export default MovieCard
