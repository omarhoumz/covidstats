import React, { memo } from 'react'
import styled from 'styled-components'

const BaseBox = styled.div`
  padding: 1.3em;
  border-radius: 0.8em;

  > :first-child {
    margin-block-start: 0;
  }

  & + & {
    margin-block-start: 2em;
  }

  @media (min-width: 668px) {
    & + & {
      margin-block-start: 2.4em;
    }
  }
`

const Box = memo(function Box({ children }) {
  return <BaseBox>{children}</BaseBox>
})

export default Box
