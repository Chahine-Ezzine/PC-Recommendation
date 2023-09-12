import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { HiOutlineChevronDown, HiOutlineChevronUp } from 'react-icons/hi'
import { useSearch } from './SearchContext.jsx'

import category from '../data'
const CategoriesCheckbox = ({ setSelectedCategory, selectedCategory }) => {
  const [showCheckboxes, setShowCheckboxes] = useState(false)

  const location = useLocation()
  const navigate = useNavigate()
  const queryParams = new URLSearchParams(location.search)
  const { searchData, setSearchData } = useSearch()

  const handleCheckboxChange = (cat) => {
    setSearchData((prevData) => ({ ...prevData, text: cat }))
    queryParams.set('text', cat)
    navigate(`?${queryParams.toString()}`)
  }

  return (
    <>
      <div className="Category-title">
        Categorie
        <div
          className="arrow-icon"
          onClick={() => setShowCheckboxes(!showCheckboxes)}
        >
          {showCheckboxes ? <HiOutlineChevronDown /> : <HiOutlineChevronUp />}
        </div>
      </div>
      {showCheckboxes &&
        category.map((catItem, index) => (
          <div className="categories-checkbox" key={index}>
            <div className="checkbox-pc">
              <input
                type="radio"
                name="category"
                id={`checkbox-${index}`}
                className="checkbox-input"
                checked={searchData.text === catItem}
                onChange={() => handleCheckboxChange(catItem)}
              />
              <label htmlFor={`checkbox-${index}`}>
                <span className="custom-checkbox"></span>
                <span className="checkbox-margin">{catItem}</span>
                <span className="square-23">23</span>
              </label>
            </div>
          </div>
        ))}
    </>
  )
}

export default CategoriesCheckbox
