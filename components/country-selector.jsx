import styled from 'styled-components'
import { useState } from 'react'
import Head from 'next/head'

import useStats from '../utils/use-stats'
import Stats from './stats'
import Box from './box'

const Select = styled.select`
  margin-block-end: 2em;
  padding: 1em;
  background-color: rgba(0, 0, 0, 0.02);
  appearance: none;
  font-size: 1em;
  max-width: 320px;
  width: 100%;
  cursor: pointer;
  border: 1px solid rgba(0, 0, 0, 0.02);
  transition: border 90ms cubic-bezier(0.4, 0, 0.25, 1);

  :hover,
  :focus {
    border: 1px solid #6592b3;
  }
`

const CountrySelector = () => {
  const countriesData = useStats('https://covid19.mathdro.id/api/countries')
  const [selectedCoutry, setSelectedCoutry] = useState('MAR')

  if (!countriesData) return <p>Loading ...</p>

  return (
    <Box>
      <Head>
        <title>{selectedCoutry} - Covid-19 Stats</title>
      </Head>
      <h3>Stats for: (select a country below)</h3>
      <Select
        name='contries'
        id='contries'
        onChange={e => setSelectedCoutry(e.target.value)}
        value={selectedCoutry}
      >
        {Object.entries(countriesData.countries).map(([contry, code]) => (
          <option key={`${contry}-${code}`} value={countriesData.iso3[code]}>
            {`${contry} - ${countriesData.iso3[code]}`}
          </option>
        ))}
      </Select>
      <Stats
        url={`https://covid19.mathdro.id/api/countries/${selectedCoutry}`}
      ></Stats>
    </Box>
  )
}

export default CountrySelector
