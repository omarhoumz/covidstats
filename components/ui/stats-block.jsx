import React, { memo } from 'react'
import styled, { css } from 'styled-components'

export const statColors = {
  active: 'hsl(205, 94%, 32%)',
  deaths: 'hsl(341, 91%, 38%)',
  recovered: 'hsl(115, 91%, 25%)',
  confirmed: 'black',
}

export const statsChartColors = {
  active: 'rgba(54, 162, 235, 1)',
  deaths: 'rgba(255, 99, 132, 1)',
  recovered: 'rgba(75, 192, 192, 1)',
  confirmed: 'black',
}

const StatsBlockWrapper = styled.div`
  ${({ status }) => {
    switch (status) {
      case 'active': {
        return css`
          color: ${statColors.active};
        `
      }
      case 'deaths': {
        return css`
          color: ${statColors.deaths};
        `
      }
      case 'recovered': {
        return css`
          color: ${statColors.recovered};
        `
      }
      default: {
        return css`
          color: ${statColors.confirmed};
        `
      }
    }
  }}

  background-color: white;
  border-radius: 0.6em;
  padding: 1em;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);

  h3 {
    margin: 0;
    margin-block-end: 0.4em;
    text-transform: capitalize;
    color: #52606f;
    font-size: 0.8em;
  }

  span {
    font-size: 1.4em;
  }
`

const StatsBlock = memo(function StatsBlock({ status, title, value }) {
  return (
    <StatsBlockWrapper status={status}>
      <h3>{title}</h3>
      <span>{value}</span>
    </StatsBlockWrapper>
  )
})

export default StatsBlock
