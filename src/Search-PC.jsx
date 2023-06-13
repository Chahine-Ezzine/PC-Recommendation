import Header from './Landing-Page-components/header'
import Footer from './Landing-Page-components/Footer'
import './Search-PC.css'
import AsidePc from './Search-PC Components/Aside-PC'
import ResultsContainer from './Search-PC Components/results-container'
import PcResults from './Search-PC Components/PC-results'

const SearchPc = () => {
  return (
    <>
      <Header />
      <main>
        <div className="main-container">
          <AsidePc />
          <div className="results-container">
            <ResultsContainer />
            <div className="flex-results-container">
              <PcResults />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
export default SearchPc
