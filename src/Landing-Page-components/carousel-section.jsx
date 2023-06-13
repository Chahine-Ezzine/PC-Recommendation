import img1 from '../../public/images/img1.jpg'
import img2 from '../../public/images/img2.jpg'
import { useNavigate } from 'react-router-dom'

const CarouselSection = () => {
  const navigate = useNavigate()
  const navigateToSearchPage = () => {
    navigate('/search')
  }

  return (
    <>
      <section className="carousel-section">
        <h3>Search By Type</h3>
        <div className="carousel">
          <button className="prev-btn">‹</button>
          <div className="carousel-images">
            <div className="carousel-item">
              <img src={img1} alt="computer type" />
              <p>Laptop</p>
            </div>
            <div className="carousel-item2">
              <img src={img2} alt="computer type" />
              <p>Bureau</p>
            </div>
            <div className="carousel-item3">
              <img src={img1} alt="computer type" />
              <p>Gaming</p>
            </div>
            <div className="carousel-item4">
              <img src={img2} alt="computer type" />
              <p>Desktop</p>
            </div>
          </div>
          <button className="next-btn">›</button>
        </div>
        <button className="search-btn" onClick={navigateToSearchPage}>
          Search
        </button>
      </section>
    </>
  )
}
export default CarouselSection
