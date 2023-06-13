import { RiMoneyDollarBoxLine } from 'react-icons/ri'

const SearchMenu = () => {
  return (
    <>
      <section className="search-menu">
        <h3>What is your budget?</h3>
        <div className="price-range">
          <div className="range-text">
            <h3>
              500 TND - 3850 TND
              <span>
                <RiMoneyDollarBoxLine />
              </span>
            </h3>
          </div>
          <div className="range-slider">
            <div className="horizontal-slider">
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
