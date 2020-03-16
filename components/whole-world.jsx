import React, { memo } from 'react'

import Stats from './stats'
import Box from './box'

const WholeWorld = memo(function WholeWorld() {
  return (
    <Box>
      <h3>Stats for the World:</h3>
      <Stats url='https://covid19.mathdro.id/api'></Stats>
    </Box>
  )
})

export default WholeWorld
