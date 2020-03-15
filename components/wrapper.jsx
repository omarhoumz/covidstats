import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
  max-width: 780px;
  margin: auto;
`

const Wrapper = ({ children }) => {
  return <Div>{children}</Div>
}

export default Wrapper
