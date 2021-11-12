import {
  GET_FILTERED_MOVIES,
  LOADING_MOVIES,
  SEARCH_FOR_MOVIE,
} from '../actionTypes'
import { getFilteredMoviesAsync, SearchForMoviesAsync } from './api'

export const getFilteredMovie = (filter, page) => {
  return async (dispatch) => {
    try {
      dispatch({ type: LOADING_MOVIES })
      const data = await getFilteredMoviesAsync(filter, page)
      console.log(data)
      dispatch(getFilteredMoviesSuccess(data))
    } catch (error) {
      console.log(error)
    }
  }
}
export const getFilteredMoviesSuccess = (data) => {
  return {
    type: GET_FILTERED_MOVIES,
    payload: data,
  }
}
export const SearchForMovies = (searchValue, page) => {
  return async (dispatch) => {
    try {
      dispatch({ type: LOADING_MOVIES })
      const data = await SearchForMoviesAsync(searchValue, page)
      console.log(data)
      dispatch(SearchForMoviesSuccess(data))
    } catch (error) {
      console.log(error)
    }
  }
}
export const SearchForMoviesSuccess = (data) => {
  return {
    type: SEARCH_FOR_MOVIE,
    payload: data,
  }
}
