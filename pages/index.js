import { createGlobalStyle } from 'styled-components'
import Head from 'next/head'

import CountrySelector from '../components/country-selector'
import Wrapper from '../components/wrapper'
import WholeWorld from '../components/whole-world'

const GlobalStyles = createGlobalStyle`
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    margin: 0;
    min-height: 100vh;
    background-color: #edf2f7;
  }

  #__next {
    min-height: 100vh;
    display: flex;
  }
`

export default () => (
  <Wrapper>
    <Head>
      <link rel='icon' type='image/jpg' href='/c-icon.png' />
      <title>Covid-19 Stats</title>
    </Head>
    <GlobalStyles />

    <WholeWorld />

    <CountrySelector />
  </Wrapper>
)
