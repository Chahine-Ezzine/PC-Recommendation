import categories from '../data'
import { HiOutlineChevronDown } from 'react-icons/hi'

const CategoriesCheckbox = () => {
  return (
    <>
      <div className="Category-title">
        Categorie
        <div className="arrow-icon">
          <HiOutlineChevronDown />
        </div>
      </div>
      {categories.map((category, index) => (
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
export default CategoriesCheckbox
