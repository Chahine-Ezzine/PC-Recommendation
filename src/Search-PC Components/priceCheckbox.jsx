import React, { useState, useEffect } from 'react'
import { price } from '../data'
import { HiOutlineChevronDown, HiOutlineChevronUp } from 'react-icons/hi'
import { useNavigate, useLocation } from 'react-router-dom'

const PriceCheckbox = () => {
  const [showCheckboxes, setShowCheckboxes] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  const queryParams = new URLSearchParams(location.search)
  const queryMinPrice = queryParams.get('minPrice') || ''
  const queryMaxPrice = queryParams.get('maxPrice') || ''

  const handleCheckboxChange = (range) => {
    const [min, max] = range.split(' - ')
    console.log(
      'Navigating to:',
      `?minPrice=${min.split(' ')[0]}&maxPrice=${max.split(' ')[0]}`
    )

    queryParams.set('minPrice', min.split(' ')[0])
    queryParams.set('maxPrice', max.split(' ')[0])
    navigate(`?${queryParams.toString()}`)
  }

  const isChecked = (range) => {
    const [min, max] = range.split(' - ')
    return (
      min.split(' ')[0] === queryMinPrice && max.split(' ')[0] === queryMaxPrice
    )
  }

  return (
    <>
      <div className="price-title">
        <p>Salary Range </p>
        <div
          className="arrow-price"
          onClick={() => setShowCheckboxes(!showCheckboxes)}
        >
          {showCheckboxes ? <HiOutlineChevronDown /> : <HiOutlineChevronUp />}
        </div>
      </div>
      {showCheckboxes &&
        price.map((category, index) => (
          <div className="categories-checkbox" key={index}>
            <div className="checkbox-pc">
              <input
                type="checkbox"
                id={`price-${index}`}
                className="checkbox-input"
                checked={isChecked(category)}
                onChange={() => handleCheckboxChange(category)}
              />
              <label htmlFor={`price-${index}`}>
                <span className="custom-checkbox"></span>
                <span className="checkbox-margin">{category}</span>
                <span className="square-23">23</span>
              </label>
            </div>
          </div>
        ))}
    </>
  )
}

export default PriceCheckbox
