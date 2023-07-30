import React, { useState, useEffect } from 'react'
import img1 from '../../public/images/img1.jpg'
import img2 from '../../public/images/img2.jpg'
import { useNavigate } from 'react-router-dom'
import background from '../../public/images/background-img.png'
import { MdOutlineArrowForwardIos } from 'react-icons/md'
import { MdOutlineArrowBackIosNew } from 'react-icons/md'

const CarouselSection = () => {
  const navigate = useNavigate()
  const navigateToSearchPage = () => {
    navigate('/search')
  }

  let initialCarouselItems = [
    { image: img1, alt: 'computer type', text: 'Gaming' },
    { image: img2, alt: 'computer type', text: 'Laptop' },
    { image: img1, alt: 'computer type', text: 'Laptop Pro' },
    { image: img2, alt: 'computer type', text: 'Bureau' },
  ]

  const [carouselItems, setCarouselItems] = useState(initialCarouselItems)
  const [visibleImagesCount, setVisibleImagesCount] = useState(1)
  const [currentImages, setCurrentImages] = useState([])
  const [selectedImage, setSelectedImage] = useState(null)

  const updateVisibleImagesCount = () => {
    let visibleCount = 1
    if (window.innerWidth >= 1210) {
      visibleCount = 4
    } else if (window.innerWidth >= 902) {
      visibleCount = 3
    } else if (window.innerWidth >= 615) {
      visibleCount = 2
    }
    setVisibleImagesCount(visibleCount)
  }

  useEffect(() => {
    window.addEventListener('resize', updateVisibleImagesCount)
    updateVisibleImagesCount()
    return () => window.removeEventListener('resize', updateVisibleImagesCount)
  }, [])

  useEffect(() => {
    setCurrentImages(carouselItems.slice(0, visibleImagesCount))
  }, [carouselItems, visibleImagesCount])

  const prevItem = () => {
    const lastItem = carouselItems.pop()
    setCarouselItems([lastItem, ...carouselItems])
  }

  const nextItem = () => {
    const firstItem = carouselItems.shift()
    setCarouselItems([...carouselItems, firstItem])
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
            {currentImages.map((item, index) => {
              // Class for each item
              const itemClass = `carousel-item item-${index + 1}`

              return (
                <div className={itemClass} key={index}>
                  <img
                    src={item.image}
                    alt={item.alt}
                    onClick={() => setSelectedImage(index)}
                    className={selectedImage === index ? 'selected' : ''}
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
        <button className="search-btn" onClick={navigateToSearchPage}>
          Search
        </button>
        <div className="background-shapes">
          <img src={background} />
        </div>
        <div className="element-2"></div>
        <div className="element-1"></div>
        <div className="ellipse-1"></div>
        <div className="ellipse-2"></div>
        <div className="ellipse-3"></div>
        <div className="ellipse-4"></div>
        <div className="victor-1">
          <svg
            class="vector-14"
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
        </div>
        <div className="victor-2">
          <svg
            class="vector-14"
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
        </div>
        <div className="victor-3">
          <svg
            class="vector-14"
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
        </div>
        <div className="victor-4">
          <svg
            class="vector-14"
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
        </div>
      </section>
    </>
  )
}
export default CarouselSection
