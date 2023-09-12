import React, { useState, useEffect, useRef } from 'react'
import img1 from '../../public/images/img1.jpg'
import img2 from '../../public/images/img2.jpg'
import background from '../../public/images/background-img.png'
import { MdOutlineArrowForwardIos } from 'react-icons/md'
import { MdOutlineArrowBackIosNew } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'

// SVG component for vector images used in the carousel

const SVGComponent = () => (
  // SVG markup and properties here...
  <svg
    className="vector-14"
    width="476"
    height="677"
    viewBox="0 0 476 677"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_d_35_2085)">
      <path
        d="M61.6458 0C149.998 3.2128 226.784 19.2768 282.365 135.58C337.947 251.884 494.785 281.12 473.848 395.817C444.29 557.742 297.465 646.094 141.966 670.512C17.5662 690.045 -3.68114 660.016 1.24516 642.56"
        stroke="url(#paint0_radial_35_2085)"
        shape-rendering="crispEdges"
      />
    </g>
    <defs>
      <filter
        id="filter0_d_35_2085"
        x="-3.89661"
        y="-0.499695"
        width="484.156"
        height="685.88"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="4" />
        <feGaussianBlur stdDeviation="2" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_35_2085"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_35_2085"
          result="shape"
        />
      </filter>
      <radialGradient
        id="paint0_radial_35_2085"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(238.181 338.44) rotate(90) scale(338.44 237.578)"
      >
        <stop stop-color="#48BC65" />
        <stop offset="1" stop-color="#48BC65" stop-opacity="0" />
      </radialGradient>
    </defs>
  </svg>
)
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
