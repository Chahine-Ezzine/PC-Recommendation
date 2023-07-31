import React, { createContext, useReducer, useContext } from 'react'
import { useState } from 'react'

export const LaptopContext = React.createContext({
  state: {},
  dispatch: () => {},
  minPrice: 0,
  maxPrice: Infinity,
})

const initialState = {
  selectedLaptop: null,
  selectedSort: 'Best Value',
}

const laptopReducer = (state, action) => {
  switch (action.type) {
    case 'SET_LAPTOP':
      return {
        ...state,
        selectedLaptop: action.payload,
      }
    case 'SET_SORT':
      return {
        ...state,
        selectedSort: action.payload,
      }
    default:
      return state
  }
}

export const LaptopProvider = ({
  children,
  initialMinPrice = 0,
  initialMaxPrice = Infinity,
}) => {
  const [state, dispatch] = useReducer(laptopReducer, initialState)
  const [minPrice, setMinPrice] = useState(initialMinPrice)
  const [maxPrice, setMaxPrice] = useState(initialMaxPrice)

  return (
    <LaptopContext.Provider value={{ state, dispatch, minPrice, maxPrice }}>
      {children}
    </LaptopContext.Provider>
  )
}

// Custom hook to use the Laptop Context
export const useLaptopContext = () => {
  const context = useContext(LaptopContext)
  if (!context) {
    throw new Error('useLaptopContext must be used within a LaptopProvider')
  }
  return context
}
