import { RiArrowDownSFill } from 'react-icons/ri'

const ResultsContainer = () => {
  return (
    <>
      <div className="showing-laptops-container">
        <h2>Showing 125 Laptop</h2>
        <div className="sort-container">
          <p>Sort by:</p>
          <span className="laptop-value">Best Value</span>
          <span className="laptop-icon">
            <RiArrowDownSFill />
          </span>
        </div>
      </div>
    </>
  )
}
export default ResultsContainer
