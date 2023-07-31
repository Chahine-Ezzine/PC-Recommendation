import React, { useState } from 'react'
import { RiArrowDownSFill } from 'react-icons/ri'
import { useContext } from 'react'
import { LaptopContext } from '../LaptopContext'

const ResultsContainer = () => {
  const [selectedSort, setSelectedSort] = useState('Best Value')
  const { dispatch } = useContext(LaptopContext)
  const handleSortChange = (e) => {
    const newSortValue = e.target.value
    setSelectedSort(newSortValue)
    dispatch({ type: 'SET_SORT', payload: newSortValue })
  }

  return (
    <>
      <div className="showing-laptops-container">
        <h2>Showing 125 Laptop</h2>
        <div className="sort-container">
          <p>Sort by:</p>
          <div className="sort-dropdown">
            <select
              value={selectedSort}
              onChange={handleSortChange}
              className="sort-select"
            >
              <option value="Best Value">Best Value</option>
              <option value="Brand A - Z">Brand A - Z</option>
              <option value="Brand Z - A">Brand Z - A</option>
              <option value="Price High to Low">Price High to Low</option>
              <option value="Price Low to High">Price Low to High</option>
            </select>
            <RiArrowDownSFill className="custom-arrow-icon" />
          </div>
        </div>
      </div>
    </>
  )
}

export default ResultsContainer
