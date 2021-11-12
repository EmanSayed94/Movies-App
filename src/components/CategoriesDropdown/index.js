import React from 'react'
import { categoriesArr } from './categories.constants'

import './categories.css'

const CategoriesDropdown = ({ handleFilterChange, filter }) => {
  return (
    <>
      <div className="dropdown">
        <button className="dropbtn">{filter}</button>
        <div className="dropdown__content">
          {categoriesArr.map((category) => (
            <div
              key={category}
              className="dropdown__item"
              onClick={() => handleFilterChange(category)}
            >
              {category}
            </div>
          ))}
        </div>
      </div>
      {/* <select className="dropdown dropbtn">
        {categoriesArr.map((category) => (
          <option
            key={category.value}
            className="dropdown__item"
            onClick={() => handleFilterChange(category.value)}
          >
            {category.name}
          </option>
        ))}
      </select> */}
    </>
  )
}

export default CategoriesDropdown
