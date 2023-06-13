import { laptopInfo } from '../data'
import { BsThreeDots } from 'react-icons/bs'
import { TbPointFilled } from 'react-icons/tb'
import { useNavigate } from 'react-router-dom'

const PcResults = () => {
  const navigate = useNavigate()

  return (
    <>
      {laptopInfo.map(
        ({ laptopImg, laptopName, StockIcon, marqueName, StockStatus }) => {
          return (
            <div className="flex-results-1">
              <div className="icon-container-results">
                <img src={laptopImg} />
                <BsThreeDots />
              </div>
              <div className="laptop-name-container">
                <p>{laptopName}</p>
                <span>
                  <StockIcon />
                </span>
              </div>
              <p className="laptop-info">
                Écran 14" HD - Processeur: Intel Core i3-1115G4 (3.00 GHz up to
                4,10 GHz Turbo max , 6 Mo de mémoire cache, Dual-Core)
              </p>
              <div className="laptop-category-container">
                <p>Gaming</p>
                <p>Ultrabook</p>
                <p>Portable</p>
              </div>

              <div className="marque-stock-container">
                <p>{marqueName}</p>
                <span>
                  <TbPointFilled />
                </span>
                <p>{StockStatus}</p>
              </div>
              <button
                className="laptop-info-button"
                onClick={() => navigate('/laptop-detail')}
              >
                Check it out
              </button>
            </div>
          )
        }
      )}
    </>
  )
}
export default PcResults
