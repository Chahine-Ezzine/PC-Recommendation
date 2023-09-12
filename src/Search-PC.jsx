import Header from './Landing-Page-components/header'
import Footer from './Landing-Page-components/Footer'
import './Search-PC.css'
import AsidePc from './Search-PC Components/Aside-PC'
import ResultsContainer from './Search-PC Components/results-container'
import PcResults from './Search-PC Components/PC-results'
import SearchInput from './Search-PC Components/Search-Input'
import { DecorativeSVG } from './Search-PC Components/DecorativeSVG'
import { useState } from 'react'
import { SearchProvider, useSearch } from './Search-PC Components/SearchContext' // Added useSearch import here

const SearchPc = () => {
  const [selectedCategory, setSelectedCategory] = useState('')
  const { searchData, setSearchData } = useSearch()

  return (
    <main>
      <Header />
      <div className="main-search">
        <SearchInput selectedCategory={selectedCategory} />

        <div className="main-container">
          <AsidePc
            setSelectedCategory={setSelectedCategory}
            selectedCategory={selectedCategory}
          />
          <div className="results-container">
            <ResultsContainer />
            <div className="flex-results-container">
              <PcResults />
            </div>
          </div>
        </div>
        <DecorativeSVG />
      </div>
      <Footer />
    </main>
  )
}
export default SearchPc
