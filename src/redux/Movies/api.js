import axios from 'axios'
export const api_key = '4ba6205cde9f152f3a790f58cff4ac50'

export const getFilteredMoviesAsync = async (filterKeyword, page = 1) => {
  console.log(filterKeyword, 'filterKeyword from api')
  const response = await axios.get(
    `movie/${filterKeyword}?api_key=${api_key}&page=${page}`,
  )
  return response.data
}
export const searchForMoviesAsync = async (searchValue, page = 1) => {
  console.log(searchValue, 'searchValue from api')
  const response = await axios.get(
    `search/movie?api_key=${api_key}&query=${searchValue}&page=${page}`,
  )

  return response.data
}
