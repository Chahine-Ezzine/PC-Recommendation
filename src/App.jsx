import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LaptopDetail from './LaptopDetail'
import SearchPage from './Search-PC'
import HomePage from './Landing-Page-components/HomePage'
import { LaptopProvider } from './LaptopContext'
import { SearchProvider } from './Search-PC Components/SearchContext'

const App = () => {
  return (
    <Router>
      <LaptopProvider>
        <SearchProvider>
          <Routes>
            <Route path="/laptop-detail" element={<LaptopDetail />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/*" element={<HomePage />} />
          </Routes>
        </SearchProvider>
      </LaptopProvider>
    </Router>
  )
}

export default App
