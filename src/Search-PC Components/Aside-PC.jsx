import CategoriesCheckbox from './categoriesCheckbox'
import PriceCheckbox from './priceCheckbox'
import { HiOutlineChevronUp } from 'react-icons/hi'
import { BiSearch } from 'react-icons/bi'
import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom' // <-- Make sure this line is added
import { useSearch } from './SearchContext'

const AsidePc = ({ setSelectedCategory, selectedCategory }) => {
  const { searchData, setSearchData } = useSearch()

  const location = useLocation()
  const queryParams = new URLSearchParams(location.search)
  const categoryFromURL = queryParams.get('text') || ''

  useEffect(() => {
    if (categoryFromURL) {
      setSearchData((prevData) => ({ ...prevData, text: categoryFromURL }))
    }
  }, [categoryFromURL])

  return (
    <>
      <div className="aside-container">
        <div className="aside-flex-container">
          <div className="newsLetter-container">
            <h6>Join our Newsletter</h6>
            <p>Join our newsletter for updates to the system</p>
            <form action="#">
              <div className="email-wrapper">
                <div className="email-input">
                  <div className="icon-container">
                    <BiSearch />
                  </div>
                  <input
                    type="email"
                    className="write-email"
                    placeholder="type your email"
                  />
                </div>
                <button type="submit">Search</button>
              </div>
            </form>
          </div>

          <div className="categories-container">
            <CategoriesCheckbox
              setSelectedCategory={setSelectedCategory}
              selectedCategory={searchData.text}
            />
          </div>

          <div className="price-choice-container">
            <PriceCheckbox />
          </div>

          <div className="web-marque-container">
            <div className="web-title">
              Website
              <div className="arrowUp-icon website-icon">
                <HiOutlineChevronUp />
              </div>
            </div>

            <div className="web-title">
              Marque
              <div className="arrowUp-icon marque-icon">
                <HiOutlineChevronUp />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AsidePc
