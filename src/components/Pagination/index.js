import React from 'react'
import ReactPaginate from 'react-paginate'

import './pagination.css'

const Pagination = ({ handlePageClick, pageCount, currentPage }) => (
  <ReactPaginate
    breakLabel="..."
    nextLabel=">>"
    onPageChange={handlePageClick}
    pageRangeDisplayed={1}
    pageCount={pageCount}
    previousLabel="<<"
    renderOnZeroPageCount={null}
    containerClassName={'pagination'}
    previousLinkClassName={'previous__Link__ClassName'}
    nextLinkClassName={'next__Link__ClassName'}
    disabledClassName={'pagination__link--disabled'}
    activeClassName={'pagination__link--active'}
    forcePage={currentPage}
  />
)

export default Pagination
