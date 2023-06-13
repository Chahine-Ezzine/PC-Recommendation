import CategoriesCheckbox from './categoriesCheckbox'
import PriceCheckbox from './priceCheckbox'
import { HiOutlineChevronUp } from 'react-icons/hi'
import { BiSearch } from 'react-icons/bi'

const AsidePc = () => {
  return (
    <>
      <div className="aside-container">
        <div className="aside-flex-container">
          <div className="newsLetter-container">
            <h7> Join our newsLetter</h7>
            <p>Join our newsletter for updated to the system </p>

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
            <CategoriesCheckbox />
          </div>
          <div className="price-choice-container">
            <PriceCheckbox />
          </div>
          <p className="web-marque-container">
            <div className="web-title">
              Website
              <div className="arrowUp-icon1">
                <HiOutlineChevronUp />
              </div>
            </div>
            <p className="web-title">
              Marque
              <div className="arrowUp-icon2">
                <HiOutlineChevronUp />
              </div>
            </p>
          </p>
        </div>
      </div>
    </>
  )
}
export default AsidePc
