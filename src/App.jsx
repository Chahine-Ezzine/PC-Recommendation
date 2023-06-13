import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Header from './Landing-Page-components/header'
import BackgroundShapes from './Landing-Page-components/Background-shapes'
import MainTitle from './Landing-Page-components/MainTitle'
import SearchMenu from './Landing-Page-components/SearchMenu'
import CarouselSection from './Landing-Page-components/carousel-section.jsx'
import Footer from './Landing-Page-components/Footer.jsx'
import SearchPage from './Search-PC'
import LaptopDetail from './LaptopDetail'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/laptop-detail" element={<LaptopDetail />} />
        <Route path="/search" element={<SearchPage />} />
        <Route
          path="/*"
          element={
            <>
              <Header />
              <BackgroundShapes />
              <MainTitle />
              <SearchMenu />
              <CarouselSection />
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  )
}
export default App
