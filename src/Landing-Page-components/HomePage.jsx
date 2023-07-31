import React from 'react'
import SearchMenu from './SearchMenu'
import CarouselSection from './carousel-section'
import Header from './header'
import MainTitle from './MainTitle'
import Footer from './Footer.jsx'
import { useNavigate } from 'react-router-dom'

const HomePage = () => {
  const navigate = useNavigate()
  const [values, setValues] = React.useState([500, 3850])

  React.useEffect(() => {
    console.log('Updated values in HomePage:', values)
  }, [values])

  const navigateToSearchPage = () => {
    navigate(`/search?minPrice=${values[0]}&maxPrice=${values[1]}`)
    console.log('Navigating with:', values[0], values[1])
  }

  return (
    <section className="landing-page-container">
      <Header />
      <div className="main-landing-page">
        <div className="ellipse-circle"></div>
        <MainTitle />
        <SearchMenu setValues={setValues} />
        <CarouselSection navigateToSearchPage={navigateToSearchPage} />
      </div>
      <Footer />
    </section>
  )
}

export default HomePage
