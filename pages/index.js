import { createGlobalStyle } from 'styled-components'

import Stats from '../components/stats'
import CountrySelector from '../components/country-selector'

const GlobalStyles = createGlobalStyle`
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`

export default () => (
  <div>
    <GlobalStyles />

    <Stats url='https://covid19.mathdro.id/api'></Stats>

    <CountrySelector></CountrySelector>
  </div>
)
