import { laptopInfo } from '../data'
import { BsThreeDots } from 'react-icons/bs'
import { TbPointFilled } from 'react-icons/tb'
import { useNavigate, useLocation } from 'react-router-dom'
import { AiOutlineFileDone } from 'react-icons/ai'
import React, { useContext, useState, useEffect } from 'react'
import { LaptopContext } from '../LaptopContext'

const PcResults = () => {
  const location = useLocation()
  const queryParams = new URLSearchParams(location.search)
  let queryMinPrice = Number(queryParams.get('minPrice')) // Convert to Number
  let queryMaxPrice = Number(queryParams.get('maxPrice')) // Convert to Number

  queryMinPrice = isNaN(queryMinPrice) ? 0 : queryMinPrice
  queryMaxPrice = isNaN(queryMaxPrice) ? Infinity : queryMaxPrice

  const navigate = useNavigate()
  const [sortedLaptops, setSortedLaptops] = useState(laptopInfo)
  const { state, dispatch } = useContext(LaptopContext)
  console.log('Query Params:', queryMinPrice, queryMaxPrice)

  useEffect(() => {
    console.log('useEffect triggered')

    let filteredLaptops = laptopInfo.filter(
      (laptop) => laptop.Price >= queryMinPrice && laptop.Price <= queryMaxPrice
    )

    switch (state.selectedSort) {
      case 'Brand A - Z':
        filteredLaptops.sort((a, b) => a.brand.localeCompare(b.brand))
        break
      case 'Brand Z - A':
        filteredLaptops.sort((a, b) => b.brand.localeCompare(a.brand))
        break
      case 'Price High to Low':
        filteredLaptops.sort((a, b) => b.Price - a.Price)
        break
      case 'Price Low to High':
        filteredLaptops.sort((a, b) => a.Price - b.Price)
        break
      case 'Best Value':
        filteredLaptops.sort((a, b) => b.Score - a.Score)
        break
      default:
        break
    }

    setSortedLaptops(filteredLaptops)
    console.log(filteredLaptops)
  }, [state.selectedSort, queryMinPrice, queryMaxPrice])

  const handleLaptopClick = (laptop) => {
    dispatch({ type: 'SET_LAPTOP', payload: laptop })
    navigate('/laptop-detail')
  }

  return (
    <>
      {sortedLaptops.length ? (
        sortedLaptops.map((laptop) => (
          <div className="flex-results-1">
            <div className="icon-container-results">
              <img src={laptop.Image} />
              <BsThreeDots />
            </div>
            <div className="laptop-name-container">
              <p>{laptop.Name}</p>
              <span>
                <AiOutlineFileDone />
              </span>
            </div>
            <p className="laptop-info">
              {laptop.Description.substring(
                0,
                laptop.Description.lastIndexOf(' ', 125)
              ) + '...'}
            </p>
            <div className="laptop-category-container">
              <p>Gaming</p>
              <p>Ultrabook</p>
              <p>Portable</p>
            </div>

            <div className="marque-stock-container">
              <p>{laptop.Stores}</p>
              <span>
                <TbPointFilled />
              </span>
              <p>{laptop.Stock}</p>
            </div>
            <button
              className="laptop-info-button"
              onClick={() => handleLaptopClick(laptop)}
            >
              Check it out
            </button>
          </div>
        ))
      ) : (
        <p>
          No laptops found within the specified price range and sort option.
        </p>
      )}
    </>
  )
}
export default PcResults
