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

const Header = styled.header`
  display: flex;
  flex-direction: column;

  @media (min-width: 668px) {
    flex-direction: row;
    align-items: center;
    margin-block-end: 1.4em;

    > :first-child {
      margin-block-start: 0;
      margin-block-end: 0;
      margin-inline-end: 1em;
    }

    > :last-child {
      margin-block-start: 0;
      margin-block-end: 0;
    }
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
      <Header>
        <h3>Stats for: (select a country below)</h3>
        <Select
          name='contries'
          id='contries'
          onChange={e => setSelectedCoutry(e.target.value)}
          value={selectedCoutry}
        >
          {countriesData?.countries.map(({ name, iso2, iso3 }) => (
            <option key={`${name}-${iso2}`} value={iso3}>
              {`${name} - ${iso3}`}
            </option>
          ))}
        </Select>
      </Header>
      <Stats
        url={`https://covid19.mathdro.id/api/countries/${selectedCoutry}`}
      />
    </Box>
  )
}

export default CountrySelector
