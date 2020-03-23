import useStats from '../utils/use-stats'
import styled from 'styled-components'
import { Doughnut } from 'react-chartjs-2'
import StatsBlock, { statColors } from './ui/stats-block'
import { useMemo } from 'react'

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 1em;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 668px) {
    flex-direction: row;
  }
`

const StatsWrapper = styled.div`
  flex: 1 1 50%;

  @media (min-width: 668px) {
    margin-inline-end: 4em;
  }
`

const Stats = ({ url }) => {
  const stats = useStats(url)

  const allStats = useMemo(() => {
    if (!stats) {
      return {}
    }

    const active = {
      title: 'active',
      status: 'active',
      value: stats.confirmed.value - stats.deaths.value - stats.recovered.value,
    }
    const confirmed = {
      title: 'confirmed',
      status: 'confirmed',
      value: stats.confirmed.value,
    }
    const deaths = {
      title: 'deaths',
      status: 'deaths',
      value: stats.deaths.value,
    }
    const recovered = {
      title: 'recovered',
      status: 'recovered',
      value: stats.recovered.value,
    }

    const theStats = { active, confirmed, deaths, recovered }

    const labels = Object.values(theStats).map(stat => stat.title)

    const datasets = [
      {
        data: Object.values(theStats).map(stat => stat.value),
        backgroundColor: Object.values(theStats).map(
          stat => statColors[stat.status],
        ),
      },
    ]

    return {
      stats: theStats,
      chartData: { labels, datasets },
      lastUpdated: new Intl.DateTimeFormat('en-US').format(
        new Date(stats.lastUpdate),
      ),
    }
  }, [stats])

  if (!stats) return <p>Loading ...</p>

  if (stats?.error?.message) {
    return <p>Error fetching stats</p>
  }

  return (
    <Wrapper>
      <StatsWrapper>
        <StatsGrid>
          {Object.entries(allStats.stats).map(([key, stat]) => (
            <StatsBlock {...stat} key={key} />
          ))}
        </StatsGrid>
        <h5>Last updated: {allStats.lastUpdated}</h5>
      </StatsWrapper>
      <div className='chartWrapper'>
        <Doughnut
          data={allStats.chartData}
          width={450}
          height={450}
          options={{
            responsive: true,
          }}
        />
      </div>
    </Wrapper>
  )
}

export default Stats
