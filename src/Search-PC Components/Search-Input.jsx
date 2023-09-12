import { BiSearch } from 'react-icons/bi'
import { RiMoneyDollarBoxLine } from 'react-icons/ri'
import { useSearch } from './SearchContext'
import { useEffect, useState } from 'react'

const DecorativeLine = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="263"
    height="248"
    viewBox="0 0 263 248"
    fill="none"
  >
    <path
      d="M-151.958 -430C-63.6055 -426.787 13.1804 -410.723 68.7619 -294.42C124.343 -178.116 281.182 -148.88 260.245 -34.1829C230.687 127.742 83.862 216.094 -71.6375 240.512C-196.037 260.045 -217.285 230.016 -212.358 212.56"
      stroke="url(#paint0_radial_36_42)"
    />
    <defs>
      <radialGradient
        id="paint0_radial_36_42"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(24.5777 -91.5598) rotate(90) scale(338.44 237.578)"
      >
        <stop stop-color="#48BC65" />
        <stop offset="1" stop-color="#48BC65" stop-opacity="0" />
      </radialGradient>
    </defs>
  </svg>
)

const SearchInput = ({
  initialSearchData,
  selectedCategory: propSelectedCategory,
}) => {
  const { searchData, setSearchData } = useSearch()
  const [localSelectedCategory, setLocalSelectedCategory] = useState(
    propSelectedCategory || 'PC Gaming'
  )

  useEffect(() => {
    if (initialSearchData) {
      setSearchData(initialSearchData)
    }
  }, [initialSearchData, setSearchData])

  return (
    <>
      <div className="search-input">
        <form action="#">
          <div className="search-wrapper">
            <div className="input-wrapper2">
              <div className="icon-wrapper1">
                <BiSearch />
              </div>
              <input
                className="first-search"
                type="text"
                placeholder={localSelectedCategory || 'PC Gaming'}
                value={searchData.text || localSelectedCategory}
                onChange={(e) => {
                  // Making sure the user input doesn't have unwanted characters
                  const sanitizedInput = e.target.value.replace(/[^\w\s]/gi, '')
                  setSearchData((prev) => ({ ...prev, text: sanitizedInput }))
                }}
              />
            </div>
            <div className="input-wrapper2">
              <div className="icon-wrapper2">
                <RiMoneyDollarBoxLine />
              </div>
              <input
                type="text"
                className="second-search"
                placeholder="500 - 3850DT"
                value={`${searchData.minPrice} - ${searchData.maxPrice}`}
                onChange={(e) => {
                  const values = e.target.value.split(' - ')
                  if (values.length !== 2) return // if the input doesn't match the expected format, just return

                  const [min, max] = values
                  setSearchData((prev) => ({
                    ...prev,
                    minPrice: isNaN(min) ? prev.minPrice : Number(min),
                    maxPrice: isNaN(max) ? prev.maxPrice : Number(max),
                  }))
                }}
              />
            </div>
            <button type="submit">Search</button>
          </div>
        </form>
        <DecorativeLine className="line-1" />
        <DecorativeLine className="line-2" />
        <DecorativeLine className="line-3" />
        <DecorativeLine className="line-4" />
      </div>
    </>
  )
}

export default SearchInput
