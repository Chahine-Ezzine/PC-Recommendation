import React, { useState, useEffect, useRef } from 'react'
import img1 from '../../public/images/img1.jpg'
import img2 from '../../public/images/img2.jpg'
import background from '../../public/images/background-img.png'
import { MdOutlineArrowForwardIos } from 'react-icons/md'
import { MdOutlineArrowBackIosNew } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import SVGComponent from './SVGComponent'

// SVG component for vector images used in the carousel

// CarouselSection component definition
const CarouselSection = ({ minPrice, maxPrice }) => {
  // Initial images and descriptions for the carousel
  let initialCarouselItems = [
    { image: img1, alt: 'computer type', text: 'Gaming' },
    { image: img1, alt: 'computer type', text: 'Laptop Pro' },
    { image: img1, alt: 'computer type', text: 'Gaming' },
    { image: img1, alt: 'computer type', text: 'Laptop Pro' },
  ]

  // Hooks for component's state and lifecycle management
  const navigate = useNavigate()
  const [carouselItems, setCarouselItems] = useState(initialCarouselItems)
  const [visibleImagesCount, setVisibleImagesCount] = useState(1)
  const [currentImages, setCurrentImages] = useState([])
  const [selectedImage, setSelectedImage] = useState(null)
  const [selectedImageText, setSelectedImageText] = useState(null)
  const [clickedImage, setClickedImage] = useState(null)

  const resizeListener = useRef(null)

  // Navigate to search page with selected image parameters
  const navigateToSearch = () => {
    navigate(
      `/search?minPrice=${minPrice}&maxPrice=${maxPrice}&text=${selectedImageText}`
    )
  }
  // Handler to manage selection of an image from the carousel
  const handleImageSelection = (index) => {
    setClickedImage(index)
    setSelectedImageText(initialCarouselItems[index].text)
    console.log(initialCarouselItems[index].text)
  }

  // Effect to listen for window resize and update the count of visible images
  useEffect(() => {
    resizeListener.current = updateVisibleImagesCount

    window.addEventListener('resize', resizeListener.current)
    updateVisibleImagesCount()
    return () => window.removeEventListener('resize', resizeListener.current)
  }, [])

  // Update the count of images based on the window size
  const updateVisibleImagesCount = () => {
    let visibleCount = 1
    // Check window width and set visible count
    if (window.innerWidth >= 1210) {
      visibleCount = 4
    } else if (window.innerWidth >= 902) {
      visibleCount = 3
    } else if (window.innerWidth >= 615) {
      visibleCount = 2
    }
    setVisibleImagesCount(visibleCount)
  }
  // Effect to set the images currently visible in the carousel
  useEffect(() => {
    setCurrentImages(carouselItems.slice(0, visibleImagesCount))
  }, [carouselItems, visibleImagesCount])

  // Handlers to navigate through carousel images
  const prevItem = () => {
    const lastItem = carouselItems[carouselItems.length - 1]
    setCarouselItems([lastItem, ...carouselItems.slice(0, -1)])
  }

  const nextItem = () => {
    const firstItem = carouselItems[0]
    setCarouselItems([...carouselItems.slice(1), firstItem])
  }
  // Handlers to manage mouse hover effects on carousel images
  const handleMouseEnter = (index) => {
    setSelectedImage(index)
  }

  const handleMouseLeave = (index) => {
    if (index !== clickedImage) {
      setSelectedImage(null)
    }
  }

  return (
    <>
      <section className="carousel-section">
        <h3>Search By Type</h3>
        <div className="carousel">
          <div className="carousel-images">
            <button className="prev-btn" onClick={prevItem}>
              <MdOutlineArrowBackIosNew />
            </button>
            {/* Render the images in the carousel */}
            {currentImages.map((item, index) => {
              const itemClass = `carousel-item item-${index + 1}`

              return (
                <div className={itemClass} key={index}>
                  <img
                    src={item.image}
                    alt={item.alt}
                    onClick={() => handleImageSelection(index)}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={() => handleMouseLeave(index)}
                    className={
                      selectedImage === index || clickedImage === index
                        ? 'blur'
                        : ''
                    }
                  />
                  <p>{item.text}</p>
                </div>
              )
            })}

            <button className="next-btn" onClick={nextItem}>
              <MdOutlineArrowForwardIos />
            </button>
          </div>
        </div>
        <button className="search-btn" onClick={navigateToSearch}>
          Search
        </button>
        <div className="background-shapes">
          <img src={background} alt="Background Shapes" />
        </div>
        <div className="element-2"></div>
        <div className="element-1"></div>
        <div className="ellipse-1"></div>
        <div className="ellipse-2"></div>
        <div className="ellipse-3"></div>
        <div className="ellipse-4"></div>
        <div className="victor-1">
          <SVGComponent />
        </div>
        <div className="victor-2">
          <SVGComponent />
        </div>
        <div className="victor-3">
          <SVGComponent />
        </div>
        <div className="victor-4">
          <SVGComponent />
        </div>
      </section>
    </>
  )
}
export default CarouselSection
