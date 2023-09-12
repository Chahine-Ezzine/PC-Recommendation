import { laptopInfo } from '../data'
import { BsThreeDots } from 'react-icons/bs'
import { TbPointFilled } from 'react-icons/tb'
import { useNavigate } from 'react-router-dom'
import React, { useContext, useState, useEffect } from 'react'
import { LaptopContext } from '../LaptopContext'

import { useSearch } from './SearchContext'
import LinesSvg from './LinesSvg'
import StockSvg from './stockSvg'
import HorsStock from './HorsStock'
import ObjectSvg from './objectSvg'

const PcResults = () => {
  const { searchData } = useSearch()

  const navigate = useNavigate()
  const [sortedLaptops, setSortedLaptops] = useState(laptopInfo)
  const { state, dispatch } = useContext(LaptopContext)
  console.log('Original laptopInfo:', laptopInfo)

  useEffect(() => {
    let filteredLaptops = laptopInfo.filter(
      (laptop) =>
        laptop.Price >= searchData.minPrice &&
        laptop.Price <= searchData.maxPrice &&
        (!searchData.text || laptop.category === searchData.text)
    )
    console.log('Filtered laptops:', filteredLaptops)

    switch (state.selectedSort) {
      case 'Brand A - Z':
        filteredLaptops.sort((a, b) => a.brand.localeCompare(b.brand))
        break
      case 'Brand Z - A':
        filteredLaptops.sort((a, b) => b.brand.localeCompare(a.brand))
        break
      case 'High to Low':
        filteredLaptops.sort(
          (a, b) => parseFloat(b.Price) - parseFloat(a.Price)
        )
      case 'Low to High':
        filteredLaptops.sort(
          (a, b) => parseFloat(a.Price) - parseFloat(b.Price)
        )
        break
      case 'Best Value':
        filteredLaptops.sort(
          (a, b) => parseFloat(b.Score) - parseFloat(a.Score)
        )

        break
      default:
        break
    }

    setSortedLaptops(filteredLaptops)
  }, [state.selectedSort, searchData])

  const handleLaptopClick = (laptop) => {
    dispatch({ type: 'SET_LAPTOP', payload: laptop })
    navigate('/laptop-detail', {
      state: { selectedLaptop: laptop, searchData },
    })
  }
  function LaptopIcon({ stock }) {
    if (stock === 'En stock') {
      return <StockSvg />
    } else if (stock === 'Hors Stock') {
      return <HorsStock />
    } else {
      return null
    }
  }

  return (
    <>
      <LinesSvg />
      {sortedLaptops.length > 0 ? (
        sortedLaptops.map((laptop) => (
          <div className="flex-results-1">
            <div className="icon-container-results">
              <img src={laptop.Image} alt={`Image of ${laptop.Name}`} />
              <BsThreeDots />
            </div>
            <div className="laptop-name-container">
              <p>{laptop.Name}</p>
              <span>
                <LaptopIcon stock={laptop.Stock} />
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
      <ObjectSvg />
    </>
  )
}
export default React.memo(PcResults)
