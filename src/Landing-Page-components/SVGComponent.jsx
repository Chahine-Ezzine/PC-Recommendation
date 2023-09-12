import React from 'react'

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

export default SVGComponent
