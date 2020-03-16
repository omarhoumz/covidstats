import { createGlobalStyle } from 'styled-components'

import Stats from '../components/stats'
import CountrySelector from '../components/country-selector'
import Wrapper from '../components/wrapper'
import WholeWorld from '../components/whole-world'

const GlobalStyles = createGlobalStyle`
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    margin: 0;
    min-height: 100vh;
    background-color: #f4f6f8;
  }

  #__next {
    min-height: 100vh;
    display: flex;
  }
`

export default () => (
  <Wrapper>
    <GlobalStyles />

    <WholeWorld />

    <CountrySelector />
  </Wrapper>
)
