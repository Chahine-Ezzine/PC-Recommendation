// Libraries
import React from 'react'
import { useLocation } from 'react-router-dom'

// Components
import Header from './Landing-Page-components/header'
import AsidePc from './Search-PC Components/Aside-PC'
import Footer from './Landing-Page-components/Footer'
import SearchInput from './Search-PC Components/Search-Input'
import PCInfo from './LaptopDetail-components/PC-info'
import PCinfoMain from './LaptopDetail-components/PC-info-main'
import DetailLine1 from './LaptopDetail-components/detail-line-1'
import DetailLine2 from './LaptopDetail-components/detail-line-2'
import DetailLine3 from './LaptopDetail-components/detail-line-3'
import DetailLine4 from './LaptopDetail-components/detail-line-4'
import Object2 from './LaptopDetail-components/object-2'

// Context
import { useSearch } from './Search-PC Components/SearchContext'

// Styles
import './LaptopDetail.css'

const LaptopDetail = () => {
  const location = useLocation()
  const { searchData } = useSearch()
  const selectedLaptop = location.state?.selectedLaptop || null
  const { state = {} } = location || null
  const yourCategoryValue = location.state?.yourCategoryValue || null
  return (
    <main>
      <Header />
      <div className="main-search">
        <SearchInput
          initialSearchData={searchData}
          selectedCategory={yourCategoryValue}
        />

        <div className="object-1"></div>
        <div className="details-container">
          <AsidePc />
          <div className="main-details-container">
            <div className="flex-details-container">
              <div className="flex-details-1">
                <PCinfoMain />
              </div>
              <div className="flex-details-2">
                <DetailLine1 />
                <DetailLine2 />
                <DetailLine3 />
                <DetailLine4 />

                <PCInfo />
                <button className="flex-details-2-btn"> SEE MORE</button>
              </div>
            </div>
          </div>
          <Object2 />
        </div>
      </div>
      <Footer />
    </main>
  )
}
export default LaptopDetail
