import {
  ADD_TO_FAVOURITES,
  GET_FILTERED_MOVIES,
  LOADING_MOVIES,
  SEARCH_FOR_MOVIE,
  LOADING_ERROR,
} from '../actionTypes'

const initialState = {
  movies: [],
  favouriteMovies: localStorage.favouriteMovies
    ? JSON.parse(localStorage.favouriteMovies)
    : [],
  totalPages: 0,
  loading: true,
}
const moviesReducer = (state = initialState, action) => {
  let favouriteMovies = [...state.favouriteMovies]
  let movies = []
  switch (action.type) {
    case GET_FILTERED_MOVIES:
      movies = action.payload.results
      movies = movies.map((movie) =>
        favouriteMovies.indexOf(movie) ? (movie.liked = true) : movie,
      )
      return {
        ...state,
        totalPages: action.payload.total_pages,
        movies: action.payload.results,
        loading: false,
      }
    case SEARCH_FOR_MOVIE:
      return {
        ...state,
        totalPages: action.payload.total_pages,
        movies: action.payload.results,
        loading: false,
      }
    case LOADING_MOVIES:
      return {
        ...state,
        loading: true,
      }
    case LOADING_ERROR:
      return {
        ...state,
        loading: false,
      }
    case ADD_TO_FAVOURITES:
      const liked = action.liked
      const movie = action.movie
      if (liked) {
        favouriteMovies.push(movie)
      } else {
        favouriteMovies = favouriteMovies.filter(
          (favMovie) => favMovie.id !== movie.id,
        )
      }
      console.log(favouriteMovies, 'favouriteMovies')
      localStorage.setItem('favouriteMovies', JSON.stringify(favouriteMovies))
      return { ...state, favouriteMovies }
    default:
      return state
  }
}
export default moviesReducer
