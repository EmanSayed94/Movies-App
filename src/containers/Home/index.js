import React, { useCallback, useEffect, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { getFilteredMovie, searchForMovies } from '../../redux/Movies/actions'

import MovieCard from '../../components/MovieCard'
import SearchBox from '../../components/SearchBox'
import CategoriesDropdown from '../../components/CategoriesDropdown'
import Spinner from '../../components/UIComponents/Spinner'
import Pagination from '../../components/Pagination'
import './home.css'

const Home = () => {
  const dispatch = useDispatch()
  const defaultCategory = 'top_rated'

  const [currentPage, setCurrentPage] = useState(0)
  const [searchValue, setSearchValue] = useState('')
  const [filter, setFilter] = useState(defaultCategory)

  const loading = useSelector((state) => state.moviesReducer.loading)
  const movies = useSelector((state) => state.moviesReducer.movies)
  const pageCount = useSelector((state) => state.moviesReducer.totalPages)

  const fetchData = useCallback(
    (page = currentPage, searchKey = searchValue, filterKey = filter) => {
      !searchKey
        ? dispatch(getFilteredMovie(filterKey, page + 1))
        : dispatch(searchForMovies(searchKey, page + 1))
    },
    [dispatch, currentPage, filter, searchValue],
  )

  useEffect(() => {
    const interval = setTimeout(() => {
      debugger
      fetchData(0, searchValue)
    }, 1500)
    return () => clearTimeout(interval)
  }, [searchValue])

  const handleSearchChange = (e) => {
    const search = e.target.value
    setCurrentPage(0)
    setSearchValue(search)
  }

  const handleClearSearch = () => {
    setSearchValue('')
    setCurrentPage(0)
  }
  const handleFilterChange = (filter) => {
    setFilter(filter)
    setSearchValue('')
    setCurrentPage(0)
    debugger
    fetchData(0, '', filter)
    console.log(filter)
  }

  const handlePageClick = (event) => {
    const newPage = event.selected
    console.log(newPage, 'pagee')
    fetchData(newPage)
    debugger
    setCurrentPage(newPage)
  }

  return (
    <main>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexWrap: 'wrap',
        }}
      >
        <SearchBox
          handleSearchChange={handleSearchChange}
          searchValue={searchValue}
          handleClearSearch={handleClearSearch}
        />
        <CategoriesDropdown
          handleFilterChange={handleFilterChange}
          filter={filter}
        />
      </div>
      {loading ? (
        <div style={{ display: 'flex' }}>
          <Spinner />
        </div>
      ) : movies.length !== 0 ? (
        <div className="movies__container ">
          {movies.map((movie) => (
            <div className="movie_item ">
              <MovieCard movie={movie} />
            </div>
          ))}
        </div>
      ) : (
        <div className="no-Result">No result found</div>
      )}
      <Pagination
        handlePageClick={handlePageClick}
        pageCount={pageCount}
        currentPage={currentPage}
      />
    </main>
  )
}

export default Home
