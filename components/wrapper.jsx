import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
  flex-grow: 1;
  max-width: 780px;
  margin-inline-start: auto;
  margin-inline-end: auto;

  padding: 1em;
`

const Wrapper = ({ children }) => {
  return <Div>{children}</Div>
}

export default Wrapper
