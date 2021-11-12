import {
  GET_FILTERED_MOVIES,
  LOADING_ERROR,
  LOADING_MOVIES,
  SEARCH_FOR_MOVIE,
} from '../actionTypes'
import { getFilteredMoviesAsync, searchForMoviesAsync } from './api'

export const getFilteredMovie = (filter, page) => {
  return async (dispatch) => {
    try {
      dispatch({ type: LOADING_MOVIES })
      const data = await getFilteredMoviesAsync(filter, page)
      dispatch(getFilteredMoviesSuccess(data))
    } catch (error) {
      console.log(error)
      dispatch(handleError())
    }
  }
}
export const getFilteredMoviesSuccess = (data) => {
  return {
    type: GET_FILTERED_MOVIES,
    payload: data,
  }
}
export const searchForMovies = (searchValue, page) => {
  return async (dispatch) => {
    try {
      dispatch({ type: LOADING_MOVIES })
      const data = await searchForMoviesAsync(searchValue, page)
      dispatch(searchForMoviesSuccess(data))
    } catch (error) {
      console.log(error)
      dispatch(handleError())
    }
  }
}
export const searchForMoviesSuccess = (data) => {
  return {
    type: SEARCH_FOR_MOVIE,
    payload: data,
  }
}
export const handleError = () => {
  return {
    type: LOADING_ERROR,
    payload: false,
  }
}
