import React, { useState } from 'react'
import categories from '../data'
import { HiOutlineChevronDown, HiOutlineChevronUp } from 'react-icons/hi'

const CategoriesCheckbox = () => {
  const [showCheckboxes, setShowCheckboxes] = useState(false)

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
        categories.map((category, index) => (
          <div className="categories-checkbox" key={index}>
            <div className="checkbox-pc">
              <input
                type="checkbox"
                id={`checkbox-${index}`}
                className="checkbox-input"
              />
              <label htmlFor={`checkbox-${index}`}>
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

export default CategoriesCheckbox
