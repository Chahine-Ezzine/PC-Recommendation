import React, { createContext, useState, useContext, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const SearchContext = createContext()

export const useSearch = () => {
  return useContext(SearchContext)
}

export const SearchProvider = ({ children }) => {
  const location = useLocation()

  const getQueryParams = () => {
    const queryParams = new URLSearchParams(location.search)

    const categoryFromURL = queryParams.get('text') || ''
    const minPriceFromURL = Number(queryParams.get('minPrice')) || 0
    const maxPriceFromURL = Number(queryParams.get('maxPrice')) || Infinity

    return {
      text: categoryFromURL, // Using 'text' to represent category
      minPrice: minPriceFromURL,
      maxPrice: maxPriceFromURL,
    }
  }

  const [searchData, setSearchData] = useState(getQueryParams())

  useEffect(() => {
    const newQueryData = getQueryParams()
    console.log('Query Params are:', newQueryData)
    setSearchData(newQueryData)
  }, [location.search])

  useEffect(() => {
    console.log('Updated searchData based on URL:', searchData)
  }, [searchData])

  return (
    <SearchContext.Provider value={{ searchData, setSearchData }}>
      {children}
    </SearchContext.Provider>
  )
}

export default SearchContext
