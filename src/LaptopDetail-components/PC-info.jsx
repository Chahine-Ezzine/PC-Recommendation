import { laptopFeatures } from '../data'
import { BiBookmark } from 'react-icons/bi'

const PCInfo = () => {
  return (
    <>
      {laptopFeatures.map(({ laptopImg, laptopName, marqueName, price }) => {
        return (
          <div className="flex-details-2-info">
            <div className="flex-group-1">
              <img src={laptopImg} className="flex-details-2-img" />
              <div className="flex-details-2-view">
                <p className="PC-detail-2-pc-Name">{laptopName}</p>
                <p className="PC-detail-2-pc-Marque">{marqueName}</p>
                <div className="PC-detail-2-pc-icon-view">
                  <p className="PC-detail-2-pc-view">View </p>
                  <p className="PC-detail-2-pc-icon">
                    <BiBookmark />
                  </p>
                </div>
              </div>
            </div>
            <div className="flex-group-2">
              <p className="flex-details-2-price">{price}</p>
              <p className="flex-details-2-tnd">TND</p>
            </div>
          </div>
        )
      })}
    </>
  )
}
export default PCInfo
