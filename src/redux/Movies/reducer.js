import {
  GET_FILTERED_MOVIES,
  LOADING_MOVIES,
  SEARCH_FOR_MOVIE,
} from '../actionTypes'

const initialState = {
  movies: [],
  totalPages: 30,
  loading: false,
}
const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FILTERED_MOVIES:
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
    default:
      return state
  }
}
export default moviesReducer
