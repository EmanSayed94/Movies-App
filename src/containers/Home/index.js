import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getFilteredMovie, searchForMovies } from '../../redux/Movies/actions'
import { categoriesArr } from '../../components/CategoriesDropdown/constants'
import SearchBox from '../../components/SearchBox'
import CategoriesDropdown from '../../components/CategoriesDropdown'
import Spinner from '../../components/UIComponents/Spinner'
import Pagination from '../../components/Pagination'
import MoviesList from '../../components/MoviesList'

import './home.css'

const Home = () => {
  const dispatch = useDispatch()
  const initialPage = 0

  const [currentPage, setCurrentPage] = useState(initialPage)
  const [searchValue, setSearchValue] = useState('')
  const [filter, setFilter] = useState(categoriesArr[0].value)
  const [filterText, setFilterText] = useState(categoriesArr[0].category)

  const loading = useSelector((state) => state.moviesReducer.loading)
  const movies = useSelector((state) => state.moviesReducer.movies)
  const pageCount = useSelector((state) => state.moviesReducer.totalPages)

  const fetchData = (
    page = currentPage,
    searchKey = searchValue,
    filterKey = filter,
  ) => {
    !searchKey
      ? dispatch(getFilteredMovie(filterKey, page + 1))
      : dispatch(searchForMovies(searchKey, page + 1))
  }

  useEffect(() => {
    fetchData(initialPage)
  }, [])

  useEffect(() => {
    const interval = setTimeout(() => {
      if (searchValue !== '') fetchData(initialPage, searchValue)
    }, 1500)
    return () => clearTimeout(interval)
  }, [searchValue])

  const handleSearchChange = (e) => {
    const search = e.target.value
    setCurrentPage(initialPage)
    setSearchValue(search)
  }

  const handleClearSearch = () => {
    setSearchValue('')
    setCurrentPage(initialPage)
    fetchData(initialPage, '', filter)
  }
  const handleFilterChange = (filter, filterText) => {
    setFilter(filter)
    setFilterText(filterText)
    setSearchValue('')
    setCurrentPage(initialPage)
    fetchData(initialPage, '', filter)
  }

  const handlePageClick = (event) => {
    const newPage = event.selected
    fetchData(newPage)
    setCurrentPage(newPage)
  }

  return (
    <main>
      <div className="search-container">
        <SearchBox
          handleSearchChange={handleSearchChange}
          searchValue={searchValue}
          handleClearSearch={handleClearSearch}
        />
        <CategoriesDropdown
          handleFilterChange={handleFilterChange}
          filterText={filterText}
        />
      </div>
      {loading ? (
        <div style={{ display: 'flex' }}>
          <Spinner />
        </div>
      ) : movies.length !== 0 ? (
        <MoviesList movies={movies} />
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
