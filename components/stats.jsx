import useStats from '../utils/use-stats'
import styled, { css } from 'styled-components'

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 1em;
`

const StatsBlock = styled.div`
  ${({ status }) => {
    switch (status) {
      case 'active': {
        return css`
          color: hsl(205, 94%, 32%);
        `
      }
      case 'deaths': {
        return css`
          color: hsl(341, 91%, 38%);
        `
      }
      case 'recovered': {
        return css`
          color: hsl(115, 91%, 25%);
        `
      }
      default: {
        return css`
          color: black;
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

const Stats = ({ url }) => {
  const stats = useStats(url)

  if (!stats) return <p>Loading ...</p>

  if (stats?.error?.message) {
    return <p>Error fetching stats</p>
  }

  return (
    <StatsGrid>
      <StatsBlock status='active'>
        <h3>Active</h3>
        <span>
          {stats.confirmed.value - stats.deaths.value - stats.recovered.value}
        </span>
      </StatsBlock>
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
