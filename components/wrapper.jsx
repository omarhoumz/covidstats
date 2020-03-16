import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
  flex-grow: 1;
  max-width: 860px;
  margin-inline-start: auto;
  margin-inline-end: auto;

  padding: 2em 1em;
`

const Wrapper = ({ children }) => {
  return <Div>{children}</Div>
}

export default Wrapper
