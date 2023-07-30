import React, { useState } from 'react'
import { price } from '../data'
import { HiOutlineChevronDown, HiOutlineChevronUp } from 'react-icons/hi'

const PriceCheckbox = () => {
  const [showCheckboxes, setShowCheckboxes] = useState(false)

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
