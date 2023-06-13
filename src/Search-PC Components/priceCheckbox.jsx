import { price } from '../data'
import { HiOutlineChevronDown } from 'react-icons/hi'

const PriceCheckbox = () => {
  return (
    <>
      <div className="price-title">
        <p>Salary Range </p>
        <div className="arrow-price">
          <HiOutlineChevronDown />
        </div>
      </div>
      {price.map((category, index) => (
        <div className="categories-checkbox" key={index}>
          <div className="checkbox-pc">
            <label>
              <input type="checkbox" className="checkbox-input" />
              <span className="checkbox-margin">{category} </span>
              <span className="square-23">23</span>
            </label>
          </div>
        </div>
      ))}
    </>
  )
}
export default PriceCheckbox
