import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import SearchMenu from './SearchMenu'
import CarouselSection from './carousel-section'
import Header from './header'
import MainTitle from './MainTitle'
import Footer from './Footer'

const HomePage = () => {
  const navigate = useNavigate()

  // Define state for price range
  const [priceRange, setPriceRange] = useState([500, 3850])

  // Log price updates for debugging purposes
  useEffect(() => {
    console.log('Updated price range in HomePage:', priceRange)
  }, [priceRange])

  // Function to handle navigation to the search page with the selected price range
  const navigateToSearchPage = () => {
    const [minPrice, maxPrice] = priceRange
    navigate(`/search?minPrice=${minPrice}&maxPrice=${maxPrice}`)
    console.log('Navigating with price range:', minPrice, maxPrice)
  }

  return (
    <section className="landing-page-container">
      <Header />
      <div className="main-landing-page">
        <div className="ellipse-circle"></div>
        <MainTitle />
        {/* Allow SearchMenu to update the price range */}
        <SearchMenu setValues={setPriceRange} />
        {/* Pass the price range to the CarouselSection for filtering or other purposes */}
        <CarouselSection minPrice={priceRange[0]} maxPrice={priceRange[1]} />
      </div>
      <Footer />
    </section>
  )
}

export default HomePage
