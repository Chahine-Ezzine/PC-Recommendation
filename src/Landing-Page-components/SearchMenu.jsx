import { RiMoneyDollarBoxLine } from 'react-icons/ri'
import { useState, useEffect } from 'react'

const SearchMenu = () => {
  const [minBudget, setMinBudget] = useState(500)
  const [maxBudget, setMaxBudget] = useState(3850)
  const [budget, setBudget] = useState('500 TND - 3850 TND')

  useEffect(() => {
    setBudget(`${minBudget} TND - ${maxBudget} TND`)
  }, [minBudget, maxBudget])

  const handleMinBudgetChange = (e) => {
    const newValue = e.target.value
    if (!isNaN(newValue)) {
      setMinBudget(newValue)
    }
  }

  const handleMaxBudgetChange = (e) => {
    const newValue = e.target.value
    if (!isNaN(newValue)) {
      setMaxBudget(newValue)
    }
  }

  return (
    <>
      <section className="search-menu">
        <h3>What is your budget?</h3>
        <div className="price-range">
          <div className="money-flex">
            <span>
              <RiMoneyDollarBoxLine />
            </span>
            <input
              type="text"
              value={minBudget}
              onChange={handleMinBudgetChange}
              className="budget-input"
            />
            <span>TND</span>
            <span> - </span>
            <input
              type="text"
              value={maxBudget}
              onChange={handleMaxBudgetChange}
              className="budget-input"
            />
            <span> TND</span>
          </div>

          <div className="range-slider">
            <div className="horizontal-slider">
              <div className="points-container">
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
              </div>
              <div className="slider-circle-1">
                <div className="tooltip-1">
                  20
                  <div className="arrow-1"></div>
                </div>
              </div>
              <div className="slider-circle-2">
                <div className="tooltip-2">
                  66 <div className="arrow-2"></div>
                </div>
              </div>
              <div className="small-horizontal-slider"></div>
            </div>

            <div className="prices">
              <p className="min-price">12</p>
              <p className="max-price">20</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default SearchMenu
