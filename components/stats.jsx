import useStats from '../utils/use-stats'
import styled, { css } from 'styled-components'

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1em;
`

const StatsBlock = styled.div`
  ${({ status }) => {
    switch (status) {
      case 'confirmed': {
        return css`
          background-color: hsla(205, 66%, 90%, 1);
          color: hsl(205, 94%, 32%);
        `
      }
      case 'deaths': {
        return css`
          background-color: hsl(341, 66%, 90%);
          color: hsl(341, 91%, 38%);
        `
      }
      case 'recovered': {
        return css`
          background-color: hsl(115, 66%, 90%);
          color: hsl(115, 91%, 25%);
        `
      }
      default: {
        return css`
          background-color: #f2f2f2;
          color: black;
        `
      }
    }
  }}
  border-radius: 1em;
  padding: 1em;
  text-align: center;

  h3 {
    margin: 0;
    margin-block-end: 0.4em;
    text-transform: capitalize;
  }
`

const Stats = ({ url }) => {
  const stats = useStats(url)

  if (!stats) return <p>Loading ...</p>

  if (stats?.error?.message) {
    return <p>Error fetching stats</p>
  }

  return (
    <StatsGrid>
      <StatsBlock status='confirmed'>
        <h3>Confirmed</h3>
        <span>{stats.confirmed.value}</span>
      </StatsBlock>
      <StatsBlock status='deaths'>
        <h3>deaths</h3>
        <span>{stats.deaths.value}</span>
      </StatsBlock>
      <StatsBlock status='recovered'>
        <h3>recovered</h3>
        <span>{stats.recovered.value}</span>
      </StatsBlock>
    </StatsGrid>
  )
}

export default Stats
