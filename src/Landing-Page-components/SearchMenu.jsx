import * as React from 'react'
import Box from '@mui/material/Box'
import Slider from '@mui/material/Slider'
import { styled } from '@mui/system'
import { RiMoneyDollarBoxLine } from 'react-icons/ri'

const StyledSlider = styled(Slider)(({ theme }) => ({
  color: '#52af77',
  height: 8,
  padding: '13px 0',
  '& .MuiSlider-thumb': {
    width: '1.25rem',
    height: '1.25rem',
    background: '#FFD369',
    '&:focus, &:hover, &.Mui-active': {
      boxShadow: 'inherit',
    },
  },
  '& .MuiSlider-track': {
    height: 6,
    background: '#FFD369',
    border: 'none !important',
  },
  '& .MuiSlider-rail': {
    height: 4,
    borderRadius: 12,
    background: '#FFD369',
  },
  '& .MuiSlider-mark': {
    backgroundColor: 'black',
  },
  '& .labelStyle': {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    fontSize: 14,
  },
  '& .dimmed': {
    color: 'rgba(255, 255, 255, 0.7)',
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    fontSize: 14,
  },
}))

const SearchMenu = ({ setValues = () => {} }) => {
  const [localValues, setLocalValues] = React.useState([500, 3850])
  const minDistance = 500

  const handleChange = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return
    }

    if (activeThumb === 0) {
      setLocalValues([
        Math.min(newValue[0], localValues[1] - minDistance),
        localValues[1],
      ])
    } else {
      setLocalValues([
        localValues[0],
        Math.max(newValue[1], localValues[0] + minDistance),
      ])
    }
    console.log('New value from slider:', newValue)
  }
  const generateMarks = () => {
    let marks = [
      { value: 0, label: <span className="labelStyle">0</span> },
      { value: 7000, label: <span className="labelStyle dimmed">7000</span> },
    ]
    for (let i = 1000; i < 7000; i += 1000) {
      marks.push({ value: i })
    }
    return marks
  }
  const marks = generateMarks()

  React.useEffect(() => {
    console.log('Running useEffect with localValues:', localValues)
    setValues(localValues)
  }, [localValues, setValues])

  return (
    <section className="search-menu">
      <h3>What is your budget?</h3>
      <div className="price-range">
        <div className="money-flex">
          <span>
            <RiMoneyDollarBoxLine />
          </span>
          <input
            type="text"
            value={localValues[0]}
            onChange={(e) =>
              setLocalValues([Number(e.target.value), localValues[1]])
            }
            className="budget-input"
          />
          <span>TND</span>
          <span> - </span>
          <input
            type="text"
            value={localValues[1]}
            onChange={(e) =>
              setLocalValues([localValues[0], Number(e.target.value)])
            }
            className="budget-input"
          />
          <span> TND</span>
        </div>

        <Box sx={{ width: '100%', marginTop: 4, marginBottom: 2 }}>
          <StyledSlider
            className="mySlider"
            getAriaLabel={() => 'Minimum distance'}
            value={localValues}
            onChange={handleChange}
            valueLabelDisplay="auto"
            getAriaValueText={(value) => `${value} TND`}
            marks={marks}
            min={0}
            max={7000}
          />
        </Box>
      </div>
    </section>
  )
}

export default SearchMenu
