import { useState, useEffect } from 'react'

export default function useStats(url) {
  const [stats, setStats] = useState()

  useEffect(() => {
    async function fetchStats() {
      const data = await fetch(url).then(data => data.json())
      setStats(data)
    }

    fetchStats()
  }, [url])

  return stats
}
