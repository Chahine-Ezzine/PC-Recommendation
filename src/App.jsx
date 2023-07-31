import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LaptopDetail from './LaptopDetail'
import SearchPage from './Search-PC'
import HomePage from './Landing-Page-components/HomePage'
import { LaptopProvider } from './LaptopContext'
const App = () => {
  return (
    <Router>
      <LaptopProvider>
        <Routes>
          <Route path="/laptop-detail" element={<LaptopDetail />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/*" element={<HomePage />} />
        </Routes>
      </LaptopProvider>
    </Router>
  )
}

export default App
