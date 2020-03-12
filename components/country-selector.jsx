import styled from 'styled-components'
import { useState } from 'react'

import useStats from '../utils/use-stats'
import Stats from './stats'

const Select = styled.select`
  margin-block-end: 2em;
  border: 1px solid grey;
  padding: 1em;
  background: aliceblue;
  appearance: none;
  font-size: 1em;
  max-width: 320px;
  width: 100%;
`

const CountrySelector = () => {
  const countriesData = useStats('https://covid19.mathdro.id/api/countries')
  const [selectedCoutry, setSelectedCoutry] = useState('MAR')

  if (!countriesData) return <p>Loading ...</p>

  return (
    <div>
      <h3>Selected country is:</h3>
      <Select
        name='contries'
        id='contries'
        onChange={e => setSelectedCoutry(e.target.value)}
      >
        {Object.entries(countriesData.countries).map(([contry, code]) => (
          <option
            key={code}
            selected={countriesData.iso3[code] === selectedCoutry}
            value={countriesData.iso3[code]}
          >
            {contry}
          </option>
        ))}
      </Select>
      <Stats
        url={`https://covid19.mathdro.id/api/countries/${selectedCoutry}`}
      ></Stats>
    </div>
  )
}

export default CountrySelector
