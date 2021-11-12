import React from 'react'
import { categoriesArr } from './categories.constants'

import './categories.css'

const CategoriesDropdown = ({ handleFilterChange, filter, filterText }) => {
  return (
    <>
      <div className="dropdown">
        <button className="dropbtn">
          {filterText}
          <i
            className="fa fa-caret-down"
            aria-hidden="true"
            color="white"
            style={{ margin: '0 5px 0 15px' }}
          ></i>
        </button>
        <div className="dropdown-content">
          {categoriesArr.map((item) => (
            <div
              key={item.value}
              className="dropdown-item"
              onClick={() => handleFilterChange(item.value, item.category)}
            >
              {item.category}
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default CategoriesDropdown
