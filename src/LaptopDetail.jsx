import Header from './Landing-Page-components/header'
import AsidePc from './Search-PC Components/Aside-PC'
import Footer from './Landing-Page-components/Footer'
import './LaptopDetail.css'

import PCInfo from './LaptopDetail-components/PC-info'
import PCinfoMain from './LaptopDetail-components/PC-info-main'

const LaptopDetail = () => {
  return (
    <>
      <Header />
      <main>
        <div className="details-container">
          <AsidePc />
          <div className="main-details-container">
            <div className="flex-details-container">
              <div className="flex-details-1">
                <PCinfoMain />
              </div>
              <div className="flex-details-2">
                <PCInfo />
                <button className="flex-details-2-btn"> SEE MORE</button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
export default LaptopDetail
