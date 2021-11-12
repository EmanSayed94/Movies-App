import React, { useEffect, useState } from 'react'

import MovieCard from '../../components/MovieCard'
import SearchBox from '../../components/SearchBox'
import CategoriesDropdown from '../../components/CategoriesDropdown'
import './home.css'
import { useDispatch, useSelector } from 'react-redux'
import { getFilteredMovie, SearchForMovies } from '../../redux/Movies/actions'
import Spinner from '../../components/UIComponents/Spinner'
import Pagination from '../../components/Pagination'
import { debounce } from '../../utils/debounce'

const Home = () => {
  const dispatch = useDispatch()
  const defaultCategory = 'top_rated'

  const [currentPage, setCurrentPage] = useState(0)
  const [searchValue, setSearchValue] = useState('')
  const [filter, setFilter] = useState(defaultCategory)

  useEffect(() => {
    fetchData(0, '', defaultCategory)
  }, [dispatch])

  const loading = useSelector((state) => state.moviesReducer.loading)
  const movies = useSelector((state) => state.moviesReducer.movies)
  const pageCount = useSelector((state) => state.moviesReducer.totalPages)
  console.log(pageCount, 'moviessss')

  const handleSearchChange = (e) => {
    const search = e.target.value
    setCurrentPage(0)
    setSearchValue(search)
  }
  useEffect(() => {
    const interval = setTimeout(() => {
      fetchData(0, searchValue)
    }, 1500)
    return () => clearTimeout(interval)
  }, [searchValue])

  const handleClearSearch = () => {
    setSearchValue('')
    setCurrentPage(0)
  }
  const handleFilterChange = (filter) => {
    setFilter(filter)
    setSearchValue('')
    setCurrentPage(0)
    fetchData(0, '', filter)
    console.log(filter)
  }

  const handlePageClick = (event) => {
    const newPage = event.selected
    console.log(newPage, 'pagee')
    fetchData(newPage)
    setCurrentPage(newPage)
  }
  const fetchData = (
    page = currentPage,
    searchKey = searchValue,
    filterKey = filter,
  ) => {
    !searchKey
      ? dispatch(getFilteredMovie(filter, page + 1))
      : dispatch(SearchForMovies(searchKey, page + 1))
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
        <div className="movies__container container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
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
