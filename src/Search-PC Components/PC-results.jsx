import { laptopInfo } from '../data'
import { BsThreeDots } from 'react-icons/bs'
import { TbPointFilled } from 'react-icons/tb'
import { useNavigate } from 'react-router-dom'
import { AiOutlineFileDone } from 'react-icons/ai'

const PcResults = () => {
  const navigate = useNavigate()

  return (
    <>
      {laptopInfo.map(({ Image, Name, Stores, Stock, Description }) => {
        return (
          <div className="flex-results-1">
            <div className="icon-container-results">
              <img src={Image} />
              <BsThreeDots />
            </div>
            <div className="laptop-name-container">
              <p>{Name}</p>
              <span>
                <AiOutlineFileDone />
              </span>
            </div>
            <p className="laptop-info">
              {Description.substring(0, Description.lastIndexOf(' ', 125)) +
                '...'}
            </p>
            <div className="laptop-category-container">
              <p>Gaming</p>
              <p>Ultrabook</p>
              <p>Portable</p>
            </div>

            <div className="marque-stock-container">
              <p>{Stores}</p>
              <span>
                <TbPointFilled />
              </span>
              <p>{Stock}</p>
            </div>
            <button
              className="laptop-info-button"
              onClick={() => navigate('/laptop-detail')}
            >
              Check it out
            </button>
          </div>
        )
      })}
    </>
  )
}
export default PcResults
